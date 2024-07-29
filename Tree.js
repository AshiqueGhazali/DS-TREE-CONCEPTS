class Node {
    constructor(value) {
        this.value = value;
        this.children = [];
    }

    addChild(child) {
        this.children.push(child);
    }
}

class Tree {
    constructor(rootValue) {
        this.root = new Node(rootValue);
    }

    traverseBFS() {
        let queue = [this.root];
        while (queue.length > 0) {
            let currentNode = queue.shift();
            console.log(currentNode.value);
            for (let child of currentNode.children) {
                queue.push(child);
            }
        }
    }

    traverseDFS(node = this.root) {
        console.log(node.value);
        for (let child of node.children) {
            this.traverseDFS(child);
        }
    }
}

const myTree = new Tree('root');
const child1 = new Node('child1');
const child2 = new Node('child2');
const child3 = new Node('child3');

myTree.root.addChild(child1);
myTree.root.addChild(child2);
child1.addChild(child3);

console.log("BFS Traversal:");
myTree.traverseBFS();  // Output: root, child1, child2, child3

console.log("\nDFS Traversal:");
myTree.traverseDFS();  // Output: root, child1, child3, child2
