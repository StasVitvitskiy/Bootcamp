import {HashTable} from "./hash_table"
describe("tests for the hash function", () => {
    it("returns hash for a key" ,() => {
        let ht = new HashTable();
        expect(ht.hash("lastName")).toBe(821);
        expect(ht.hash("some text")).toBe(921);
        expect(ht.hash("John Smith")).toBe(948);
        expect(ht.hash("Sandra Dee")).toBe(903);
        expect(ht.hash(1234567890)).toBe(525);
        expect(ht.hash({one: 1})).toBe(1446);
    });
    it("sets value for the key that does not yet exist", () => {
        let ht = new HashTable()
        ht.set("one", 1);
        expect(ht.buckets).toStrictEqual([
            [
                322,
                [
                    ["one", 1]
                ]
            ]

        ])
    });
    it("sets value for the key in the existing bucket", () => {
        let ht = new HashTable();
        ht.set("one", 1);
        ht.set("eno", 20);
        expect(ht.buckets).toStrictEqual([
            [
                322,
                [
                    ["one", 1],
                    ["eno", 20]
                ]
            ]

        ])
    });
    it("updates value for the key", () => {
        let ht = new HashTable();
        ht.set("one", 1);
        ht.set("eno", 20);
        ht.set("one", 1000);
        expect(ht.buckets).toStrictEqual([
            [
                322,
                [
                    ["one", 1000],
                    ["eno", 20]
                ]
            ]

        ])
    });
    it("returns undefined when there is no bucket",() => {
        let ht = new HashTable();
        ht.set("one", 1);
        ht.set("eno", 20);
        ht.set("one", 1000);
        expect(ht.get("something")).toBe(undefined);
    })
    it("return undefined when there is no such key", () => {
        let ht = new HashTable();
        ht.set("one", 1);
        ht.set("eno", 20);
        ht.set("one", 1000);
        expect(ht.get("oen")).toBe(undefined)
    });
    it("gets the value", () => {
        let ht = new HashTable();
        ht.set("one", 1);
        ht.set("eno", 20);
        ht.set("one", 1000);
        expect(ht.get("one")).toBe(1000);
    })
});
