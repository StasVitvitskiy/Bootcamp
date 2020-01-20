import {camelize} from "./string_tasks"
describe("camelize", function() {

    it("leaves an empty line as is", function() {
        expect(camelize("")).toBe("");
    });

    it("turns background-color into backgroundColor", function() {
        expect(camelize("background-color")).toBe("backgroundColor");
    });

    it("turns list-style-image into listStyleImage", function() {
        expect(camelize("list-style-image")).toBe("listStyleImage");
    });

    it("turns -webkit-transition into WebkitTransition", function() {
        expect(camelize("-webkit-transition")).toBe("WebkitTransition");
    });

});
