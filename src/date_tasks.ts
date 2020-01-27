/*
 1) создается объект даты
 2) setFullYear(year, month, day) // устанавливает полный год указанной даты по местному времени
 3) setMonth(month, day)// устанавливает месяц указанной даты по местному времени.
 4) setDate(day) // устанавливает день месяца указанной даты по местному времени.
 5) setHours(hours, minutes, seconds, milisecs)// устанавливает часы указанной даты по местному времени и возвращает количество миллисекунд, прошедших с 1 января 1970 00:00:00 по UTC до времени, представляемого обновлённым экземпляром Date.
 6) setMinutes(minutes, secs, milisecs) // устанавливает минуты указанной даты по местному времени.
 7) getSeconds(seconds, milisecs) // устанавливает секунды указанной даты по местному времени.
 8) setMilliseconds(milisecs) // устанавливает миллисекунды указанной даты по местному времени.
 9) setTime() // устанавливает время объекта Date в значение, представляемое количеством миллисекунд, прошедших с 1 января 1970 00:00:00 по UTC.

 как работать с датой:
 1) создается новый объект даты
 2) установить компонент даты (год, месяц, день и тд) даты
 3) все эти методы модифицируют объект на котором они вызываются
 */


/*
getDate() => число месяца (если 25 января => вернет 25)
setDate() => устанавливает дату (изменяет текущий объект Date).
0 - последний день предыдущего месяца
32 - первый день следуюшего месяца
-3 - третье число с конца предыдыщего месяца
01/25/2020 (-3)        ==========> 31 - 3 = 28 вернется 28 декабря 2019
Январь / с конца пред месяца            Декабрь

из самой функции getDateAgo вернется 28 с входными параметрами, указанными выше
 */
export const getDateAgo = (date, days) => {
    let copyDate = new Date(date);
    copyDate.setDate(copyDate.getDate() - days);
    return copyDate.getDate();
}

/*
1) методы объекта date модифицируют сам объект date
2) setDate() возвращает timestamp (число миллисекунд прошедшее с 1 января 1970 года)
3) поэтому этот метод нужно вызывать на объекте date, он его модифицирует
4) дальше нужно работать с объектом date,
не нужно возвращать/сохранять результат вызова метода setDate();
5) let date = new Date(можно сюда поместить входные параметры в формате
(year, month, day, hours, minutes,sec)))
*/
export const getLastDayOfMonth = (year, month) => {
    let date = new Date(year,month + 1);
    date.setDate(0);
    return date.getDate();
};
/*
 нужно получать текущее время
 отнимать от него начало текущего дня
 возвращать этот результат
 1) let date = new Date; текущее время
 2) let beginningOfTheDay = new Date;
 beginningOfTheDay.setHours(0,0,0,0);
 3) return (date - beginningOfTheDay) /1000;
 */
const getSecondsToday = () => {
    let date = new Date;
    let beginningOfTheDay = new Date;
    beginningOfTheDay.setHours(0,0,0,0);
    return (date - beginningOfTheDay)/ 1000;
}
const getSecondsTodayAlternate = () => {
    let date = new Date;
    return (date.getHours() * 3600) + (date.getMinutes() * 60) + (date.getSeconds()) + (date.getMilliseconds() / 1000);
}
/*
 нужно получить следующий день с обнуленными часами минутами секундами
 нужно получить текущий день
 вернуть результат вычитания следующего дня и текущего деленное на 1000
 */
const getSecondsToTomorrow = () => {
    let nextDay = new Date;
    nextDay.setDate(nextDay.getDate() + 1);
    nextDay.setHours(0,0,0,0);
    let currentDay = new Date;
    return (nextDay - currentDay)/1000;
}
const getSecondsToTomorrowAlternate = () => {
    let date = new Date;
    return 86400 - ((date.getHours() * 3600) + (date.getMinutes() * 60) + (date.getSeconds()) + (date.getMilliseconds()/1000));
}
export const formatDate = (date) => {
    let diff = (Date.now() - date)/1000;
    if(diff < 1) {
        return "прямо сейчас";
    }
    if(diff < 60) {
        return `${diff} сек. назад`;
    }
    if(diff < 3600) {
        return `${diff/60} мин. назад`;
    }
    let convertedDate = new Date(date);
    let days = convertedDate.getDate();
    if(days < 10) {
        days = "0" + String(days);
    }
    let month = convertedDate.getMonth() + 1;
    if(month < 10) {
        month = "0" + String(month);
    }
    let year = String(convertedDate.getFullYear());
    year = year.slice(2)
    let hours = convertedDate.getHours();
    let minutes = convertedDate.getMinutes();
    return `${days}.${month}.${year} ${hours}:${minutes}`;
}
