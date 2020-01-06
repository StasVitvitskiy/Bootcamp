export function isObjEmptyLooping(obj) {
    for(let i in obj) {
        return false;
    }
    return true;
}
export function isObjEmpty(obj) {
    return Object.keys(obj).length == 0;
}

