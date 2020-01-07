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
