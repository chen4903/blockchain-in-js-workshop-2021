import sha256 from 'crypto-js/sha256.js'

export const DIFFICULTY = 3

class Block {

  constructor(_blockchain, _previousHash, _height, _hash, _coinbaseBeneficiary) {
    this.blockchain = _blockchain
    this.previousHash = _previousHash
    this.height = _height
    this.hash = _hash
    this.nonce = 0
    this.coinbaseBeneficiary = _coinbaseBeneficiary
    this.utxoPool = null
  }

  isValid() {
    const prefix = "0".repeat(DIFFICULTY);
    return this.hash.substring(0, DIFFICULTY) === prefix
  }

  setNonce(_time) {
    // 因为传入的是时间戳，计算机在一秒当中可以运行很多次，尝试很多次，但是结果都是一致的(时间戳不变)
    // 因此我们需要将时间戳加上nonce，然后sha256，就可以保证在一秒中计算出来的结果不一样
    // 不这样做的话，会非常耗费系统资源，导致内存溢出。当然此处也经常出现内存溢出的情况
    let temp = parseInt(_time) + this.nonce
    this.hash = sha256(temp.toString()).toString()
    this.nonce++
  }
}

export default Block