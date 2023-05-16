export const DIFFICULTY = 3

class Block {

  constructor(blockchain, previousHash, height, hash) {
    this.blockchain = blockchain
    this.previousHash = previousHash
    this.height = height
    this.hash = hash
    this.nonce = 0 // 此版本是找到前n位是0的hash值
    //this.nonce = "" // 此版本是找到前n位是0的nonce值
  }

/*
###########################################################
                此版本是找到前n位是0的nonce值
###########################################################

    这里是设置随机数，而不是设置hash
    如果符合区块链逻辑的话，应该是设置hash的前n位是0，这个版本已经写了，在前面的注释当中
    这个版本更容易跑通测试

  isValid() {
    if (this.nonce.startsWith('0'.repeat(DIFFICULTY))) {
      return true
    }else {
      return false
    }
  }

  setNonce(nonce) { 
    this.nonce = nonce
  }
*/  


/*

###########################################################
                此版本是找到前n位是0的hash值
###########################################################

    此版本会触发内存溢出，很奇怪
    只有尝试很多次才成功一次，可能存储的区块数据过多，导致内存溢出了

    ！！！！！！如果多次尝试无法成功，请尝试上面注释的版本！！！！！！！
*/
  isValid() {
    const prefix = "0".repeat(DIFFICULTY);
    return this.hash.substring(0, DIFFICULTY) === prefix;
  }

  setNonce(_hash) {
    this.hash = _hash
    this.nonce++
  }
}

export default Block
