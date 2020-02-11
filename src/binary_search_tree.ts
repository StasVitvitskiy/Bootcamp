export class Tree {
    constructor(rootValue) {
        if(rootValue == null|| rootValue == undefined) {
            this.root = null;
        } else {
            this.root = new Node(rootValue);
        }
    }
    inOrderTraversal(callback) {
        if(this.root == null) {
            return;
        }
        this.root.inOrderTraversal(callback);
    }
    preOrderTraversal(callback) {
        if(this.root == null) {
            return;
        }
        this.root.preOrderTraversal(callback);
    }
    postOrderTraversal(callback) {
        if(this.root == null) {
            return;
        }
        this.root.postOrderTraversal(callback);
    }
    findMin() {
        if(this.root == null) {
            return undefined;
        }
        return this.root.getLeftmostChild().value;
    }
    findMax() {
        if(this.root == null) {
            return undefined;
        }
        return this.root.getRightmostChild().value;
    }
    remove(value) {
        if(this.root == null) {
            return false;
        }
        let foundNode = this.root.findNode(value);
        let parent = this.root.findParent(value);
        if(foundNode == null) {
            return false;
        }
        if(foundNode.left == null && foundNode.right == null) {
            if(parent == null) {
                this.root = null;
                return true;
            }
            if(parent.left == foundNode) {
                parent.left = null;
            } else {
                parent.right = null;
            }
            return true;
        }
        if(foundNode.left == null) {
            foundNode.value = foundNode.right.value;
            foundNode.left = foundNode.right.left;
            foundNode.right = foundNode.right.right;
            return true;
        }
        if(foundNode.right == null) {
            foundNode.value = foundNode.left.value;
            foundNode.right = foundNode.left.right;
            foundNode.left = foundNode.left.left;
            return true;
        }
        let leftmostChild = foundNode.right.getLeftmostChild();
        foundNode.value = leftmostChild.value;
        let leftmostChildParent = foundNode.right.findParent(leftmostChild.value)
        if(leftmostChildParent == null) {
            foundNode.right = null;
        } else {
            leftmostChildParent.left = leftmostChild.right;
        }
        return true;
    }
    contains(value) {
        if(this.root == null) {
            return false;
        }
        return this.root.contains(value);
    }
    insert(value) {
        if(this.root == null) {
            this.root = new Node(value);
        } else {
            this.root.insert(value);
        }
    }
    toArray() {
        if(this.root == null) {
            return [];
        }
        return this.nodeToArray(this.root, 0, []);

    }
    private nodeToArray(node, index, array) {
        array[index] = node.value;
        let leftChildInd = (2*index) + 1;
        let rightChildInd = (2*index) + 2;
        if(node.left != null) {
            this.nodeToArray(node.left, leftChildInd, array);
        }
        if(node.right != null) {
            this.nodeToArray(node.right, rightChildInd, array);
        }
        return array;
    }
}
export class Node {
    constructor(value) {
        this.value = value
    }
    left = null;
    right = null;
    inOrderTraversal(callback) {
        if(this.left != null) {
            this.left.inOrderTraversal(callback);
        }
        callback(this.value);
        if(this.right != null) {
            this.right.inOrderTraversal(callback);
        }
    }
    preOrderTraversal(callback) {
        callback(this.value);
        if(this.left != null) {
            this.left.preOrderTraversal(callback);
        }
        if(this.right != null) {
            this.right.preOrderTraversal(callback);
        }
    }
    postOrderTraversal(callback) {
        if(this.left != null) {
            this.left.postOrderTraversal(callback);
        }
        if(this.right != null) {
            this.right.postOrderTraversal(callback);
        }
        callback(this.value);
    }
    getLeftmostChild() {
        let container = this;
        while(container.left != null) {
            container = container.left;
        }
        return container;
    }
    getRightmostChild() {
        let container = this;
        while(container.right != null) {
            container = container.right;
        }
        return container;
    }
    findParent(value) {
        if(this.left != null) {
            if(this.left.value == value) {
                return this;
            }
            let leftFound = this.left.findParent(value);
            if(leftFound != null) {
                return leftFound;
            }
        }
        if(this.right != null) {
            if(this.right.value == value) {
                return this;
            }
            let rightFound = this.right.findParent(value);
            if(rightFound != null) {
                return rightFound;
            }
        }
        return null;
    }
    findNode(value) {
        if(this.value == value) {
            return this;
        }
        if(this.left != null) {
            let foundLeft = this.left.findNode(value);
            if(foundLeft) {
                return foundLeft;
            }
        }
        if(this.right != null) {
            let foundRight = this.right.findNode(value);
            if(foundRight) {
                return foundRight;
            }
        }
        return null;
    }
    insert(value) {
        if(this.value > value) {
            if(this.left != null) {
                this.left.insert(value);
            } else {
                this.left = new Node(value);
            }

        }
        if(this.value < value) {
            if(this.right != null) {
                this.right.insert(value)
            } else {
                this.right = new Node(value);
            }
        }
    }
    contains(value) {
        if(this.value == value) {
            return true;
        }
        if(this.left != null) {
            if(this.left.contains(value) == true) {
                return true;
            }
        }
        if(this.right != null) {
            if(this.right.contains(value) == true) {
                return true;
            }
        }
        return false;
    }
}
