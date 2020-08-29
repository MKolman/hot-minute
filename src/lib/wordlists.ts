import store from '../store';

class WordTree {
  key: string;

  subtrees: { [key: string]: WordTree};

  wordList: string[];

  numWords: number;

  constructor(key: string, wordList: string[]) {
    this.key = key;
    this.subtrees = {};
    this.wordList = wordList || [];
    this.numWords = this.wordList.length;
  }

  addSubtree(tree: WordTree) {
    this.subtrees[tree.key] = tree;
  }

  insertNode(longKey: string, wordList: string[]) {
    if (longKey.length === 0) {
      this.wordList = this.wordList.concat(wordList);
      this.numWords += wordList.length;
    } else {
      this.numWords += wordList.length;
      const key = longKey.split('/', 1)[0];
      if (!this.subtrees[key]) this.subtrees[key] = new WordTree(key, []);
      this.subtrees[key].insertNode(longKey.slice(key.length + 1), wordList);
    }
  }

  findSubtree(longKey: string): WordTree {
    if (longKey === '') return this;
    const key = longKey.split('/', 1)[0];
    if (!this.subtrees[key]) return new WordTree(key, []);
    return this.subtrees[key].findSubtree(longKey.slice(key.length + 1));
  }

  getRandom(key: string): string {
    const targetTree = this.findSubtree(key);
    return targetTree.get(Math.floor(Math.random() * targetTree.numWords));
  }

  get(idx: number): string {
    if (idx < this.wordList.length) return this.wordList[idx];
    let index = idx - this.wordList.length;

    const trees = Object.values(this.subtrees);
    for (let i = 0; i < trees.length; i += 1) {
      if (index < trees[i].numWords) return trees[i].get(index);
      index -= trees[i].numWords;
    }
    return 'Ice Ice Baby';
  }

  log(prefix: string) {
    const trees = Object.values(this.subtrees);
    for (let i = 0; i < trees.length; i += 1) {
      trees[i].log(`${prefix}  `);
    }
  }

  all(prefix: string): {id: string; name: string; children: any[]} {
    const longKey = `${prefix}/${this.key}`;
    let name = this.key.split('.', 1)[0].replace(/_/g, ' ');
    name = name[0].toUpperCase() + name.slice(1);
    const result = {
      id: longKey,
      name,
      children: [] as any[],
    };
    const trees = Object.values(this.subtrees);
    for (let i = 0; i < trees.length; i += 1) {
      result.children.push(trees[i].all(longKey));
    }
    return result;
  }

  filter(selectedNodes: string[], prefix: string) {
    const key = `${prefix}/${this.key}`;
    this.numWords = 0;
    if (selectedNodes.indexOf(key) !== -1) this.numWords += this.wordList.length;

    this.numWords += Object.values(this.subtrees).reduce((sum: number, tree: WordTree) => {
      tree.filter(selectedNodes, key);
      return sum + tree.numWords;
    }, 0);
  }

  loadSettings() {
    this.filter(store.state.selectedWordlists2, '');
  }
}

const wordTree = new WordTree('root', []);

function importAll(r: any) {
  r.keys().forEach((key: string) => { wordTree.insertNode(key.slice(2), r(key).default.split('\n')); });
}
importAll(require.context('../assets/wordlists/', true, /\.txt$/));

export default wordTree;
