let string = "Завтрак в 09:00 в комнате 123:456.";
let regExp = (/\b\d\d:\d\d/g);
//console.log(string.match(/\b\d\d\b/g).join(":"));
//console.log(string.match(regExp).join(""));


let str = "Завтрак в 09:00. Ужин в 21-30";
let regularExp = (/\b\d\d[-:]\d\d/g);
export const getTimeFromStr = (string) => {
    return string.match(regularExp).join();
}
let regEx = (/\.{1,}/g);
let dots = "Привет!... Как дела?.....";
//console.log(dots.match(regEx).join(""));

//console.log(colors.match(findColors).join());
export const findCssColors = (str) => {
    return str.match((/\#\d{6}/g)).join();
}
export const findHtmlComments = (str) => {
    return str.match(/<!--.*?-->/gs).join();
};
export const findHtmlTags = (str) => {
    return str.match(/<[^<>]+/g).join();
}
export const validateUsr = (username) =>  {
    return /^[a-z0-9_]{4,16}$/.test(username);
}
export const isLetter = (str) => {
    let regExp = /^[a-zA-Z]{1}$/;
    return regExp.test(str);
};
export const isVowel = (str)=> {
    let regExp = /^[aeiou]{1}$/i;
    return regExp.test(str);
}
