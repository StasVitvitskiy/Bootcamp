import {Node,getTail,insert,prepend,remove,traverse,traverseInReverse} from "./doubly_linked_list"
const checkListElements = (list, values) => {
    let count = 0;
    for(let node of list) {
        expect(node.value).toStrictEqual(values[count]);
        count++;
    }
    expect(count).toBe(values.length);
};
describe("tests for the Node class", () => {
    it("is iterable", () => {
        let node2 = new Node(7);
        let node1 = new Node(5, node2);
        let doublyLinkedList = new Node(3, node1);
        checkListElements(doublyLinkedList, [3,5,7]);
    });
});
describe("tests for the doubly linked list functions", () => {
    const createList = () => {
        let dll = new Node(3);
        dll = insert(dll, 5);
        dll = insert(dll, 6);
        dll = insert(dll, 7);
        return dll;
    }
    it("returns the last node", () => {
        let node2 = new Node(7);
        let node1 = new Node(5, node2);
        let doublyLinkedList = new Node(3, node1);
        expect(getTail(doublyLinkedList)).toStrictEqual(node2);
    });
    it("inserts at the end", () => {
        let dll = new Node(3);
        dll = insert(dll, 5);
        dll = insert(dll, 7);
        checkListElements(dll, [3,5,7]);
    });
    it("adds at the beginning", () => {
        let dll = new Node(33);
        dll = prepend(dll, 1);
        dll = prepend(dll, 0);
        checkListElements(dll, [0,1,33]);
    });
    it("removes value" , () => {
        let dll = createList();
        dll = remove(dll, 3);
        checkListElements(dll, [5,6,7]);

        dll = remove(dll, 5);
        checkListElements(dll, [6,7]);

        dll = remove(dll, 6);
        checkListElements(dll, [7]);

        dll = remove(dll, 7);
        expect(dll).toBe(null);

        dll = createList();
        dll = remove(dll, 7);
        checkListElements(dll, [3,5,6]);

        dll = remove(dll, 1000);
        checkListElements(dll,[3,5,6]);
    });
    it("calls a function for every value", () => {
        let dll = createList();
        let count = 0;
        traverse(dll, (value) => {
            if(count == 0) {
                expect(value).toBe(3);
            }
            if(count == 1) {
                expect(value).toBe(5);
            }
            if(count == 2) {
                expect(value).toBe(6);
            }
            if(count == 3) {
                expect(value).toBe(7);
            }
            count++;
        })
        expect(count).toBe(4);
    });
    it("calls a function for every value going backwards", () => {
        let dll = createList();
        let count = 0;
        traverseInReverse(dll, (value) => {
            if(count == 0) {
                expect(value).toBe(7);
            }
            if(count == 1) {
                expect(value).toBe(6);
            }
            if(count == 2) {
                expect(value).toBe(5);
            }
            if(count == 3) {
                expect(value).toBe(3);
            }
            count++;
        })
        expect(count).toBe(4);
    })
})
