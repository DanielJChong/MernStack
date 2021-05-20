class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }

    sayName() {
        console.log("This ninja's name is:" + " " + this.name)
    }

    showStats() {
        console.log("This ninja's name is:" + " " + this.name + ", " + "This ninja's health is:" + " " + this.health + ", " + "This ninja's speed is:" + " " + this.speed 
        + ", " + "This ninja's strength is:" + " " + this.strength)
    }

    drinkSake() {
        this.health +=10;
        console.log("Ninja's health went up to:" + " " + this.health);
    }
}


const ninja1 = new Ninja("Hyabusa");

ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();