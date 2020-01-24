export const getMaxSubSum = (arr) => {
    let result = 0;
    let temp = 0;
    for(let i = 0; i < arr.length; i++) {
        temp = Math.max(0, temp + arr[i]);
        result = Math.max(temp, result);
    }
    return result;
};
export const filterRangeInPlace = (arr, start, end) => {
    for(let i = 0; i < arr.length;) {
        if(arr[i] >= start && arr[i] <= end) {
            i++
        } else {
            arr.splice(i, 1);
        }
    }
}


export function Calculator() {
    /* for every operator there must be a function call
     *
     * 1) "1 + 2" -> ["1", "+", "2"]; convert the string into an array
     * (to gain access to each of the operands and operators)
     * 2) let operator = arr[1]; (["1", "+", "2"]) // 1st element
     * 3) this[operator](+arr[0], +arr[2]);
     *
     * returns the result of the math operation
     * */
    this.calculate = function(str) {
        let arr = str.split(" ");
        let operator = arr[1];
        return this[operator](+arr[0], +arr[2]);
    }

    /*
    * every operator ("*") is a key for the function that implements logic
    * (multiplication, division etc);
    *
    * create a field this[operator] = func;
    *
    * does not return anything!!!
    * */
    this.addMethod = function(operator, func) {
        this[operator] = func;
    }
    this.addMethod("+", (a,b) => {
        return a + b;
    });
    this.addMethod("-", (a,b) => {
        return a - b;
    });
}

export const shuffle = (array) => {
    if(array.length == 1) {
        return array;
    }
    if(array.length == 2) {
       return array.reverse();
    }
    let newArr = array.slice();
    let copy = array.slice();
    for(let i = 0; i < array.length;) {
        let randomIndex = getRandomInt(0, copy.length);
        if(copy[randomIndex] != newArr[i]) {
            newArr[i] = copy[randomIndex];
            copy.splice(randomIndex, 1);
            i++;
        } else if(copy.length == 1) {
            return shuffle(array)
        }
    }
    return newArr;
}
const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
export const unique = (arr) => {
    let newObj = {};
    for(let i = 0; i < arr.length; i++) {
        newObj[arr[i]] = i;
    }
    return Object.keys(newObj);
}

export const range = (from, to) =>  {
    let iterable = {
        from: from,
        to: to,
        [Symbol.iterator]: function() {
            this.current =  this.from;
            this.last = this.to;
            return this;
        },
        next() {
            if(this.current <= this.last) {
                return {done:false, value: this.current++}
            } else {
                return {done: true, value: undefined}
            }
        }
    };
    return iterable;
}
export function createIterable(...elements) {
    let iterable = {
        [Symbol.iterator]: function() {
            let count = 0;
            return {
                next: () => {
                    if(count < this.length) {
                        return {done:false, value: this[count++]}
                    } else {
                        return {done: true, value: undefined}
                    }

                }
            }
        },
        length:0
    };
    for(let i = 0; i < elements.length; i++) {
        iterable[i] = elements[i];
        iterable.length++;
    }
    return iterable;
}
export const makeIterable = (obj) => {
    obj[Symbol.iterator] = function() {
        let index = 0;
        let arrayOfValues = Object.values(this);
        return {
            next: () => {
                if(index < arrayOfValues.length) {
                    return {done:false, value: arrayOfValues[index++]};
                } else {
                    return {done:true, value: undefined};
                }
            }
        }
    }
    return obj;
};

export const iterableFrom = (iterable) => {
    let iterator = iterable[Symbol.iterator]();
    let result = iterator.next();
    let newArr = [];
    if(result.done == false) {
        newArr.push(result.value);
    }
    while(result.done == false) {
       result = iterator.next();
       if(result.done == false) {
           newArr.push(result.value);
       }
    }
    return newArr;
};
















/*
1) get an iterator from the iterable object
2) get all of the elements from the iterator,
call mapFunc for each one of them and then,
 push them in the new array
3) return newArr;
iterable = [1,2,3,4,5]
mapFunc = (el) => el**2;
// result -> [1,4,9,16,25];
 */
export const iterablFromWithMap = (iterable, mapFunc) => {
    let iterator = iterable[Symbol.iterator](); // iterator{ next(): {done: Boolean, value: any}}
    let nextResult = iterator.next(); // next == {done: false, value: 1}
    let newArr = [];
    while(nextResult.done == false) {
        newArr.push(mapFunc(nextResult.value));
        nextResult = iterator.next();
    }
    return newArr
}
export const aclean = (arr) => {
    let map = new Map;
    for(let i = 0; i < arr.length; i++) {
        let sum = 0;
        let word = arr[i].toLowerCase();
        for(let j = 0; j < word.length; j++) {
            sum += word.charCodeAt(j);
        }
        map.set(sum, arr[i]);
    }
    return Array.from(map.values());
}
