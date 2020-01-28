import {Node,tailOfTheList,insert,prepend,contains,remove,traverse,traverseInReverse} from "./linked_list"
const checkListElements = (list, elements) => {
    let count = 0;
    for(let node of list) {
        expect(elements[count]).toStrictEqual(node.value);
        count++;
    }
    expect(count).toBe(elements.length);
}
describe("tests for the Node class", () => {
    it("iterates through the list", () => {
        let node2 = new Node(7, null);
        let node1 = new Node(6, node2);
        let linkedList = new Node(5, node1);
        checkListElements(linkedList, [5,6,7]);
    })
})
describe("tests for the list functions", () => {
    it("returns the tail of the linked list", () => {
        let node2 = new Node(7, null);
        let node1 = new Node(6, node2);
        let linkedList = new Node(5, node1);
        expect(tailOfTheList(linkedList)).toStrictEqual(node2);
        let empty = new Node();
        expect(tailOfTheList(empty)).toStrictEqual(empty);
    });
    it("inserts a new node at the end of the linked list", () => {
        let linkedList = new Node(null);
        insert(linkedList, 3);
        insert(linkedList, 7);
        checkListElements(linkedList, [null, 3,7]);
    });
    it("inserts a new node at the beginning of the linked list", () => {
        let linkedList = new Node(null);
        insert(linkedList, 3);
        insert(linkedList, 7);
        prepend(linkedList, 192);
        expect(linkedList.value).toBe(192);
        prepend(linkedList, 33);
        checkListElements(linkedList, [33,192,null,3,7]);

    });
    it("returns true if list contains element", () => {
        let linkedList = new Node(null);
        insert(linkedList, 3);
        insert(linkedList, 7);
        prepend(linkedList, 192);
        prepend(linkedList, 33);
        expect(contains(linkedList, 3)).toBe(true);
        expect(contains(linkedList, 7)).toBe(true);
    });
    it("returns false if list does not contain the element", () => {
        let linkedList = new Node(null);
        insert(linkedList, 3);
        insert(linkedList, 7);
        prepend(linkedList, 192);
        prepend(linkedList, 33);
        expect(contains(linkedList, 77)).toBe(false);
    });
    it("deletes the element from the linked list", () => {
        let linkedList = new Node(null);
        insert(linkedList, 3);
        insert(linkedList, 7);
        prepend(linkedList, 192);
        prepend(linkedList, 33);
        remove(linkedList, 3);
        checkListElements(linkedList, [33,192,null,7]);
    });
    it("returns null when the list head is deleted", () => {
        let list = new Node(3, null);
        list = remove(list, 3);
        expect(list).toBe(null);
        let linkedList = new Node(null);
        insert(linkedList, 3);
        insert(linkedList, 7);
        prepend(linkedList, 192);
        prepend(linkedList, 33);
        linkedList = remove(linkedList,33);
        expect(linkedList).toBe(null);
    });
    it("returns list when value is not found", () => {
        let list = new Node(3, null);
        remove(list, 40);
        checkListElements(list, [3]);

        insert(list, 33);
        remove(list,40);
        checkListElements(list, [3,33]);
    });
    it("deletes the last element", () => {
        let list = new Node(3, null);
        insert(list, 33);
        remove(list, 33);
        list  = remove(list, 3);
        expect(list).toBe(null);
    });
    it("calls passed function for each value", () => {
        let linkedList = new Node(null);
        insert(linkedList, 3);
        insert(linkedList, 7);
        prepend(linkedList, 192);
        prepend(linkedList, 33);
        let count = 0;
        traverse(linkedList, (el) => {
            if(count == 0) {
                expect(el).toBe(33);
            }
            if(count == 1) {
                expect(el).toBe(192);
            }
            if(count == 2) {
                expect(el).toBe(null);
            }
            if(count == 3) {
                expect(el).toBe(3);
            }
            if(count == 4) {
                expect(el).toBe(7)
            }
            count++;
        })
    });
    it("calls passed function for each element in reverse", () => {
        let linkedList = new Node(null);
        insert(linkedList, 3);
        insert(linkedList, 7);
        prepend(linkedList, 192);
        prepend(linkedList, 33);
        let count = 0;
        traverseInReverse(linkedList, (el) => {
            if(count == 0) {
                expect(el).toBe(7);
            }
            if(count == 1) {
                expect(el).toBe(3);
            }
            if(count == 2) {
                expect(el).toBe(null);
            }
            if(count == 3) {
                expect(el).toBe(192);
            }
            if(count == 4) {
                expect(el).toBe(33);
            }
            count++;
        })
    });
    it("does not modify the list", () => {
        let linkedList = new Node(null);
        insert(linkedList, 3);
        insert(linkedList, 7);
        prepend(linkedList, 192);
        prepend(linkedList, 33);
        traverse(linkedList, (el) => {});
        traverseInReverse(linkedList, (el) => {});
        checkListElements(linkedList, [33,192,null,3,7]);
    })
})
