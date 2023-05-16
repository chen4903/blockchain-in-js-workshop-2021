class Blockchain {
  // 1. 完成构造函数及其参数
  /* 构造函数需要包含 
      - 名字
      - 创世区块
      - 存储区块的映射
  */

  constructor(_name) {
    this.name = _name 
    this.genesis = "sth..."
    this.blocks = new Object();
    this.bifurcation = 0 // 用于记录此链是否处于分叉状态
  }

  // 2. 定义 longestChain 函数
  /* 
    返回当前链中最长的区块信息列表
  */

  longestChain() {
    // 思想：用一个大的数组来存放所有长度链。每一个链又是一个数组，包含了此链中的所有区块。
    //      每一次都是根据区块的preHash，通过映射的方式快速的找到前一个区块
    const allChains = []; //用于存储所有的区块链
    for (let hash in this.blocks) { // 遍历 this.blocks 对象中的每个属性（即区块的哈希值）。
      let currentBlock = this.blocks[hash]; // 根据hash值获取对应的键
      let currentChain = [currentBlock];
      while (currentBlock.preHash != this.genesis.hash) { //不断的向前查找区块，直到创世区块
        currentBlock = this.blocks[currentBlock.preHash];
        currentChain.push(currentBlock);
      }
      allChains.push(currentChain.reverse()); // 将区块链反序push，因为我们是倒叙来查找区块的
    }
  
    // 对所有区块链按照长度排序，返回最长的区块链
    const sortedChains = allChains.sort(); //根据链的长度排序，从短到长
    return sortedChains[sortedChains.length-1]; //返回最长链
  }
  
  
}

export default Blockchain
