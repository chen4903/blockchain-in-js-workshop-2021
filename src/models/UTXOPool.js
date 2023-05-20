import UTXO from './UTXO.js'

class UTXOPool {
  constructor(utxos = {}) {
    this.utxos = utxos
  }

  // 添加交易函数
  /**
   * 将交易的信息更新至 UTXOPool 中
   */
  addUTXO(_miner,_coinbaseBeneficiary,_input,_output) {
    var utxo = new UTXO()
    if(this.utxos[_coinbaseBeneficiary] != null){
      let lastUTXO = this.clone(_miner)
      utxo.amount += lastUTXO.amount 
    }
    utxo.amount += _coinbaseBeneficiary
    utxo.amount += _input
    utxo.amount -= _output
    this.utxos[_miner] = utxo
  }

  // 将当前 UTXO 的副本克隆
  clone(_player) {
    return this.utxos[_player]
  }
}

export default UTXOPool
