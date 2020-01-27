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

let room = {
    number: 23
};

let meetup = {
    title: "Совещание",
    occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
    place: room
};

// цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;
meetup.meetup = meetup;

/*
в первый запуск replacer key = "", value = объект meetup
 (сделано это для того чтобы можно было заменить сразу весь объект)
replacer вызывается рекурсивно для каждой пары ключ значение
удаление какого то свойства происходит за счет "игнорирования" return undefined;
* */
JSON.stringify(meetup, function replacer(key, value) {
    if(key != "") {
        if(value == meetup) {
            return undefined;
        }
    }
    return value;
});


