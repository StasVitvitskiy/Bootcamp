export function map(array, callback) {
    const newArr = [];
    for(let i = 0; i < array.length; i++) {
        newArr[i] = callback(array[i], i, array);
    }
    return newArr;
}
