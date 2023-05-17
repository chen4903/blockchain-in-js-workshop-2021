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
1. 运行结果：https://moe.photo/images/2023/05/17/QQ20230517215514.png。
2. BlockJS： https://moe.photo/images/2023/05/17/aaa.png
3. BlockchainJS： https://moe.photo/images/2023/05/17/Blockchain.png。


### 主观与讨论题内容
1. 运行结果经常出现内存溢出的问题，代码逻辑是对的，但是有时候跑不通过，估计是Javascript的内存限制
2. 讨论了本次实验的两种情况：一个是找到符合条件的hash值(hash值的前n个位是0)，一个是找到符合条件的nonce值(nonce值的前n个位是0)
3. 按照区块链的逻辑，应该是hash值满足前n位是0才符合条件，而nonce随机数只是为了修改hash值，我们最终选择找到满足条件的hash值版本
4. 最终找到解决方案：在时间戳当中加上随机数，然后进行sha256，这样在一秒钟的当中结果就都不是一样的，这样内存溢出的情况大大减少
5. 加分项如图：https://moe.photo/images/2023/05/17/QQ20230517220744.png



---


## 第三课代码


### 代码 commint 地址

https://github.com/CUITBlockchain/blockchain-in-js-workshop-2021/commit/25f3a0d83a9fff2b4514c5503f470df939d0c2af


### 代码截图

> 将截图上传至网盘，放入链接即可

![](链接)


### 主观与讨论题内容



---




## 第四课代码


### 代码 commint 地址

https://github.com/CUITBlockchain/blockchain-in-js-workshop-2021/commit/25f3a0d83a9fff2b4514c5503f470df939d0c2af


### 代码截图

> 将截图上传至网盘，放入链接即可

![](链接)


### 主观与讨论题内容



---




## 第五课代码


### 代码 commint 地址

https://github.com/CUITBlockchain/blockchain-in-js-workshop-2021/commit/25f3a0d83a9fff2b4514c5503f470df939d0c2af


### 代码截图

> 将截图上传至网盘，放入链接即可

![](链接)


### 主观与讨论题内容



---




## 第六课代码


### 代码 commint 地址

https://github.com/CUITBlockchain/blockchain-in-js-workshop-2021/commit/25f3a0d83a9fff2b4514c5503f470df939d0c2af


### 代码截图

> 将截图上传至网盘，放入链接即可

![](图片链接放这里)


### 主观与讨论题内容



---


## 结课报告





