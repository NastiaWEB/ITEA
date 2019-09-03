class Zoo {

  constructor(name, animalCount = 0){
    this.name = name;
    this.animalCount = animalCount;
    this.zones = {
      mammals: [],
      birds: [],
      fishes: [],
      reptile: [],
      others: []
    }
  }

  addAnimal(animalObj) {
    this.animalCount += 1;
    // Добавляет животное в зоопарк в нужную зону.
    const {zone} = animalObj;
    this.zones[zone ? zone : "others"].push(animalObj);
  }

  removeAnimal(animal){
    this.animalCount -= 1;
    const animalObj = this.findAnimals("name", animal.name);
    const {zone, name} = animalObj;
    const result = this.zones[zone].filter(foundAnimal => foundAnimal.name !== name);
    this.zones[zone] = result;
    console.log(this.zones);
  }

  findAnimals(type, value){
    let result = [];
    for(let key in this.zones) {
      const zone = this.zones[key];
      const animal = zone.find(animal => animal[type] == value)
      if(animal){result.push(animal);}
    }
    let found = result.length < 2 ? result[0] : result;
    return found;
  }

  getAnimal (){
    // выводит информацию о животном
    const result = this.findAnimals(...arguments)
    console.log(result);
  }

  countAnimals (){
    console.log(this.animalCount);
  }

}

class Animal {
  constructor(name, type, phrase, foodType, speed){
    this.name = name;
    this.type = type;
    this.phrase = phrase;
    this.foodType = foodType;
    this.speed = speed;
  }

  animalMovements(movement) {
    const {name, type, speed} = this;
    console.log(`${type} ${name} ${movement} with speed ${speed} km/h`);
  }

}

class Mammal extends Animal {

  constructor(...props){
    super(...props);
    this.zone = "mammals";
  }

  run(){ this.animalMovements("run") }
}

class Fish extends Animal {

  constructor(...props){
    super(...props);
    this.zone = "fishes";
  }

  swim(){ this.animalMovements("swim") }
}

class Reptile extends Animal {

  constructor(...props){
    super(...props);
    this.zone = "reptiles";
  }

  run(){ this.animalMovements("run") }
}

class Bird extends Animal {

  constructor(...props){
    super(...props);
    this.zone = "birds";
  }

  fly(){ this.animalMovements("fly") }
}



let myZoo = new Zoo("My zoo");

const Rex = new Mammal('Rex', 'wolf', 'woof', 'herbivore', 15 );
const Max = new Mammal('Max', 'dog', 'gaf', 'herbivore', 7 );
const Dex = new Animal('Dex', 'wolf', 'woof', 'herbivore', 11 );

Dex.animalMovements("run");
Max.run();

myZoo.addAnimal(Rex);
myZoo.addAnimal(Max);
myZoo.addAnimal(Dex);


myZoo.getAnimal("name", "Max");
myZoo.getAnimal("type", "wolf");


myZoo.removeAnimal(Rex);
