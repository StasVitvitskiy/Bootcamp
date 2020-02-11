// class syntax
/*class A {
    constructor() {}

    field = ""

    method() {}
}
*/
export class Node {
    constructor(value, next = null) {
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
export const tailOfTheList = (list) => {
    for(let node of list) {
        if(node.next == null) {
            return node;
        }
    }
}
/*
1) create a newNode and set it equal to the new Node(value, null)
2) create a new variable tail and initialize it as the result of the tailOfTheList function
 (returns the tail of the list)
3) place that newNode at the end (tail.next = newNode);
4) return the list;
*/
export const insert = (list, value) => {
    const newNode = new Node(value, null);
    const tail = tailOfTheList(list);
    tail.next = newNode;
    return list;
}
/*
1) сделать клон/копия текущего head(const newNode = new Node(head.value, head.next)) - это клон всего списка
2) поместить в head (начало списка) новое value; head.value = value;
3) в поле головы next поместить весь оставшийся список (head.next = newNode) и вернуть его
*/
export const prepend = (head,value) => {
    const newNode = new Node(head.value, head.next);
    head.value = value;
    head.next = newNode;
    return head;
};
export const contains = (list, value) => {
    for(let node of list) {
        if(node.value == value) {
            return true;
        }
    }
    return false;
}
export const remove = (list, value) => {
    if(list.value == value) {
        return null;
    }
    for(let node of list) {
        if(node.next == null) {
            return list;
        } else {
            if(node.next.value == value) {
                node.next = node.next.next;
                return list;
            }
        }
    }
}
export const traverse = (list, callback) => {
    for(let node of list) {
        callback(node.value);
    }
};
export const traverseInReverse = (list, callback) => {
    const reversed = new Node(list.value, null);
    for(let node of list.next) {
        prepend(reversed, node.value);
    }
    for(let node of reversed) {
        callback(node.value);
    }
}

