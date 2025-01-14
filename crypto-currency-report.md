# 数字货币技术理论课实验报告

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
代码位于lesson1：
https://github.com/chen4903/blockchain-in-js-workshop-2021/commit/0c50545cf5db88ac5e467c1a114f3d1e42e372de


### 代码截图

百度云盘：https://pan.baidu.com/s/17GHWIDFXk1z2OQ7T-ywEaA。密码：1234


### 主观与讨论题内容

1. 讨论到底用数组实现还是链表实现，最终采用数组实现
2. 讨论每个节点是否需要高度、内容等属性，还是只需要hash值
3. 代码最终运行结果的展示方式

---



## 第二课代码


### 代码 commint 地址
代码位于lesson2：
https://github.com/chen4903/blockchain-in-js-workshop-2021/commit/e29ceea7c939eb2775151e222d620c05c621e563


### 代码截图

百度网盘：https://pan.baidu.com/s/1k-685NwfCC7gml67ctuTlA。密码：1234


### 主观与讨论题内容
1. 讨论了字典树的优缺点：优点【快速搜索、节省空间、自动完成、高效插入和删除、高效排序、紧凑表示形式、】，缺点【存储空间需求高、相较哈希表效率更低】
2. 讨论了如何能够扩展和优化字典树数据结构：使用前缀树（Patricia Trie）：前缀树是一种高度压缩的字典树形式，它通过将具有单一子节点的节点合并为一个节点，从而减少了存储空间。前缀树通常用于处理大量的静态字符串集合。还有压缩字典树（Trie Compression）、基于数组的字典树（Array-based Trie）、位运算优化等方式进行优化
3. 还讨论了如何设计trie树的结构和属性，设计它的添加和删除方式
---


## 第三课代码


### 代码 commint 地址

https://github.com/chen4903/blockchain-in-js-workshop-2021/commit/f6254390f62df38700de6b71a8dbc792472f11be


### 代码截图

百度网盘：https://pan.baidu.com/s/1-SS4ZidTDRQ1q5xSL6QlIw。密码：1234


### 主观与讨论题内容

1. 讨论了MPT树的结构设计，数组和链表结合，递归等
2. 讨论了基于字典树, 以太坊做了改良：MPT树使得遍历、插入、验证数据更加容易，高效
3. MPT 想要解决的核⼼问题是什么：上传、验证数据的高效性
4. 由于实际的MPT树的设计很复杂，本次实验只做最简版的，没有考虑用raw编码和hp编码，前缀prefix，nibble等没有考虑，只将最核心的部分做了实现

---