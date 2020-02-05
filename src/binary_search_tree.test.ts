import {Tree, Node} from "./binary_search_tree"
import {values} from "~/object_methods";
describe("tests for the Tree class" ,() => {
    const defaultLeaves = [18, 12,24, 9, 14,21,27, 7, 10, 13, 15, 20, 23, 25, 8, 26];
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
            18,12,24,9,14,21,27,7,10,13,15,23,25,8,26
        ]);

        let onlyRootTree = new Tree(3);
        expect(onlyRootTree.remove(3)).toBe(true);
        expect(onlyRootTree.toArray()).toStrictEqual([]);
    });
    it("removes the node with only 1 child", () => {
        let tree = buildTree();
        expect(tree.remove(25)).toBe(true);
        expect(tree.toArray().filter(Boolean)).toStrictEqual([
            18,12,24,9,14,21,27,7,10,13,15,20,23,26,8
        ]);
        let
    });
    it("removes the node", () => {
        let tree = buildTree();
        tree.remove(21);
        expect(tree.toArray().filter(Boolean)).toStrictEqual([
            18,12,24,9,14,23,27,7,10,13,15,20,25,8,26
        ]);
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
})
