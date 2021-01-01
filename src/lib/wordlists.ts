import store from '../store';

class WordTree {
  key: string;

  subtrees: { [key: string]: WordTree};

  wordList: string[];

  numWords: number;

  name: string;

  constructor(key: string, wordList: string[]) {
    this.key = key;
    this.subtrees = {};
    this.wordList = wordList || [];
    this.numWords = this.wordList.length;
    const name = this.key.split('.', 1)[0].replace(/_/g, ' ');
    this.name = name[0].toUpperCase() + name.slice(1);
  }

  addSubtree(tree: WordTree) {
    this.subtrees[tree.key] = tree;
  }

  insertNode(longKey: string, wordList: string[]): WordTree {
    if (longKey.length === 0) {
      this.wordList = this.wordList.concat(wordList);
      this.numWords += wordList.length;
      return this;
    }
    this.numWords += wordList.length;
    const key = longKey.split('/', 1)[0];
    if (!this.subtrees[key]) this.subtrees[key] = new WordTree(key, []);
    return this.subtrees[key].insertNode(longKey.slice(key.length + 1), wordList);
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

  all(prefix: string): {id: string; name: string; children: object[]} {
    const longKey = `${prefix}/${this.key}`;
    const result = {
      id: longKey,
      name: this.name,
      children: [] as object[],
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

  reload() {
    this.subtrees = {};
    this.wordList = [];
    this.numWords = 0;
    const r = require.context('../assets/wordlists/', true, /\.txt$/);
    r.keys().forEach((key: string) => {
      this.insertNode(key.slice(2), r(key).default.split('\n'));
    });
    // Include custom playlists that users imported
    Object.values(store.state.customWords).forEach(
      (playlist: {key: string; name: string; items: string[]}) => {
        this.insertNode(playlist.key, playlist.items).name = playlist.name;
      },
    );
  }
}

const wordTree = new WordTree('root', []);
wordTree.reload();

export default wordTree;
