export const leavesAreEqual = (obj) => {
    let values =  Object.values(obj);
    let newMap = new Map;
    while(values.length > 0) {
        let element = values.shift();
        if(element instanceof Object) {
            let vals = Object.values(element);
            values = values.concat(vals);
        } else {
            newMap.set(element, "value");
        }
    }
    return newMap.size == 1;
}
