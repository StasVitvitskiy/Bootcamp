import {getDateAgo, getLastDayOfMonth,formatDate} from "./date_tasks"
describe("getDateAgo", function() {

    it("1 день до 02.01.2015 -> день 1", function() {
        expect(getDateAgo(new Date(2015, 0, 2), 1)).toBe(1);
    });


    it("2 дня до 02.01.2015 -> день 31", function() {
        expect(getDateAgo(new Date(2015, 0, 2), 2)).toBe(31);
    });

    it("100 дней до 02.01.2015 -> день 24", function() {
        expect(getDateAgo(new Date(2015, 0, 2), 100)).toBe(24);
    });

    it("365 дней до 02.01.2015 -> день 2", function() {
        expect(getDateAgo(new Date(2015, 0, 2), 365)).toBe(2);
    });

    it("переданный объект date не модифицируется", function() {
        let date = new Date(2015, 0, 2);
        let dateCopy = new Date(date);
        getDateAgo(dateCopy, 100);
        expect(date.getTime()).toBe(dateCopy.getTime());
    });

});
describe("getLastDayOfMonth", function() {
    it("последнее число 01.01.2012 - 31", function() {
        expect(getLastDayOfMonth(2012, 0)).toBe(31);
    });

    it("последнее число 01.02.2012 - 29 (високосный год)", function() {
        expect(getLastDayOfMonth(2012, 1)).toBe(29);
    });

    it("последнее число 01.02.2013 - 28", function() {
        expect(getLastDayOfMonth(2013, 1)).toBe(28);
    });
});
describe("formatDate", function() {
    it("отображает 1 мс назад как \"прямо сейчас\"", function() {
        expect(formatDate(new Date(new Date - 1))).toBe('прямо сейчас');
    });

    it('"30 секунд назад"', function() {
        expect(formatDate(new Date(new Date - 30 * 1000))).toBe("30 сек. назад");
    });

    it('"5 минут назад"', function() {
        expect(formatDate(new Date(new Date - 5 * 60 * 1000))).toBe("5 мин. назад");
    });

    it("более поздние даты в виде DD.MM.YY HH:mm", function() {
        expect(formatDate(new Date(2014, 2, 1, 11, 22, 33))).toBe("01.03.14 11:22");
    });

});
