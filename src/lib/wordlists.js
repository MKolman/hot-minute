class WordTree {
  constructor(key, wordList) {
    this.key = key;
    this.subtrees = {};
    this.wordList = wordList || [];
    this.numWords = this.wordList.length;
  }

  addSubtree(tree) {
    this.subtrees[tree.key] = tree;
  }

  insertNode(longKey, wordList) {
    if (longKey.length === 0) {
      this.wordList = this.wordList.concat(wordList);
      this.numWords += wordList.length;
    } else {
      this.numWords += wordList.length;
      const key = longKey.split('/', 1)[0];
      if (!this.subtrees[key]) this.subtrees[key] = new WordTree(key);
      this.subtrees[key].insertNode(longKey.slice(key.length + 1), wordList);
    }
  }

  findSubtree(longKey) {
    if (longKey === '') return this;
    const key = longKey.split('/', 1)[0];
    console.log(key, longKey, Object.keys(this.subtrees));
    if (!this.subtrees[key]) return new WordTree(key);
    return this.subtrees[key].findSubtree(longKey.slice(key.length + 1));
  }

  getRandom(key) {
    console.log(key);
    const targetTree = this.findSubtree(key);
    return targetTree.get(Math.floor(Math.random() * targetTree.numWords));
  }

  get(idx) {
    if (idx < this.wordList.length) return this.wordList[idx];
    let index = idx - this.wordList.length;

    const trees = Object.values(this.subtrees);
    for (let i = 0; i < trees.length; i += 1) {
      if (index < trees[i].numWords) return trees[i].get(index);
      index -= trees[i].numWords;
    }
    return 'Ice Ice Baby';
  }

  log(prefix) {
    console.log(prefix, this.key, ':', this.numWords);
    const trees = Object.values(this.subtrees);
    for (let i = 0; i < trees.length; i += 1) {
      trees[i].log(`${prefix}  `);
    }
  }

  all(prefix) {
    const longKey = `${prefix}/${this.key}`;
    let name = this.key.split('.', 1)[0].replace('_', ' ');
    name = name[0].toUpperCase() + name.slice(1);
    const result = {
      id: longKey,
      name: `${name} (${this.numWords})`,
      children: [],
    };
    const trees = Object.values(this.subtrees);
    for (let i = 0; i < trees.length; i += 1) {
      result.children.push(trees[i].all(longKey));
    }
    return result;
  }
}

const wordTree = new WordTree('root');

function importAll(r) {
  r.keys().forEach((key) => { wordTree.insertNode(key.slice(2), r(key).default.split('\n')); });
}
importAll(require.context('../assets/wordlists/', true, /\.txt$/));

export default wordTree;
