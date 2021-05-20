class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }

    sayName() {
        console.log("Name is:" + " " + this.name)
    }

    showStats() {
        console.log("Name is:" + " " + this.name + ", " + "Health is:" + " " + this.health + ", " + "Speed is:" + " " + this.speed 
        + ", " + "Strength is:" + " " + this.strength)
    }

    drinkSake() {
        this.health +=10;
        console.log("Health went up to:" + " " + this.health);
    }
}


const ninja1 = new Ninja("Hyabusa");

ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();



class Sensei extends Ninja {
    constructor (name) {
        super(name);
        this.wisdom = 10;
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
    }
    speakWisdom() {
        this.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }
}


// example output
const superSensei = new Sensei("Master Splinter");

superSensei.sayName();
superSensei.showStats();

superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
