import {Stack} from "./stack"
describe("tests for the Stack class" ,() => {
    it("returns true if the stack is empty", () => {
        let stack = new Stack;
        expect(stack.isEmpty()).toBe(true);
    });
    it("returns false if the stack is not empty", () => {
        let stack = new Stack;
        for(let i = 0; i < 10; i++) {
            stack.push(i);
        }
        expect(stack.isEmpty()).toBe(false);
    });
    it("returns the last element without deleting it", () => {
        let stack = new Stack;
        for(let i = 1; i <= 10; i++) {
            stack.push(i);
        }
        expect(stack.peek()).toBe(10);
        expect(stack.elements).toStrictEqual([1,2,3,4,5,6,7,8,9,10]);
    });
    it("adds element to the top of the stack", () => {
        let stack = new Stack;
        for(let i = 1; i <= 10; i++) {
            stack.push(i);
        }
        stack.push(11);
        expect(stack.elements).toStrictEqual([1,2,3,4,5,6,7,8,9,10,11])
    });
    it("deletes element from the top of the stack", () => {
        let stack = new Stack;
        for(let i = 1; i <= 10; i++) {
            stack.push(i);
        }
        expect(stack.pop()).toBe(10);
        expect(stack.elements).toStrictEqual([1,2,3,4,5,6,7,8,9]);
    })
})
