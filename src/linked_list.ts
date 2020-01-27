// class syntax
class A {
    constructor() {}

    field = ""

    method() {}
}

export class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
    [Symbol.iterator] = () => {
        let container = this;
        return {
            next: () => {
                if(container == null) {
                    return {done: true, value: undefined}
                } else {
                    let previous = container;
                    container = container.next;
                    return {done: false, value: previous}
                }
            }
        }
    }
}
const insert = (list, value) => {

}
