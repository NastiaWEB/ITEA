/*
Пример использование сеттера и геттера из es6
*/

const gettersAndSettersInClass = () => {

	class Person {
		constructor(name, age) {
			Object.defineProperty( this, '_name', { 
				enumerable: false ,
				value: name
			});
	
			Object.defineProperty( this, '_age', { 
				enumerable: false ,
				value: age
			});
		}
	
		get name() {
			return this._name.toUpperCase();
		}
	
		set name(newName) {
			this._name = `Validated ${newName}`;
			console.log('new name:', this._name);
		}
	
		get age(){
			console.log('get age:', this._age);
			return this._age;
		}
	
		set age(newAge){
			console.log('set age:', newAge);
			if( this._age <= newAge){
				this._age = newAge;
			} else {
				throw new Error('Возраст не может быть меньше предыдущего');
			}
		}
	
		walk() {
			console.log(this._name + ' is walking.');
		}
	}

	let Bunny = new Person('Bunny', 22);
	Bunny.name = 'Sunny';
	console.log( Petya );
	Bunny.age = 23;

}



