import {crossStreet} from "./cross_street"

describe("tests for the crossStreet function", function() {
    it("returns error when there's traffic on the left", () => {
        expect(crossStreet(true, true)).toBe("traffic on the left");
    });
    it("returns error when there's traffic on the right", () => {
        expect(crossStreet(false, true)).toBe("traffic on the right");
    });
    it("allows you to cross", () => {
        expect(crossStreet(false, false)).toBe("cross");
    });
})
