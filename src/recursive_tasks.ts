export const sumTo = (n) => {
    let sum = n;
    for(let i = n-1; i >= 0; i--) {
        sum += i;
    }
    return sum;
}
//console.log(sumTo(4));
export const recurSum = (n) => {
    let sum = n;
    if(n == 1) {
        return 1;
    }
    return sum += recurSum(n-1);
}
//console.log(recurSum(4));
export const formulaSum = (n) => {
    return (n*(n+1))/2;
}
//console.log(formulaSum(4));
export const factorialRecur = (n) => {
    if(n ==1) {
        return 1;
    }
    return n * factorialRecur(n-1);
}
export const factorialLoop = (n) => {
    let arr = [1,1];
    for(let i = 2; i <= n; i++) {
        arr.push(i* arr[i - 1]);
    }
    return arr[arr.length -1];
}
/* let time = performance.now();
 console.log(factorialRecur(11));
 console.log("recursive solution:", performance.now() - time);
 let time2 = performance.now()
 console.log(factorialLoop(11));
 console.log("Looping Factorial: ", performance.now() - time2); */

export const fibonachi = (n) => {
    if(n == 1) {
        return 1;
    }
    if(n == 0) {
        return 0;
    }
    return fibonachi(n-1) + fibonachi(n-2);
}
export const fibonachiLoop = (n) => {
    let arr = [0,1];
    for(let i = 2; i <= n; i++) {
        arr.push((arr[i-1]) + (arr[i-2]))
    }
    return arr[arr.length -1];
}
// console.log(fibonachiLoop(7));
// console.log(fibonachi(7));
let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};
export const traverseList = (list, callback) => {
    while(list != null) {
        callback(list.value);
        list = list.next;
    }
}
export const traverseListInReverseRecur = (list, callback) => {
    if(list.next) {
        traverseListInReverseRecur(list.next,callback);
    }
    callback(list.value);
}

function sum(num) {
    function func(num1) {
        func.result = func.result + num1;
        return func;
    }
    func.result = num;
    func.valueOf = function() {
        return func.result;
    }
    return func;
}
//console.log(sum(1)(2));
/* console.log(sum(1)(2)(3)(2)(4)(3)(5)(8)(9)) */
//console.log(sum(1)(2)(3)(2)(4)(3)(5)(8)(9) == 37);

/*function printNumbers(from, to) {
    let i = from;
    let timerId = setInterval(()=> {
        console.log(i++);
        if(i == to + 1) {
            clearInterval(timerId);
        }
    }, 1000);
}
printNumbers(1, 10);

function recursivePrint(from, to) {
    let i = from;
    setTimeout(function run() {
        console.log(i++);
        if(i <= to) {
            setTimeout(run, 1000);
        }
    },1000)
}
recursivePrint(1,10);
let i = 1;
setTimeout(function run() {
    console.log(i++);
    if(i <= 10) {
        setTimeout(run, 100);
    }
}, 100);
/* console.log(traverseList(list, (element) => {
 console.log(element);
 })); */
