export const getMaxSubSum = (arr) => {
    let result = 0;
    let temp = 0;
    for(let i = 0; i < arr.length; i++) {
        temp = Math.max(0, temp + arr[i]);
        result = Math.max(temp, result);
    }
    return result;
};

