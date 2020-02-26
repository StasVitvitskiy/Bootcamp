


/*
декоратор spy(func), который возвращает обёртку, которая сохраняет все вызовы функции
в своём свойстве calls.Каждый вызов сохраняется как массив аргументов.
*/
function spy(func) {
    function decorator(...arguments) {
        let result = func.call(this, ...arguments);
        decorator.calls.push(arguments);
        return result;
    }
    decorator.calls = [];
    return decorator;
}
/*
decorator который задерживает каждый вызов f на ms миллисекунд.
*/
function delay(func, delay) {
    function decorator(...arguments) {
        let timerId = setTimeout(() => {
            func.call(this,...arguments)
        }, delay)
    }
    return decorator;
}
/*
Результатом декоратора debounce(f, ms) должна быть обёртка,
которая передаёт вызов f не более одного раза в ms миллисекунд.
Другими словами, когда мы вызываем debounce, это гарантирует,
что все остальные вызовы будут игнорироваться в течение ms.
*/
function debounce(func, delay) {
    let time = undefined;
    return function decorator(...arguments) {
        if(time == undefined || (Date.now() - time) > delay) {
            time = Date.now();
            return func.call(this, ... arguments)
        }
    }
}
/*
«тормозящий» декоратор throttle(f, ms), который возвращает обёртку,
передавая вызов в f не более одного раза в ms миллисекунд. Те вызовы,
которые попадают в период «торможения», игнорируются. Отличие от debounce
 – если проигнорированный вызов является последним во время «задержки»,
то он выполняется в конце.
*/
function throttle(func, delay) {
    let time = undefined;
    let timerId = undefined;
    return function decorator(...arguments) {
        if(time == undefined || (Date.now() - time) >= delay) {
            time = Date.now();
            return func.call(this, ... arguments)
        } else {
            clearTimeout(timerId);
            timerId = setTimeout(() => {
                time = Date.now();
                func.call(this, ...arguments);
            }, delay - (Date.now() - time));
        }
    }
}
