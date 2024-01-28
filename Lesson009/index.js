class Plant {
    constructor(height, age) {
        this.height = height;
        this.age = age;
    }

    grow() {    
        this.height += 10; // +10cm
        console.log(`The plant grew and its height is now ${this.height} cm.`);
    }
}

class Rose extends Plant {
    constructor(height, age, numberOfFlowers) {
        super(height, age);
        this.numberOfFlowers = numberOfFlowers;
    }
}

// Создание объекта розы и вызов метода grow
const rose = new Rose(50, 2, 5);
rose.name = "чайная";


console.log(rose);
for (let i = 0; i < 5; i++) rose.grow();
