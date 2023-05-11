class Block {
  // 1. 完成构造函数及其参数
  /* 构造函数需要包含

  */
  constructor(_Blockchain,_preHash,_num,_hash) {
    //  var genesisBlock = new Block(blockchain, 'root', 0, 'root')
    this.Blockchain = _Blockchain
    this.preHash = _preHash
    this.num = _num
    this.hash = _hash
  }
  
}

export default Block
