
/*

    Задание, написать класс, который создает объекты по модельке:
    Dog {
        name: "", -> not configurable
        breed: "", -> not configurable, not editable
        weight: "",
        isGoodBoy: true -> enumerable
    }

*/

// Реализация 1
//
// class Dog {
//   constructor(name, breed, weight, isGoodBoy = true){
//     this.name = name;
//     this.breed = breed;
//     this.weight = weight;
//     this.isGoodBoy = isGoodBoy;
//   }
//   getObj(){
//     let Obj = {};
//     Object.defineProperty(Obj, "name", {value: this.name, configurable: false});
//     Object.defineProperty(Obj, "breed", {value: this.breed, configurable: false, writable:false});
//     Object.defineProperty(Obj, "weight", {value: this.weight});
//     Object.defineProperty(Obj, "isGoodBoy", {value: this.isGoodBoy, enumerable: true});
//     console.log(Obj);
//   }
// };
//
// const myObj = new Dog("Rex", "Akita", 34);
//
// myObj.getObj();


// Реализация 2

class Dog {
  constructor(name, breed, weight, isGoodBoy = true){
    return Object.create({},{
      weight: { value: weight },
      name: { value: name  },
      breed: { value: breed },
      isGoodBoy: { value: isGoodBoy, enumerable: true }
    });
  }
};

const myObj = new Dog("Rex", "Akita", 34);
console.log(myObj);
