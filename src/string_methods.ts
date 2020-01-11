export const concat = (str, ...strings) => {
    let result = "";
    for(let i = 0; i < strings.length; i++) {
        result += strings[i];
    }
    return str + result;
}
