import {PriorityQueue} from "./priority_queue"
describe("tests for the PriorityQueue class", () => {
    it("inserts the element at the end of the line", () => {
        let p = new PriorityQueue;
        p.enqueue(1,1);
        p.enqueue(2,3);
        p.enqueue(3,60);
        p.enqueue(20,600);

        expect(p.dequeue()).toBe(20);
        expect(p.dequeue()).toBe(3);
        expect(p.dequeue()).toBe(2);
        expect(p.dequeue()).toBe(1);
    });
    it("inserts before the element with the same priority", () => {
        let p = new PriorityQueue;
        p.enqueue(1,1);
        p.enqueue(2,1);
        p.enqueue(20,20);
        p.enqueue(3,1);
        p.enqueue(0,0);
        p.enqueue(22,1);
        expect(p.dequeue()).toBe(20);
        expect(p.dequeue()).toBe(1);
        expect(p.dequeue()).toBe(2);
        expect(p.dequeue()).toBe(3);
        expect(p.dequeue()).toBe(22);
        expect(p.dequeue()).toBe(0);
    });
    it("works as queue when priority is not passed", () => {
        let p = new PriorityQueue;
        p.enqueue(1);
        p.enqueue(2);
        p.enqueue(20);
        p.enqueue(3);
        p.enqueue(0);
        p.enqueue(22);

        expect(p.dequeue()).toBe(1);
        expect(p.dequeue()).toBe(2);
        expect(p.dequeue()).toBe(20);
        expect(p.dequeue()).toBe(3);
        expect(p.dequeue()).toBe(0);
        expect(p.dequeue()).toBe(22);
    });
    it("returns true if empty", () => {
        let p = new PriorityQueue;
        expect(p.isEmpty()).toBe(true);
    })
    it("returns false if not empty", () => {
        let p = new PriorityQueue;
        p.enqueue(1);
        p.enqueue(2);
        p.enqueue(20);
        expect(p.isEmpty()).toBe(false);
    });
    it("returns the last element's value without deleting it", () => {
        let p = new PriorityQueue;
        p.enqueue(1);
        p.enqueue(2);
        p.enqueue(20);
        expect(p.peek()).toBe(1);
        expect(p.dequeue()).toBe(1);
        expect(p.dequeue()).toBe(2);
        expect(p.dequeue()).toBe(20);
    })
})
