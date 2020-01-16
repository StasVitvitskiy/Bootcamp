export const assign = (targetObj, ...sourceObjects) => {
    for(let i = 0; i < sourceObjects.length; i++) {
        for(let j in sourceObjects[i]) {
            targetObj[j] = sourceObjects[i][j];
        }
    }
    return targetObj;
};
export const entries = (object) => {
    let newArr = [];
    for(let i in object) {
        newArr.push([i, object[i]]);
    }
    return newArr;
}
export const fromEntries = (iterable) => {
    let newObj = {};
    if(isIterable(iterable) == true) {
        for(let value of iterable) {
            newObj[value[0]] = value[1];
        }

    } else {
        throw new TypeError("Object has to be iterable");
    }
    return newObj;
}
const isIterable = (obj) => {
    if(obj == null) {
        return false;
    }
    return typeof obj[Symbol.iterator] === "function";
};
export const keys = (object) => {
    let newArr  = [];
    for(let key in object) {
        newArr.push(String(key));
    }
    return newArr;
}
export const values = (object) => {
    let newArr = [];
    for(let key in object) {
        newArr.push(object[key]);
    }
    return newArr;
}

