import {turnRight} from "./turn_right"

describe("tests for the turnRight function", function(){
    it("returns error when there's traffic in the middle and when the light is green", () => {
        expect(turnRight(true, true, true, true)).toBe("Traffic in the middle");
    });
    it("returns error when there's opposite traffic", () => {
        expect(turnRight(false, true, true, true)).toBe("Opposite traffic");
    });
    it("allows you to proceed", () => {
        expect(turnRight(true, true, true, false)).toBe("Proceed");
    });
    it("return error when there's traffic on the left", () => {
        expect(turnRight(false, false, true, true)).toBe("Traffic on left");
    });
    it("allows you to proceed when the light is not green", () => {
        expect(turnRight(false, false, false, false)).toBe("Proceed");
    });
    it("return error when there's traffic in the middle and the light is not green", () => {
        expect(turnRight(false,false,false,true)).toBe("Traffic in the middle");
    });
})
