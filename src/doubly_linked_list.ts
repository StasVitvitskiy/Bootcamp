export class Node {
    constructor(value, next = null, prev = null) {
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
    [Symbol.iterator]() {
        let container = {next: this};
        return {
            next: () => {
                if(container.next == null) {
                    return {done: true, value: undefined}
                } else {
                    container = container.next;
                    return {done:false, value: container}
                }
            }
        }
    }
}
export const getTail = (list) => {
    for(let node of list) {
        if(node.next == null) {
            return node;
        }
    }
}
export const insert = (list, value) => {
    const node = new Node(value);
    const tail = getTail(list);
    node.prev = tail;
    tail.next = node;
    return list;
};
export const prepend = (list, value) => {
    const node = new Node(list.value, list.next, list);
    list.value = value;
    list.next = node;
    return list;
};
export const remove = (list, value) => {
    if(list.value == value) {
        if(list.next == null) {
            return null;
        }
    }
    for(let node of list) {
        if(node.value == value) {
            if(node.next != null) {
                node.value = node.next.value;
                node.next = node.next.next;
                return list;
            } else {
                node.prev.next = null;
                return list;
            }
        }
    }
    return list;
}
export const traverse = (list, callback) => {
    for(let node of list) {
        callback(node.value);
    }
};
export const traverseInReverse = (list, callback) => {
    let box = getTail(list);
    while(box != null) {
        callback(box.value);
        box = box.prev;
    }
};

