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
