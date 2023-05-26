import crypto from 'crypto'

const generateHash = (content) => crypto.createHash("sha256").update(content).digest("hex")

class MerkleTree{
    constructor(name,content,level,parent) {
        this.name = name
        this.content = content
        this.level = level
        this.parent = parent

        this.children = []

        this.hash = generateHash(JSON.stringify({
            name: this.name,
            level: this.level,
            content: this.content
        }))
    }

    setContent(content){
        this.content = content
        this.hash = generateHash(JSON.stringify({
            name: this.name,
            level: this.level,
            content: this.content
        }))

        this.updateChildrenHashes()
    }

    updateChildrenHashes(){
        if(this.children.length !== 0) {
            this.hash = generateHash(this.getChildHashes())
        }
        // if its parent exists, we would update
        this.parent && this.parent.updateChildrenHashes()
    }

    getChildHashes(){
        return this.children.reduce((previous,current) => previous += current.hash,"")
    }

    initAddChild(node) {
        this.children.push(node)
        this.hash = generateHash(this.getChildHashes())
    }

    deleteChild(){
        // 只有左子树，删除左子树
        if(this.children.length == 1){
            this.children = []
            this.hash = generateHash(JSON.stringify({
                name: this.name,
                level: this.level,
                content: this.content
            }))
            this.updateChildrenHashes()
        }else {// 有左右子树，删除右子树
            this.children.pop()
            this.hash = generateHash(this.getChildHashes())
            this.updateChildrenHashes()
        }
    }

    addChild(node){
        this.children.push(node)
        this.hash = generateHash(this.getChildHashes())
        this.updateChildrenHashes()
    }
}

function test(){
    const root = new MerkleTree("rootNode","root",0,)
    const child1 = new MerkleTree("child1","child 1 content",root.level+1,root)
    const child2 = new MerkleTree("child2","child 2 content",root.level+1,root)
    const child3 = new MerkleTree("child3","child 3 content",child1.level+1,child1)
    const child4 = new MerkleTree("child4","child 4 content",child1.level+1,child1)

    console.log(`刚创建root节点时头节点的hash值为: ${root.hash}`)
    child1.initAddChild(child3)
    console.log(`child1添加child3之后头节点的hash值为: ${root.hash}`)
    root.initAddChild(child1)
    console.log(`root添加child1之后头节点的hash值为: ${root.hash}`)
    root.initAddChild(child2)
    console.log(`root添加child2之后头节点的hash值为: ${root.hash}`)
    child3.setContent("child 3 content")
    console.log(`更改child3的信息，但内容不变,之后头节点的hash值为: ${root.hash}`)
    child1.deleteChild()
    console.log(`删除child3之后头节点的hash值为: ${root.hash}`)
    child1.addChild(child4)
    console.log(`child1添加回child1之后头节点的hash值为: ${root.hash}`)
    child1.deleteChild()
    console.log(`删除child4之后头节点的hash值为: ${root.hash}`)
}

test()
