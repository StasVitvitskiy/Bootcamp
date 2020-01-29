export class Stack {

    elements = [];

    isEmpty() {
        return this.elements.length == 0;
    }
    peek() {
        return this.elements[this.elements.length-1]
    }
    push(el) {
        this.elements.push(el);
    }
    pop(el) {
        return this.elements.pop(el)
    }
}
