export function isArraySorted(array, ascending) {
    for(let i = 0; i < array.length; i++) {
        if(array[i] != array[i+1]) {
            if(correctOrder(array[i],array[i+1],ascending) == false && array[i+1] != undefined) {
                return false;
            }
        }
    }
    return true;
}
export function correctOrder(left,right,ascending) {
    if(ascending == true) {
        return left < right;
    } else {
        return left > right;
    }
}
