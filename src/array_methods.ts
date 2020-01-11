function defaultMapFunction(element, index, array) {
    return element;
}
export function from(arrLike, mapFunction = defaultMapFunction) // default присвоение параметра
// (т.е если я не передам потом никакого mapFunction, подставится defaultMapFunction)
{
    const newArr = [];
    if(isArrLike(arrLike)) {
        for(let i = 0; i < arrLike.length; i++) {
            newArr[i] = mapFunction(arrLike[i], i, arrLike);
        }
    } else if(isIterable(arrLike)) {
        let i = 0;
        for(const value of arrLike) {
            newArr[i] = mapFunction(value, i, arrLike);
            i++;
        }
    }
    return newArr;
}

export function isArrLike(arg) {
    return arg? typeof arg.length != "undefined": false;
}

export function isIterable(arg) {
    return arg? typeof arg[Symbol.iterator] == "function": false;
}

export function of(...args) {
    const newArr = [];
    for(let i = 0; i < args.length; i++) {
        newArr[i] = args[i];
    }
    return newArr;
}
export function concat(array,...args) {
    const newArr = [];
    for(let k = 0; k < array.length; k++) {
        newArr.push(array[k]);
    }
    for(let i = 0; i < args.length; i++) {
        if(args[i] instanceof Array) {
            for(let j = 0; j < args[i].length; j++) {
                newArr.push((args[i])[j]);
            }
        } else {
            newArr.push(args[i]);
        }
    }
    return newArr;
}
export function copyWithin(array, target, start = undefined, end = undefined) {
    let from = start || 0;
    let to = end || array.length;
    if(from < 0) {
        from = array.length + from;
    }
    if(to < 0) {
        to = array.length + to;
    }
    for(let i = from; i < to; i++, target++) {
        if(target < array.length) {
            array[target] = array[i];
        } else {
            break;
        }
    }
    return array;
}
export function every(array, callback) {
    for(let i = 0; i < array.length; i++) {
        if(callback(array[i],i,array) == false) {
            return false
        }
    }
    return true;
}
export function fill(array, value, start = undefined, end = undefined) {
    let from = start || 0;
    let to = end || array.length;
    for(let i = from; i < to; i++) {
        array[i] = value;
    }
    return array;
}
export function filter(array, callback) {
    const newArr = [];
    for(let i = 0; i < array.length; i++) {
        if(callback(array[i], i, array)) {
            newArr.push(array[i]);
        }
    }
    return newArr;
}
export function find(array, callback) {
    for(let i = 0; i < array.length; i++) {
        if(callback(array[i],i,array)) {
            return array[i];
        }
    }
}
export function findIndex(array, callback) {
    for(let i = 0; i < array.length; i++) {
        if(callback(array[i], i, array)) {
            return i;
        }
    }
    return -1;
}
export function flat(array, depth = undefined) {
    if(depth == 0) {
        return array;
    }
    let newArr = [];
    const level = depth || 1;
    for(let i = 0; i < array.length; i++) {
        if(array[i] instanceof Array) {
            newArr = newArr.concat(flat(array[i], level - 1));
        } else {
            newArr.push(array[i]);
        }
    }
    return newArr;
}
export function flatMap(array, callback) {
    const arrayMapped = [];
    const arrayFlattened = [];
    for(let k = 0; k < array.length; k++) {
        arrayMapped.push(callback(array[k], k, array));
    }
    for(let i = 0; i < arrayMapped.length; i++) {
        if(arrayMapped[i] instanceof Array) {
            for(let j = 0; j < arrayMapped[i].length; j++) {
                arrayFlattened.push(arrayMapped[i][j]);
            }
        } else {
            arrayFlattened.push(arrayMapped[i]);
        }
    }
    return arrayFlattened;
}
export function forEach(array, callback) {
    for(let i = 0; i < array.length; i++) {
        callback(array[i], i, array);
    }
}
export function includes(array, whatToFind, index = 0) {
    for(let i = index; i < array.length; i++) {
        if(Object.is(array[i], whatToFind)) {
            return true
        }
    }
    return false;
}
export function indexOf(array, whatToFind, startFrom = 0) {
    const index = startFrom < 0 ? array.length + startFrom : startFrom;
    for(let i = index; i < array.length; i++) {
        if(Object.is(array[i], whatToFind)) {
            return i;
        }
    }
    return -1;
}
export function join(array, separator: string | number = ",") {
    let result = joinConvertToString(array[0]);
    for(let i = 1; i < array.length; i++) {
        result += separator + joinConvertToString(array[i]);
    }
    return result;
}
const joinConvertToString = (el) => {
    if(el == undefined || el == null || (el instanceof Array && el.length == 0)) {
        return "";
    } else {
        return String(el);
    }
};
export const lastIndexOf = (array, whatToFind, index = array.length-1) => {
    const start = index < 0 ? index + array.length : index;
    for(let i = start; i >= 0; i--) {
        if(Object.is(array[i], whatToFind)) {
            return i;
        }
    }
    return -1;
 };
export const map = (array, callback) => {
    const newArr = [];
    for(let i = 0; i < array.length; i++) {
        newArr.push(callback(array[i], i, array));
    }
    return newArr;
};
export const pop = (array) => {
    if(array.length != 0 && array.length != undefined) {
        const lastEl = array[array.length - 1];
        array.length = array.length - 1;
        return lastEl;
    } else {
        return undefined;
    }
};
export const push = (array, ...elementN) => {
    for(let i = 0; i < elementN.length; i ++) {
        array[array.length] = elementN[i]
    }
    return array.length;
}
export function reduce(array, callback, initialValue = undefined) {
    if(array.length == 0) {
        if(initialValue == undefined) {
            throw new TypeError("Initial Value is undefined");
        } else {
            return initialValue;
        }
    } else {
        let acc = initialValue != undefined ? initialValue : array[0];
        const from = initialValue != undefined? 0 : 1;
        for(let i = from; i < array.length; i++) {
            acc = callback(acc, array[i], i, array);
        }
        return acc;
    }
}
export const reduceRight = (array,callback, initialValue = undefined) => {
    if(array.length == 0) {
        if(initialValue == undefined) {
            throw new TypeError("Initial Value is undefined");
        } else {
            return initialValue;
        }
    } else {
        let acc = initialValue != undefined ? initialValue : array[array.length - 1];
        const from = initialValue != undefined ? array.length - 1 : array.length - 2;
        for(let i = from; i >= 0; i --) {
            acc = callback(acc, array[i], i, array);
        }
        return acc;
    }
};
export const reverse = (array) => {
    const newArr = [];
    if(array.length == 0) {
        return [];
    }
    for (let i = array.length - 1; i >= 0; i--) {
        newArr.push(array[i]);
    }
    return newArr;
};
export const shift = (array) => {
    if(array.length == undefined || array.length == 0) {
        return undefined
    } else {
        const result = array[0];
        for(let i = 1; i < array.length; i++) {
            array[i-1] = array[i];
        }
        array.length = array.length - 1;
        if(array instanceof Array == false) {
            delete array[array.length]
        }
        return result;
    }
};
export const slice = (array, begin = 0, end = array.length) => {
    const newArr = [];
    let from = begin < 0 ? array.length + begin : begin;
    let to = end < 0 ? array.length + end : Math.min(end, array.length);
    for(let i = from; i < to; i++) {
        newArr.push(array[i]);
    }
    return newArr;
};
export const some = (array, callback) => {
    for(let i = 0; i < array.length; i++) {
        if(callback(array[i], i, array)) {
            return true;
        }
    }
    return false;
};
export const splice = (array,start, deleteCount = array.length, ...items) => {
    const deleted = [];
    let from = start < 0 ? array.length + start : start;
    let to = Math.min(from + deleteCount, array.length);
    for(let i = from; i < to; i++) {
        if(items.length == 0) {
            deleted.push(array[from]);
            shiftLeft(array, from);
        } else {
            deleted.push(array[i]);
            array[i] = items.shift();
        }
    }
    for(let j = to, k = 0; k < items.length; j++, k++) {
        shiftRight(array, j);
        array[j] = items[k];
    }
    return deleted;
};
const shiftLeft = (arr, begin) => {
    const from = begin + 1;
    for(let i = from; i < arr.length; i++) {
        arr[i -1] = arr[i];
    }
    arr.length = arr.length - 1;
    if(arr instanceof Array == false) {
        delete arr[arr.length];
    }
};
const shiftRight = (arr, begin) => {
    const from = Math.min(arr.length, begin);
    for(let i = arr.length; i > from; i-- ) {
        arr[i] = arr[i - 1];
    }
    if(arr instanceof Array == false) {
        arr.length ++;
    }
}
export const toString = (array) => {
    let string = "";
    for(let i = 0; i < array.length; i++) {
        if(i == 0) {
            string += array[i];
        } else {
            string = string + "," + array[i];
        }
    }
    return string;
};
export const unshift = (array, ...args) => {
    if(array.length == undefined) {
        return 0;
    } else {
        for(let i = args.length - 1; i >= 0; i--) {
            shiftRight(array, 0);
            array[0] = args[i];
        }
        return array.length;
    }
}
