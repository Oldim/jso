/* super, abstract class */

abstract class Animal {
    constructor(public name: string) { }
    move(distanceInMeters: number = 0) {
        console.log('%s moved %dm.', this.name, distanceInMeters);
    }
}

class Snake extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

class Horse extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}

let sam: Animal = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);

// let tim: Animal = 
//    new Animal("Timmy the dangerous ('all animals are dangerous')");  // compileerfout;
// want je kunt geen instantie van een abstracte klasse maken

let animals: Animal[]=[];
animal[0]= new Snake ("Sammie die lang");
animal[1]=new Snake("Bijterke");
animal[2]=new Horse("Amica")
animal[3]=new Horse("Black Beauty")
for(let i:number;i<animals.length; i++){
    animals[i].move();
}