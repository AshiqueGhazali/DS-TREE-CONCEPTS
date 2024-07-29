class Node {
    constructor(value){
        this.data = value
        this.left = null
        this.right = null
    }
}

class binarySearchTree {
    constructor(){
        this.root = null
    }

    insert(value){
        const newData = new Node(value)
        if(!this.root){
            this.root = newData
        }else{
            this.insertNode(this.root, newData)
        }
    }

    insertNode(root,node){
        if(node.data < root.data){
            if(root.left === null){
                root.left = node
            }else{
                this.insertNode(root.left,node)
            }
        }else{
            if(root.right === null){
                root.right = node
            }else{
                this.insertNode(root.right,node)
            }
        }
    }

    search(root,data){
        if(root===null){
            return false
        }
        
        if(root.data===data){
            return true
        }else if(data < root.data){
            return this.search(root.left,data)
        }else{
            return this.search(root.right,data)
        }
    }

    remove(data){
        return this.removeNode(this.root,data)
    }

    removeNode(root,data){
        if(root === null){
            return null
        }

        if(data < root.data){
            root.left = this.removeNode(root.left,data)
        }else if(data > root.data){
            root.right = this.removeNode(root.right,data)
        }else{
            if(root.left === null && root.right === null){
                return null
            }

            if(root.left === null){
                return root.right
            }else if(root.right === null){
                return root.left
            }

            const temp = this.findMin(root.right)
            root.data = temp.data
            root.right = this.removeNode(root.right, temp.data)
        }

        return root
    }

    findMin(root){
        while(root.left !== null){
            root = root.left
        }
        return root
    }

    findMax (root){
        while(root.right !== null){
            root = root.right
        }

        return root
    }

    count(root){
        if(!root){
            return 0
        }

        return this.count(root.left)+this.count(root.right)+1
    }

    height(root = this.root){
        if(!root){
            return 0
        }

        return Math.max(this.height(root.left), this.height(root.right))+1
    }

    BredthFirstSearch(){
        const result = []
        const queue = []

        if(this.root){
            queue.push(this.root)
        }

        while(queue.length > 0){
            const node = queue.shift()
            result.push(node.data)

            if(node.left !== null){
                queue.push(node.left)
            }

            if(node.right !== null){
                queue.push(node.right)
            }
        }

        return result
    }

    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.data);
            this.inOrder(root.right)
        }
    }

    preOrder(root = this.root){
        if(root){
            console.log(root.data);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    postOrder(root = this.root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.data);
        }
    }

    findClosestValueOfANode(root, target){
        let closest = root.data

        while(root !== null){
            if(Math.abs(target-closest) > Math.abs(target - root.data)){
                closest = root.data
            }


            if(target < root.left){
                root = root.left
            }else if(target > root.right){
                root = root.right
            }else{
                break
            }
        }
        return closest
    }

    isValid(root, min=null,max=null){
        if(root === null){
            return true
        }
        if((min !== null && root.data <= min) || (max !== null && root.data >= max)){
            return false
        }

        return this.isValid(root.left,min,root.data)&& this.isValid(root.right,root.data,max)
    }

    isSubset(root1,root2){
        if(root1 === null){
            return true
        }

        if(!this.contains(root2,root1.data)){
            return false
        }

        return this.isSubset(root1.left, root2)&&this.isSubset(root1.right,root2)

        
    }

    contains(root, data){
        if(root === null){
            return false
        }

        if(root.data > data){
            this.contains(root.left, data)
        }else if(root.data < data){
            this.contains(root.right , data)
        }else{
            return true
        }
    }
}

const BST = new binarySearchTree()
BST.insert(13)
BST.insert(22)
BST.insert(3)
BST.insert(65)
BST.insert(4)
BST.insert(1)
console.log(BST.isValid(BST.root));