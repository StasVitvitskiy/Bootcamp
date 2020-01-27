import {Node} from "./linked_list"
describe("tests for the Node class", () => {
    it("iterates through the list", () => {
        let node2 = new Node(7, null);
        let node1 = new Node(6, node2);
        let linkedList = new Node(5, node1);
        let count = 0;
        for(let node of linkedList) {
            if(count == 0) {
                expect(node.value).toBe(linkedList.value);
            }
            if(count == 1) {
                expect(node.value).toBe(node1.value);
            }
            if(count == 2) {
                expect(node.value).toBe(node2.value);
            }
            count++;
        }
        expect(count).toBe(3);
    })
})
