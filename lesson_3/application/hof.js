
/*

  Higher Order Functions
  function is a values

*/
let hofDemo = () => {

  // let multiply = x => x * x;
  // let nine = multiply(3);
  // console.log( 'multiply:', nine );

  /*
    Array.filter (так же как map, forEach, etc...) пример использования HOF в нативном js
    Паттерн позворялет использовать композцицию что бы собрать из маленьких функций одну большую
  */

  // let zoo = [
  //   {id:0, name:"WoofMaker", species: 'dog'},
  //   {id:1, name:"WhiteFurr", species: 'rabbit'},
  //   {id:2, name:"MeowMaker", species: 'cat'},
  //   {id:3, name:"PoopMaker", species: 'dog'},
  //   {id:4, name:"ScratchMaker", species: 'cat'},
  // ];

  // let isDog = animal => animal.species === 'dog';
  // let isCat = animal => animal.species === 'cat';

  // let dogs = zoo.filter( isDog );
  // let cats = zoo.filter( isCat );
 
  // console.log('Here dogs:', dogs);
  // console.log('Here cats:', cats);

  // - - - - - - - - - - - - - - - - - -

  // function compose(func_a, func_b){
  //   return function(c){
  //     return func_a( func_b(c) );
  //   }
  // }

  const compose = ( func_a, func_b ) => (c) => func_a( func_b(c) );


  const addTwo = value => {
    console.log('Add', value);
    return value + 2
  }
  const multiplyTwo = value => {
    console.log('Mulitple', value);
    return value * 2;
  }

  const addTwoAndMultiplayTwo = compose( multiplyTwo, addTwo );

  console.log( addTwoAndMultiplayTwo );
  console.log( addTwoAndMultiplayTwo( 10 ) );

  /*
    В данном случае происходит следующее:
    - Вызывается ф-я compose которая принимает ф-и addTwo, multiplyTwo как аргументы
    - Вызывается функция которая передана как аргумент func_b
    - Результат её выполнения передается в функция func_a
    - Общий результат возвращается в ф-ю которая нам возвращается в переменную
  */

  // console.log(
  //   addTwoAndMultiplayTwo(2),
  //   addTwoAndMultiplayTwo(6),
  //   addTwoAndMultiplayTwo(40)
  // );

  // ---
  
    // const doSmsng = (event) => {
    //   console.log('do smsng', event);

    //   return () => console.log('another func');
    // }

    // function doSmsng( status ){
    //   if( status ){
    //     return function(e){
    //       console.log('status is true', status, 'e', e);
    //     }
    //   } else {
    //     return function(e){
    //       console.log('status is false', status, 'e', e);
    //     }
    //   }
    // } 

    // const doSmsng = ( status ) => (e) => {
    //   console.log('status', status, 'e', e);
    // }

    
    // const btn = document.getElementById('btn');
    // const btn1 = document.getElementById('btn1');
    // btn.addEventListener('click', doSmsng(false) );
    // btn1.addEventListener('click', doSmsng(true) );

  
  // ---

  // class Item {
  //   constructor(id){
  //     this.id = id;

  //     this.clickHandler = this.clickHandler.bind(this);
  //   }

  //   clickHandler(id) {
  //     return (e) => {
  //       console.log( 'this', this, 'id', id, 'event', e);
  //     }
  //   }

    // clickHandler = id => e => {
    //   console.log( 'this', this, 'id', id, 'event', e);
    // }

  //   render(){
  //     const item = document.getElementById('class-item');
  //     let node = document.createElement('div');
  //         node.innerHTML = `
  //           <div class="item" data-id="${this.id}">
  //               <h2>${this.id}</h2>
  //               <button class="_btn"> Like </button>
  //           </div>
  //         `;  

  //         node.querySelector('._btn').addEventListener('click', this.clickHandler( 10 ) );

  //         item.appendChild(node);  
  //   }
  // }

  // let firstItem = new Item(1);
  // firstItem.render();

  // let secondItem = new Item(2);
  // secondItem.render();

  // let thirdItem = new Item(3);
  // thirdItem.render();


}

export default hofDemo;
