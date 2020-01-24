import {leavesAreEqual} from "./object_tasks"
describe("tests for the leavesAreEqual function", () => {
    it("returns true if the values in the object are equal", () => {
        let singleNested = {
            "num": 1,
            "one": 1,
            "start": 1,
            1:1
        }
        let nested = {
            "num": {
                1:1,
                "one":1,
                "number":1
            },
            1: 1,
            "start": {
                "one":1,
                "start":1,
                "num": {
                    1:1,
                    "one":1,
                    "number": {
                        1:1,
                        "begin":1
                    }
                }
            }
        };
        let obj = {
            a1: null,
            a2: null,
            a3: null,
            a4: null,
            a5: null,
        }
        expect(leavesAreEqual(singleNested)).toBe(true);
        expect(leavesAreEqual(nested)).toBe(true);
        expect(leavesAreEqual(obj)).toBe(true);
    });
    it("returns false",() => {
        let singleNested = {
            "num": 1,
            "one": 1,
            "start": 2,
            1:3
        }
        let nested = {
            "num": {
                1:1,
                "one":1,
                "number":1
            },
            1: 1,
            "start": {
                "one":1,
                "start":1,
                "num": {
                    1:1,
                    "one":1,
                    "number": {
                        1:1,
                        "begin":100
                    }
                }
            }
        }
        let flatObj = {
            a1: 1,
            a2: "1",
            a3: 1,
            a4: 1,
            a5: 1,
        };
        expect(leavesAreEqual(singleNested)).toBe(false);
        expect(leavesAreEqual(nested)).toBe(false);
        expect(leavesAreEqual(flatObj)).toBe(false);
    })
})
