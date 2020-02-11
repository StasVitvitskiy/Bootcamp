import {Tree, Node} from "./binary_search_tree"
describe("tests for the Tree class" ,() => {
    const defaultLeaves = [18, 12,24, 9, 14,21,27, 7, 10, 13, 15, 20, 23, 25, 8, 11, 26];
    const buildTree = (elements = defaultLeaves) => {
        return elements.reduce((acc, cur) => {
           acc.insert(cur);
           return acc;

        }, new Tree())
    }
    it("inserts value into the correct leaf", () => {
        let tree = new Tree(9);
        tree.insert(3);
        tree.insert(12);
        tree.insert(1);
        tree.insert(5);
        tree.insert(10);
        expect(tree.toArray()).toStrictEqual([9,3,12,1,5,10]);
    });
    it("returns true if the value is found", () => {
        let tree = new Tree(9);
        tree.insert(3);
        tree.insert(12);
        tree.insert(1);
        tree.insert(5);
        tree.insert(10);
        expect(tree.contains(9)).toBe(true);
        expect(tree.contains(3)).toBe(true);
        expect(tree.contains(12)).toBe(true);
        expect(tree.contains(1)).toBe(true);
        expect(tree.contains(5)).toBe(true);
        expect(tree.contains(10)).toBe(true);
    });
    it("returns false if the value is not found", () => {
        let tree = new Tree(9);
        tree.insert(3);
        tree.insert(12);
        tree.insert(1);
        tree.insert(5);
        tree.insert(10);
        expect(tree.contains(90)).toBe(false);
    });
    it("returns false if the tree is empty", () => {
        let emptyTree = new Tree;
        expect(emptyTree.contains(90)).toBe(false);
    })
    it("returns false when the value is not found", () => {
        let tree = new Tree(25);
        tree.insert(21);
        tree.insert(27);
        tree.insert(20);
        tree.insert(23);
        tree.insert(26);
        expect(tree.remove(100)).toBe(false);

        let emptyTree = new Tree();
        expect(emptyTree.remove(100)).toBe(false);
    });
    it("removes the node with no leaves", () => {
        let tree = buildTree();
        expect(tree.remove(20)).toBe(true);
        expect(tree.toArray().filter(Boolean)).toStrictEqual([
            18,12,24,9,14,21,27,7,10,13,15,23,25,8,11,26
        ]);

        let tree1 = buildTree();
        tree1.remove(26);
        expect(tree1.toArray().filter(Boolean)).toStrictEqual([
            18,12,24,9,14,21,27,7,10,13,15,20,23,25,8,11
        ]);

        let onlyRootTree = new Tree(3);
        expect(onlyRootTree.remove(3)).toBe(true);
        expect(onlyRootTree.toArray()).toStrictEqual([]);
    });
    it("removes the node with only 1 child", () => {
        let tree = buildTree();
        expect(tree.remove(25)).toBe(true);
        expect(tree.toArray().filter(Boolean)).toStrictEqual([
            18,12,24,9,14,21,27,7,10,13,15,20,23,26,8,11
        ]);

        let tree1 = buildTree();
        tree1.remove(7);
        expect(tree1.toArray().filter(Boolean)).toStrictEqual([
            18,12,24,9,14,21,27,8,10,13,15,20,23,25,11,26
        ]);

        let tree2 = buildTree();
        tree2.remove(21);
        tree2.remove(23);
        expect(tree2.toArray().filter(Boolean)).toStrictEqual([
            18,12,24,9,14,20,27,7,10,13,15,25,8,11,26
        ]);

    });
    it("removes the node with 2 children", () => {
        let tree = buildTree();
        tree.remove(21);
        expect(tree.toArray().filter(Boolean)).toStrictEqual([
            18,12,24,9,14,23,27,7,10,13,15,20,25,8,11,26
        ]);

        let tree1 = buildTree();
        tree1.remove(12);
        expect(tree1.toArray().filter(Boolean)).toStrictEqual([
            18,13,24,9,14,21,27,7,10,15,20,23,25,8,11,26
        ]);

        let tree2 = buildTree();
        tree2.remove(18);
        expect(tree2.toArray().filter(Boolean)).toStrictEqual([
            20,12,24,9,14,21,27,7,10,13,15,23,25,8,11,26
        ]);
    })
    it("return the min value", () => {
        let tree = buildTree();
        expect(tree.findMin()).toBe(7);
    });
    it("returns the max value", () => {
        let tree = buildTree();
        expect(tree.findMax()).toBe(27);
    })
    it("returns undefined when the tree is empty", () => {
        let emptyTree = new Tree;
        expect(emptyTree.findMin()).toBe(undefined);
        expect(emptyTree.findMax()).toBe(undefined);
    })
    it("traverses a tree in ascending order", () => {
        let tree = buildTree();
        let array = [7,8,9,10,11,12,13,14,15,18,20,21,23,24,25,26,27];
        let i = 0;
        tree.inOrderTraversal((nodeValue) => {
            expect(nodeValue).toBe(array[i]);
            i++;
        })
    });
    it("does not traverse an empty tree", () => {
        let emptyTree = new Tree;
        emptyTree.inOrderTraversal((nodeValue) => {
            throw new Error();
        })
    });
    it("traverses a tree in pre order", () => {
        let tree = buildTree();
        let array = [18,12,9,7,8,10,11,14,13,15,24,21,20,23,27,25,26];
        let i = 0;
        tree.preOrderTraversal((nodeValue) => {
            expect(nodeValue).toBe(array[i]);
            i++;
        })
    });
    it("does not traverse an empty tree", () => {
        let emptyTree = new Tree;
        emptyTree.preOrderTraversal((nodeValue) => {
            throw new Error();
        })
    });

    it("traverses a tree in post order", () => {
        let tree = buildTree();
        let array = [8,7,11,10,9,13,15,14,12,20,23,21,26,25,27,24,18];
        let i = 0;
        tree.postOrderTraversal((nodeValue) => {
            expect(nodeValue).toBe(array[i]);
            i++;
        })
    });
    it("does not traverse an empty tree", () => {
        let emptyTree = new Tree;
        emptyTree.postOrderTraversal((nodeValue) => {
            throw new Error();
        })
    })
});



describe("tests for the Node class", () => {
    it("finds the correct node", () => {
        let node = new Node(3);
        node.insert(2);
        node.insert(4);
        node.insert(5);
        expect(node.findNode(4)).toStrictEqual(node.right);
        expect(node.findNode(3)).toStrictEqual(node);
        expect(node.findNode(2)).toStrictEqual(node.left);
        expect(node.findNode(5)).toStrictEqual(node.right.right);
    });
    it("returns null when the node is not found", () => {
        let node = new Node(3);
        node.insert(2);
        node.insert(4);
        node.insert(5);
        expect(node.findNode(100)).toStrictEqual(null);
    })
    it("finds parent if the node has one", () => {
        let node =  new Node(3);
        node.insert(2);
        node.insert(1);
        node.insert(4);
        node.insert(5);
        expect(node.findParent(3)).toBe(null);
        expect(node.findParent(2)).toBe(node);
        expect(node.findParent(1)).toBe(node.left);
        expect(node.findParent(4)).toBe(node);
        expect(node.findParent(5)).toBe(node.right);
    });
    it("returns the leftmost child", () => {
        let node = new Node(25);
        node.insert(21);
        node.insert(27);
        node.insert(20);
        node.insert(23);
        node.insert(26);
        expect(node.getLeftmostChild()).toStrictEqual(node.left.left);
    });
    it("returns itself when there is no left branch", () => {
        let node = new Node(25);
        node.insert(27);
        node.insert(30);
        expect(node.getLeftmostChild()).toStrictEqual(node);
    });
});
