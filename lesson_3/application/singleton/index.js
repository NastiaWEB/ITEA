import FreezeDemo from './object_freeze';
import OldSingleton from './old-singleton';
import NewSingleton from './new-singleton';
import Single from './oop-singleton';
// FreezeDemo();


const SingletonDemo = () => {
/*
    Singleton (он же одиночка)— это паттерн проектирования,
    который гарантирует, что у класса есть только один экземпляр,
    и предоставляет к нему глобальную точку доступа.

    Про паттерн: https://refactoring.guru/ru/design-patterns/singleton

    Рассмотрим три реализации синглтона в JS:
*/


/*
	Первая -- классический ООП паттерн. Который актуален для большинства объектно ориентированых языков.
*/
// 	const store1 = new Single('test');
// 	store1.addToData();
// 	console.log('first instance:', store1 );

// 	const store2 = new Single('test2');
// 	store2.addToData();
// 	console.log('second instanse:', store2 );

// 	console.log('is same Object?', store1 === store2 );

/*
	Вторая, старая реализация объектного синглтона через замыкания.
*/
  // oldSingletonDemo();
/*
	Третья, новая реализация объектного синглтона через модули и метод Object.freeze();
*/
  // newSingetonDemo();

};  

const oldSingletonDemo = () => {
    // Смотрим реализацию в файле old-singleton.js  

    console.log( OldSingleton );
    OldSingleton.add({id: 0, language: 'js'});
    OldSingleton.add({id: 1, language: 'phyton'});
    OldSingleton.add({id: 2, language: 'php'});
    OldSingleton.add({id: 3, language: 'ruby'});

    console.log('OldSingleton', OldSingleton.showData() );
    let myLang = OldSingleton.get(0);
    let myLang2 = OldSingleton.get(3);
    console.log('OldSingleton -> myLang', myLang);
    console.log('OldSingleton -> myLang', myLang2);
};
//
const newSingetonDemo = () => {
  // Как и все в js в 2019 меньше, быстрее, чище!
	NewSingleton.add({id: 0, language: 'js'});
	NewSingleton.add({id: 1, language: 'phyton'});
	NewSingleton.add({id: 2, language: 'php'});
	NewSingleton.add({id: 3, language: 'ruby'});
	//
	console.log('NewSingleton', NewSingleton);
	let myLang = NewSingleton.get(2);
	console.log('NewSingleton -> myLang', myLang);

	NewSingleton.addCounter(20);
	NewSingleton.addCounter(20);
	NewSingleton.addCounter(20);
	NewSingleton.addCounter(20);
	console.log( NewSingleton.getCounter() );

	/*
		Демо усложнить синглтон
	*/
};

export default SingletonDemo;
