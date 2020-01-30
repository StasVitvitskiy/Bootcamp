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
    });
    it("returns false when there is no bucket", () => {
        let ht = new HashTable();
        ht.set("one", 1);
        ht.set("eno", 20);
        ht.set("one", 1000);
        expect(ht.has("someKey")).toBe(false);
    });
    it("returns false when there is no such key", () => {
        let ht = new HashTable();
        ht.set("one", 1);
        ht.set("eno", 20);
        ht.set("one", 1000);
        expect(ht.has("eon")).toBe(false);
    })
    it("returns true when the key is found", () => {
        let ht = new HashTable();
        ht.set("one", 1);
        ht.set("eno", 20);
        ht.set("one", 1000);
        expect(ht.has("one")).toBe(true);
    })
    it("does not delete anything when there is no bucket", () => {
        let ht = new HashTable();
        ht.set("one", 1);
        ht.set("eno", 20);
        ht.set("one", 1000);
        ht.remove("key");
        expect(ht.buckets).toStrictEqual([
            [
                322, [
                    ["one", 1000],
                    ["eno", 20]
                ]
            ]
        ]);
    });
    it("deletes nothing when the key is not found", () => {
        let ht = new HashTable();
        ht.set("one", 1);
        ht.set("eno", 20);
        ht.set("one", 1000);
        ht.remove("eon");
        expect(ht.buckets).toStrictEqual([
            [
                322, [
                ["one", 1000],
                ["eno", 20]
            ]
            ]
        ]);
    });
    it("deletes the value", () => {
        let ht = new HashTable();
        ht.set("one", 1);
        ht.set("eno", 20);
        ht.set("one", 1000);
        ht.remove("one");
        expect(ht.buckets).toStrictEqual([
            [
                322, [
                ["eno", 20]
            ]
            ]
        ]);
    });
    it("returns array of keys", () => {
        let ht = new HashTable();
        ht.set("one", 1);
        ht.set("eno", 20);
        ht.set("one", 1000);
        ht.set("some", 200);
        ht.set("key", 150);
        expect(ht.getKeys()).toStrictEqual(["one", "eno", "some", "key"]);
    });
    it("returns array of values", () => {
        let ht = new HashTable();
        ht.set("one", 1);
        ht.set("eno", 20);
        ht.set("one", 1000);
        ht.set("some", 200);
        ht.set("key", 150);
        expect(ht.getValues()).toStrictEqual([1000, 20, 200, 150]);
    })

});
