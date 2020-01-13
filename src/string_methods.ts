import {from} from "~/array_methods";
export const concat = (str, ...strings) => {
    let result = "";
    for(let i = 0; i < strings.length; i++) {
        result += strings[i];
    }
    return str + result;
};
export const endsWith = (string, searchString, length = string.length) => {
    const iterations = searchString.length;
    let normalizedLength = Math.min(string.length, length);

    for(let i = normalizedLength - 1, j = iterations, k = searchString.length - 1; j > 0; i--, j--,k-- ) {
        if(string[i] !== searchString[k]) {
            return false;
        }
    }
    return true;
};
export const includes = (string, searchString, position = 0) => {
    const from = Math.min(string.length, Math.max(position, 0));
    let matchingCount = 0;
    for(let i = from, j = 0; i < string.length; i++, j++) {
        if(string[i] === searchString[j]) {
            matchingCount++;
            if(matchingCount == searchString.length) {
                return true;
            }
        } else {
            matchingCount = 0;
            j = -1;
        }
    }
    return false;
};
export const indexOf = (string, searchValue, fromIndex = 0) => {
    const whatToFind = String(searchValue);
    const from = Math.min(string.length, Math.max(0, fromIndex));
    let matchingCount = 0;
    let foundIndex = -1;
    if(whatToFind == "") {
        return from;
    }
    for(let i = from, j = 0; i < string.length; i++, j++) {
        if(whatToFind[j] == string[i]) {
            matchingCount++;
            if(foundIndex == -1) {
                foundIndex = i;
            }
            if(matchingCount == whatToFind.length) {
                return foundIndex;
            }
        } else {
            matchingCount = 0;
            j = -1;
            foundIndex = -1;
        }
    }
    return -1;
};
export const lastIndexOf = (string, searchValue, fromIndex = +Infinity) => {
    const whatToFind = String(searchValue);
    const from = Math.min(string.length, Math.max(0, fromIndex));
    let matchingCount = 0;
    let foundIndex = -1;
    if(whatToFind == "") {
        return from;
    } else {
        for(let i = from, j = whatToFind.length -1; i >= 0; i--, j--) {
            if(string[i] == whatToFind[j]) {
                matchingCount++;
                if(foundIndex == -1) {
                    foundIndex = i;
                }
                if(matchingCount == searchValue.length) {
                    return i;
                }
            } else {
                matchingCount = 0;
                j = whatToFind.length;
                foundIndex = -1;
            }
        }
        return -1;
    }
};
export const padEnd = (string, targetLength, padString = " ") => {
    let newString = String(string);
    const resultLength = Math.max(string.length, targetLength);
    if(padString == "") {
        return newString;
    }
    for(let i = newString.length, j = 0; i < resultLength; i++, j++) {
        newString = newString + padString[j];
        if(j == padString.length -1) {
            j = -1;
        }
    }
    return newString;
}
