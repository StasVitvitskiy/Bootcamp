import {turnLeft} from "./turn_left"
describe("tests for turnLeft function", function() {
    it("allows you to proceed", () => {
        expect(turnLeft(true,true,true,true,false)).toBe("Proceed");
    });
    it("allows you to proceed when the left turn arrows are neither green nor yellow but the light is green", () => {
        expect(turnLeft(false,true,false,false,false)).toBe("Proceed");
    })
    it("returns error when there's traffic in the middle", () => {
        expect(turnLeft(false,true,false,false,true)).toBe("Traffic in the middle");
    });
    it("returns error when there's opposite traffic", () => {
        expect(turnLeft(false,true,false,true,false)).toBe("Opposite traffic");
    });
    it("returns error when there's a red light", () => {
        expect(turnLeft(false,false,false,true,true)).toBe("Red light");
    });
    it("returns error when there's traffic in the middle and there's a green or yellow arrow", () => {
        expect(turnLeft(true,false,true,false,true)).toBe("Traffic in the middle");
    });
})
