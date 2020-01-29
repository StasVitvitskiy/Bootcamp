export class Queue {
    elements = [];

    enqueue(el) {
        this.elements.unshift(el);
    }
    isEmpty() {
        return this.elements.length == 0;
    }
    pick() {
        return this.elements[this.elements.length-1];
    }
    dequeue(el) {
        return this.elements.pop(el);
    }
}
