export class PriorityQueue {
    private elements = [];
    isEmpty() {
        return this.elements.length == 0;
    }
    peek() {
        return this.elements[this.elements.length-1][0];
    }
    enqueue(element, priority = 0) {
        // insert in the "right: place depending on the priority"
        // splice() a = [1,2,3]; a.splice(1,0,4) a//[1,4,2,3];
        if(this.elements.length == 0 || priority > this.elements[this.elements.length - 1][1]) {
            this.elements.push([element, priority]);
            return;
        }
        for(let i = 0; i < this.elements.length; i++) {
            if(priority <= this.elements[i][1]) {
                this.elements.splice(i, 0, [element,priority]);
                return;
            }
         }


    }
    dequeue() { // FIFO + priority
        // if all of the elements have the same priority => first in first out
        // if one of the elements has the highest priority => it gets deleted // pop()
        return this.elements.pop()[0];
    }
}
