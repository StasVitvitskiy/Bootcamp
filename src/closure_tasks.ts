export const rangeIterator = (range) => {
    let num = 0;
    return function next() {
        return num < range? ++num: undefined;
    }
};
