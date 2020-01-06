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
export function concat(...args) {
    const newArr = [];
    for(let i = 0; i < args.length; i++) {

    }
}
