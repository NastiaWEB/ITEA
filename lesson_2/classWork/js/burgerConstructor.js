

  /*

    Задание:

      1. Создать конструктор бургеров на прототипах, которая добавляет наш бургер в массив меню

      Дожно выглядеть так:
      new burger('Hamburger',[ ...Массив с ингредиентами ] , 20);

      Моделька для бургера:
      {
        cookingTime: 0,     // Время на готовку
        showComposition: function(){
          let {composition, name} = this;
          let compositionLength = composition.length;
          console.log(compositionLength);
          if( compositionLength !== 0){
            composition.map( function( item ){
                console.log( 'Состав бургера', name, item );
            })
          }
        }
      }


      Результатом конструктора нужно вывести массив меню c добавленными элементами.
      // menu: [ {name: "", composition: [], cookingTime:""},  {name: "", composition: [], cookingTime:""}]

        2. Создать конструктор заказов

        Моделька:
        {
          id: "",
          orderNumber: "",
          orderBurder: "",
          orderException: "",
          orderAvailability: ""
        }

          Заказ может быть 3х типов:
            1. В котором указано название бургера
              new Order('Hamburger'); -> Order 1. Бургер Hamburger, будет готов через 10 минут.
            2. В котором указано что должно быть в бургере, ищете в массиве Menu подходящий вариант
              new Order('', 'has', 'Название ингредиента') -> Order 2. Бургер Чизбургер, с сыром, будет готов через 5 минут.
            3. В котором указано чего не должно быть
              new Order('', 'except', 'Название ингредиента') ->


            Каждый их которых должен вернуть статус:
            "Заказ 1: Бургер ${Название}, будет готов через ${Время}

            Если бургера по условиям заказа не найдено предлагать случайный бургер из меню:
              new Order('', 'except', 'Булка') -> К сожалению, такого бургера у нас нет, можете попробовать "Чизбургер"
              Можно например спрашивать через Confirm подходит ли такой вариант, если да - оформлять заказ
              Если нет, предложить еще вариант из меню.

        3. Протестировать программу.
          1. Вначале добавляем наши бургеры в меню (3-4 шт);
          2. Проверяем работу прототипного наследования вызывая метод showComposition на обьект бургера с меню
          3. Формируем 3 заказа

        + Бонусные задания:
        4. Добавлять в исключения\пожелания можно несколько ингредиентов

  */

  const Ingredients = [
    "Булка",
    "Огурчик",
    "Котлетка",
    "Бекон",
    "Рыбная котлета",
    "Соус карри",
    "Кисло-сладкий соус",
    "Помидорка",
    "Маслины",
    "Острый перец",
    "Капуста",
    "Кунжут",
    "Сыр Чеддер",
    "Сыр Виолла",
    "Сыр Гауда",
    "Майонез"
  ];

  var OurMenu = [];
  var OurOrders = [];

  // Burger constructor
  function Burger(name, composition, cookingTime) {
    this.name = name;
    this.composition = composition;
    this.cookingTime = cookingTime; // Время на готовку
    this.addNewBurger();
  }

  Burger.prototype = {
    showComposition: function() {
      let { composition, name } = this;
      let compositionLength = composition.length;
      if (compositionLength !== 0) {
        composition.map(function(item) {
          return console.log("Состав бургера", name, item);
        });
      }
    },
    addNewBurger: function() {
      let { composition, name, cookingTime } = this;
      OurMenu.push({ name, composition, cookingTime });
    }
  };
  // Order constructor
  function Order(name, condition, ingredient) {
    this.name = name;
    this.condition = condition;
    this.ingredient = ingredient;
    this.orderNumber = OurOrders.length + 1;
    this.displayOrder();
  }

  Order.prototype = {
    displayOrder: function() {
      const { condition, name, ingredient } = this;
      const showOrder = ({ name, ingredient, cookingTime }) => {
        const ingredientPhrase = ingredient ? `c ${ingredient},` : "";
        console.log(
          `Бургер ${name}, ${ingredientPhrase} будет готов через ${cookingTime} минут`
        );
      };

      const findBurger = (condition) => {

        let exists = [];

        function filterItems(arr, query) {
          return arr.filter(function(el) {
              return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
          })
        };

        OurMenu.map(burger => {
          let filtred = filterItems(burger.composition, ingredient);
          const isHasCondition = condition ? filtred.length > 0 : filtred.length < 1;
          if (isHasCondition){exists.push(burger)}
        });

        if(exists.length < 1){
          console.log(" К сожалению, у нас нет такого бургера");
        }else{
          exists.map(burger => {
            const { name, cookingTime } = burger;
            return showOrder({name, cookingTime})
          })
        }
      };

      if (!condition && !ingredient && name) {
        const { cookingTime } = OurMenu.find(e => e.name === name);
        showOrder({ name, cookingTime });
      } else if (condition === "has") { findBurger(true) } else if (condition === "except") { findBurger(false) }
    }
  };

  function createBurgers() {
    const burger = new Burger(
      "Hamburger",
      ["Булка", "Огурчик", "Котлетка", "Бекон"],
      20
    );
    new Burger(
     "Чизбургер",
     ["Булка", "Кунжут", "Бекон", "Сыр"],
     20
   );
    burger.showComposition();
  }

  function init() {
    createBurgers();
    new Order("Hamburger");
    new Order("", "has", "Сыр");
    new Order('', 'except', 'Сыр');
  }

  init();
