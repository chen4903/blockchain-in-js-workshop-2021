import MerkleTree from "./merkle.js"

/*
    ============================================================
                              doc
    ============================================================
                        @ author: LEVI_104
                        @ lesson: Cryptocurrency-theory lesson-lesson1
                        @ date: 2023/05/26
                        @ university: CUIT
    ============================================================
    # describe: this is the easy implementation of merkleTree, by array but not link list.
    # how to use?
    1. create a merkleTree: enter the leaves value of merkleTree into the arr
    2. verify the leaves' hash: the fist value of arrVerify is the hash to be checked,
        and the data that help to verify are as follows. You don't need to push the rootHash in it,
        since the merkleTree contains the rootHash
 */

// for instance
var arr = ["1","2","3","4","5","6","7","8"]
console.log(`use the array to init the merkleTree: [${arr}]`)
var merkletree = new MerkleTree(arr)
console.log(`merkleTree's rootHash: ${merkletree.merkleTree()}`)
console.log("merkleTree's details are as follows:")
console.log(merkletree.hashArray)
var arrVerify = ["6a9a98aeb38be37ce667c1fc90785125a1502bd0df1ab2eb6ebd40d6bfdb300f",
    "80528851f07939e927fc6fa72ad571434f48c06bd020bad8a44e9e66a652b829",
    "ddd9feba0ac3052b9600ef7dff697b2d3fc7a3bc5fdbfd66707a18e48256bf57",
    "060923094e1c4d0793261648435dea1ac7d9a337358f97db516eb0349aca74b8"]
console.log(`whether the hash'${arrVerify[0]}' in the merkleTree or not: ${merkletree.verify(arrVerify)}`)
