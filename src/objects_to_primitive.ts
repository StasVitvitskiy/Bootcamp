function User(name, money) {
    this.name = name;
    this.money = money;
    this[Symbol.toPrimitive] = (hint) => {
        return hint == "string" ? `name: ${this.name}`: this.money;
    }
}

function OldUser(name, money) {
    this.name = name;
    this.money = money;
    this.toString = () => {
        return `name: ${this.name}`;
    };
    this.valueOf = () => {
        return this.money;
    }
}

export const user = new User("John", 1000);
export const oldUser = new OldUser("Sam", 2000);
export const phone = {
    name: "Iphone",
    model: 11,
    memorySize: 256,
    year: 2018,
    toString() {
        return `${this.year} ${this.name} ${this.model} ${this.memorySize}gb`;
    }
};
export const phoneNumber = {
    number: 4256785678,
    codeArea: "+1",
    carrier: "At&t",
    country: "United States",
    [Symbol.toPrimitive](hint) {
        return hint == "string" ? `${this.codeArea}${this.number} carrier: ${this.carrier} ${this.country}`
            : +(this.codeArea + this.number);
    }
};
export let obj = {};
export function A() { return obj }
export function B() { return obj }




