class Blockchain {
  // 1. 完成构造函数及其参数
  /* 构造函数需要包含 
      - 名字
      - 创世区块
      - 存储区块的映射
  */
  constructor(_name) {
    this.name = _name
    this.genesis = null
    this.blocks = {}
  }
  // 2. 定义 longestChain 函数
  /* 
    返回当前链中最长的区块信息列表
  */
  longestChain() {
    var longestChain = []
    var temp = 0 //用于记录区块高度
    var BlockPointer = null 
    // 遍历所有区块，找到最高的区块高度
    for (let hash in this.blocks) {
      // 我们的集合结构是：    hash:区块
      if (this.blocks[hash].height >= temp) {
          temp = this.blocks[hash].height
      }
    }
    // 根据区块高度找到最高的区块
    for (let hash in this.blocks) {
      if (this.blocks[hash].height === temp) {
        BlockPointer = this.blocks[hash]
        longestChain.push(BlockPointer)
        break
      }
    }
    // 根据该区块一直向前遍历，直至创世区块
    while (this.blocks[BlockPointer.previousHash] != null) { 
      //因为高度为1的区块的previousHash是'root'，它在this.blocks里面找不到相同的值，因此会是null
      // 因为之前已经将最高的区块放进了longestChain数组
      // 这里每次遍历，是将BlockPointer前一个区块放进longestChain数组
      longestChain.push(this.blocks[BlockPointer.previousHash])
      BlockPointer = this.blocks[BlockPointer.previousHash]
    }
    return longestChain.reverse()
    }
}
export default Blockchain
