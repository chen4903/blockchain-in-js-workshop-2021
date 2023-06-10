import sha256 from 'crypto-js/sha256.js'
import UTXO from './UTXO.js'
import { all } from 'ramda'

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

  // 汇总计算交易的 Hash 值
  /**
   * 默克尔树实现
   */
  combinedTransactionsHash(){
    var allTransaction = ""
    const keys = Object.keys(this.utxoPool.utxos);
    for(let i = 0;i < keys.length; i++){
      if(keys[i] == "failTx"){
        continue
      }
      allTransaction = allTransaction + keys[i] + this.utxoPool.utxos[keys[i]].amount.toString()
      allTransaction = sha256(allTransaction).toString()
    }
    this.hash = sha256(allTransaction).toString()
    return this.hash
  }

  // 添加交易到区块
  /**
   * 
   * 需包含 UTXOPool 的更新与 hash 的更新
   */
  addTransaction(trx) {
    if(!this.utxoPool.isValidTransaction(trx)){
      // 失败的交易也打包上链，但是不合法，仅更新区块的哈希
      // 失败的交易会更新一次failTx的amount，其值是sha256加密之后的结果
      if(this.utxoPool.utxos["failTx"] == undefined){
        let utxo = new UTXO()
        this.utxoPool.utxos["failTx"] = utxo
        this.utxoPool.utxos["failTx"].amount = sha256(this.utxoPool.utxos["failTx"].amount + trx.from + trx.to + trx.value).toString()
      }else{
        this.utxoPool.utxos["failTx"].amount = sha256(this.utxoPool.utxos["failTx"].amount + trx.from + trx.to + trx.value).toString()
      }
      return
    }
    this.utxoPool.utxos[trx.from].amount -= trx.value
    this.utxoPool.utxos[trx.from].amount -= trx.fee // 减去手续费
    if(this.utxoPool.utxos[trx.to] == undefined){
        let utxo = new UTXO()
        this.utxoPool.utxos[trx.to] = utxo
        this.utxoPool.utxos[trx.to].amount += trx.value
        this.utxoPool.utxos[this.coinbaseBeneficiary].amount += trx.fee //矿工得到手续费
    }else{
      this.utxoPool.utxos[trx.to].amount += trx.value
      this.utxoPool.utxos[this.coinbaseBeneficiary].amount += trx.fee //矿工得到手续费
    }
    this.combinedTransactionsHash()
  }
  
}

export default Block

