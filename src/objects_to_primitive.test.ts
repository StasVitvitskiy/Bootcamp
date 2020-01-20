import {user,oldUser, phone, phoneNumber, A, B} from "./objects_to_primitive"
describe("tests for the user object", () => {
    it("logs the conversions results of the user object", () => {
        expect(String(user)).toStrictEqual("name: John");
        expect(+user).toBe(1000);
        expect(+user + 500).toBe(1500);
    })
});
describe("tests for the user object", () => {
    it("logs the conversion results of the user object", () => {
        expect(String(oldUser)).toStrictEqual("name: Sam");
        expect(+oldUser).toBe(2000);
        expect(+oldUser + 500).toBe(2500);
    })
});
describe("tests for the phone object", () => {
    it("logs the conversion results of the phone object", () => {
        expect(String(phone)).toBe("2018 Iphone 11 256gb");
    })
});
describe("tests for the phoneNumber object", () => {
    it("logs the conversion results of the phoneNumber object", () => {
        expect(String(phoneNumber)).toBe("+14256785678 carrier: At&t United States");
        expect(+phoneNumber).toBe(14256785678);
    })
});
describe("test for obj", () => {
    // @ts-ignore
    let a = new A;
    // @ts-ignore
    let b = new B;
    it("checks if one obj is equal to another" ,() => {
        expect(a == b).toBe(true);
    })
})
