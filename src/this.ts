let user = {
    food: [],
    eat: function(...args) {
        args.forEach((el) => {
            this.food.push(el);
        })
    },
    digest: function() {
        this.food.pop();
        if(this.food.length == 0) {
            this.alive = false;
        }
    },
    alive: true,
    walk: function(kms) {
        this.distance += kms;
    },
    distance: 0
};


user.eat("apple", "orange", "chicken");
console.log(user.food);

let car = {
    name: "Ford",
    model: "F-150",
    weight: 2000,
    color: "black",
    fuel: 100,
    battery: 200,
    fuelEconomy: 1,
    odometer: 0,
    leftDoor: {
        open: false,
        block: false
    },
    rigthDoor: {
        open: false,
        block: false
    },
    engine: {
        start: false
    },
    start: function() {
        if(this.fuel > 0 && this.battery > 0) {
            this.engine.start = true;
            this.intervalId = setInterval(() => {
                if(this.fuel > 0) {
                    this.fuel -= this.fuelEconomy;
                }
                if(this.fuel == 0) {
                    this.stop();
                }
            }, 10000)
        }
    },
    drive: function() {
        this.fuelEconomy = 3;
        this.blockDoors("both");
        this.odometer++;
    },
    stop: function() {
        this.engine.start = false;
        clearInterval(this.intervalId);
        this.unlockDoors("both");
    },
    openDoor: function(param) {
        if(param == "left") {
            this.leftDoor.open = true;
        }
        if(param == "right") {
            this.rigthDoor.open = true;
        }
        if(param == "both") {
            this.leftDoor.open = true;
            this.rigthDoor.open = true;
        }
    },
    closeDoor: function(param) {
        switch(param) {
            case "left":
                this.leftDoor.open = false;
                break;
            case "right":
                this.rigthDoor.open = false;
                break;
            case "both":
                this.leftDoor.open = false;
                this.rigthDoor.open = false;
        }
    },
    blockDoors: function(param) {
        switch(param) {
            case "left":
                this.leftDoor.block = true;
                break;
            case "right":
                this.rigthDoor.block = true;
                break;
            case "both":
                this.rightDoor.block = true;
                this.leftDoor.block = true;
        }
    },
    unlockDoors: function(param) {
        switch(param) {
            case "left":
                this.leftDoor.block = false;
                break;
            case "right":
                this.rigthDoor.block = false;
                break;
            case "both":
                this.rightDoor.block = false;
                this.leftDoor.block = false;
        }
    }
}





let animal = {
    type: "cheetah",
    weight: 80,
    food: [],
    poop: 0,
    hungry: true,
    isSleeping: false,
    leftEye: {
        closed: false
    },
    rightEye: {
        closed: false
    },
    roar: function() {
        console.log("ROAR");
    },
    eat: function(...args) {
        args.forEach((el) => {
            this.food.push(el);
            this.poop++;
            this.weight++;
        })
        if(this.food.length > 10) {
            this.sleep();
        }
    },
    sleep: function() {
        this.isSleeping = true;
    },
    shit: function() {
        this.weight--;
        this.poop = 0;
    },
    blink: function() {
        this.leftEye.closed = true;
        this.leftEye.closed = true;
        setTimeout(() => {
            this.leftEye.closed = false;
            this.leftEye.closed = false;
        }, 1000)
    }
}
