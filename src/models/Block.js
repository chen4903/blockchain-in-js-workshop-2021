import sha256 from 'crypto-js/sha256.js'

export const DIFFICULTY = 2

class Block {
  // 1. 完成构造函数及其参数

  constructor(_Blockchain,_preHash,_num,_hash) {
    //  var genesisBlock = new Block(blockchain, 'root', 0, 'root')
    this.Blockchain = _Blockchain
    this.preHash = _preHash
    this.num = _num
    this.hash = _hash
  }

  isValid() {}

  setNonce(nonce) {}
  
}

export default Block

