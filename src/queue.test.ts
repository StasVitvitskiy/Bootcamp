import {Queue} from "./queue"
describe("tests for the Queue class" , () => {
    it("enqueues element", () => {
        let queue = new Queue();
        queue.enqueue(1);
        expect(queue.elements).toStrictEqual([1]);
        for(let i = 2; i <= 10; i++) {
            queue.enqueue(i);
        }
        expect(queue.elements).toStrictEqual([10,9,8,7,6,5,4,3,2,1]);
    });
    it("returns true when the queue is empty", () => {
        let queue = new Queue();
        expect(queue.isEmpty()).toBe(true);
    });
    it("returns false when the queue is not empty", () => {
        let queue = new Queue();
        queue.enqueue(3);
        expect(queue.isEmpty()).toBe(false);
    });
    it("returns the last element without deleting" ,() => {
        let queue = new Queue();
        queue.enqueue(1);
        expect(queue.elements).toStrictEqual([1]);
        for(let i = 2; i <= 10; i++) {
            queue.enqueue(i);
        }
        expect(queue.pick()).toBe(1);
        expect(queue.elements).toStrictEqual([10,9,8,7,6,5,4,3,2,1]);
    });
    it("deletes and returns the last element", () => {
        let queue = new Queue();
        queue.enqueue(1);
        expect(queue.elements).toStrictEqual([1]);
        for(let i = 2; i <= 10; i++) {
            queue.enqueue(i);
        }
        expect(queue.dequeue(1)).toBe(1);
        expect(queue.elements).toStrictEqual([10,9,8,7,6,5,4,3,2]);
    })
})
