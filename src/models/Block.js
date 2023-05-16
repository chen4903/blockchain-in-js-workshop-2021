class Block {
  // 1. 完成构造函数及其参数

  constructor(_Blockchain,_preHash,_num,_hash) {
    this.Blockchain = _Blockchain
    this.preHash = _preHash
    this.num = _num
    this.hash = _hash
  }
  
}

export default Block

