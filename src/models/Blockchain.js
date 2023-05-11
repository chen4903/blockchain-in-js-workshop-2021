// Blockchain
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

  
  /*
  longestChain1() {
    var blockValues = Object.values(this.blocks);
    var len = blockValues.length // 记录数组中区块的个数
    if(len > blockValues[len-1].num){ // 如果发生分叉
      if(this.bifurcation != blockValues[len-1].num && this.bifurcation != 0){ //分叉之后，又来了一个区块，然后最长链形成
        var temp = Object.values(this.blocks);
        var result = Object.values(this.blocks);
        result.pop()
        result.pop()
        result.pop()
        if(temp[len-3].hash == temp[len-1].preHash){
          result.push(blockValues[len-3])
          result.push(blockValues[len-1])
          blockValues = result
          this.blocks = blockValues
          return blockValues
        }else{
          result.push(blockValues[len-2])
          result.push(blockValues[len-1])
          blockValues = result
          this.blocks = blockValues
          return blockValues
        }
      }
        // 发生了分叉，暂时不删除元素，先选其一返回数组
        this.bifurcation = blockValues[len-1].num
        var temp = blockValues
        temp.pop()
        return temp
    }
    return blockValues
  }
  */

  /*
  longestChain2(){

    var blockValues = Object.values(this.blocks);
    var len = blockValues.length // 记录数组中区块的个数
    var result = []
    var number = 0 // 用于记录result中的序号
    for (let index = len; index > 0; index--) {
      if(result.length != 0 && blockValues[index-1].num == result[number].num){ //如果处于分叉
        this.bifurcation = 1
        continue
      }
      if(result.length != 0 && blockValues[index-1].hash == result[number].preHash ){
        number++
        result.push(blockValues[index-1])
      }else{
        if(index == len){
          result.push(blockValues[index-1])
        }
        continue
      }
    }

    return result.reverse()
  }
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
