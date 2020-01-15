export const assign = (targetObj, ...sourceObjects) => {
    for(let i = 0; i < sourceObjects.length; i++) {
        for(let j in sourceObjects[i]) {
            targetObj[j] = sourceObjects[i][j];
        }
    }
    return targetObj;
};
