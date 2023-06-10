# 实验报告模板

## 小组成员

- 2021131094 陈钦(组长)
- 2021131095 李鑫
- 2021131092 彭敏
- 2021131107 徐诚杰
- 2021131105 彭郅崴
- 2021131121 徐烜


## 代码仓库链接

https://github.com/chen4903/blockchain-in-js-workshop-2021



## 第一课代码


### 代码 commint 地址

https://github.com/chen4903/blockchain-in-js-workshop-2021/commits/lesson1

### 代码截图

https://www.aliyundrive.com/s/Vi9BU1aLh2v

### 主观与讨论题内容

1. 讨论了采用哪个方式选取最长链，比如是否删除非最长链的区块、二维数组存储各个链等
2. 用一个for循环遍历每个区块，判断当前区块是否为创世区块，若不是创世区块则放入一个临时链，直到找到创世区块，则找到最长链，放回该链
3. 从最新的高度最高节点回溯找到创世区块 由此找到最长链
4. 如何获取最新最高的节点？如何判断是否有分叉？
5. for循环要遍历每一个区块，直到找到创世区块所在链，该链为最长链
6. 比特币的最长链是“大多数人”决定的，每一个区块都必须引用上一个区块，因此最长链是最难被推翻和篡改的


---

## 第二课代码


### 代码 commint 地址

https://github.com/chen4903/blockchain-in-js-workshop-2021/commits/lesson2


### 代码截图
https://www.aliyundrive.com/s/dUdCDxetF7s


### 主观与讨论题内容
1. 运行结果经常出现内存溢出的问题，代码逻辑是对的，但是有时候跑不通过，估计是Javascript的内存限制
2. 讨论了本次实验的两种情况：一个是找到符合条件的hash值(hash值的前n个位是0)，一个是找到符合条件的nonce值(nonce值的前n个位是0)
3. 按照区块链的逻辑，应该是hash值满足前n位是0才符合条件，而nonce随机数只是为了修改hash值，我们最终选择找到满足条件的hash值版本
4. 最终找到解决方案：在时间戳当中加上随机数，然后进行sha256，这样在一秒钟的当中结果就都不是一样的，这样内存溢出的情况大大减少
5. 加分项如图：https://moe.photo/images/2023/05/17/QQ20230517220744.png



---


## 第三课代码


### 代码 commint 地址

https://github.com/chen4903/blockchain-in-js-workshop-2021/commits/lesson3


### 代码截图

百度网盘分享：https://pan.baidu.com/s/1ADKHCNkXThtmPkq4wYMBzA。密码：1234

### 主观与讨论题内容

1. UTXO模型的设计，输入和输出，是否需要总和来统计每一个UTXO的剩余
2. lesson3.js的测试代码有一些错误和遗漏，经过讨论进行了修改
3. 程序跑起来，有时候无法执行成功(报错)，可能是JS引擎的问题，lesson3执行成功的概率在50%左右，试多几次就跑出来了
4. UTXO的输入输出是如何继承上一个区块中所有的数据的

---




## 第四课代码


### 代码 commint 地址

https://github.com/chen4903/blockchain-in-js-workshop-2021/commits/lesson4


### 代码截图

百度网盘：https://pan.baidu.com/s/1ZkDptev0TRtTifchk6r2YA。密码：1234


### 主观与讨论题内容

1. 本次实验比较简单，讨论了UTXO的数据处理
2. 讨论了区块链中UTXO如何进行设计

---




## 第五课代码


### 代码 commint 地址

https://github.com/chen4903/blockchain-in-js-workshop-2021/commit/a46a2c178f216cc0de3585d9e928d2c533d0ef04


### 代码截图

1. 百度云盘：https://pan.baidu.com/s/1w0_SBNe48ONYuB-SRLg-mw。密码：1234
2. 加分项： 百度云盘 https://pan.baidu.com/s/1Bg8zYrX-amS6Svyg6nGyKw。密码：1234

### 主观与讨论题内容

1. 尝试思考⽐特币交易的处理极限
2. 思考⽐特币的区块⼤⼩与⽐特币挖矿难度的关系
3. 探讨失败的交易是否上链，最终的讨论结果是：失败的交易也上链，但是数据无效，只会更新hash值
4. 讨论了如何记录失败的transaction：最终讨论结果是用一个UTXO["failTx"]来记录，每次失败的交易都会更新此数据


---




## 第六课代码


### 代码 commint 地址

https://github.com/chen4903/blockchain-in-js-workshop-2021/commit/2c18f05fd6863bc172e16ac0b9d3631f514ea3a3


### 代码截图

百度云盘：https://pan.baidu.com/s/1qGxIt9yccbKxwSRIpPIqjg。密码：1234


### 主观与讨论题内容

1. 讨论思考什么样的交易费⽤是合理的：我们觉得交易的手续费应该是占此次交易的某个百分比比较合适
2. 如果去掉交易费⽤⽐特币⽹络会发⽣什么：那么当2100万个比特币被挖出来之后，矿工就没有了代币激励，就不挖矿了，如果还有手续费，他们还会继续工作
3. 还讨论了新增了fee之后，计算hash的时候应该如何改变，并且新增了fee，之前的代码会有些变动，应该如何修改

---


## 结课报告


### 代码 commint 地址

https://github.com/chen4903/blockchain-in-js-workshop-2021/commit/19be4708b5c4a5c7db482f9e4584e1334297e157


### 代码截图

百度云盘：https://pan.baidu.com/s/1b4Kv8mYpHl8Gog62nZMSXg。密码：1234


1. 此次教程挺有意思的，一步一步构建区块链系统，从lesson1到final，一共7次，用JavaScript。
2. 实现了比特币区块链系统的整体框架与运行逻辑，具体细节没有考虑到位
3. 另外的三个理论课附带是实验课是：默克尔树，字典树，以太坊世界状态树，其实就是用JavaScript来实现这些数据结构，其中以太坊世界状态树比较难
4. 2023/06/10 记
5. 以上