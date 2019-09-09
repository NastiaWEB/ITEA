/*
  Задание:

    Написать синглтон, который будет создавать обьект government

    Данные:
    {
        laws: [
        {
          id: 0,
          text: '123123'
        }
      ],
        budget: 1000000
        citizensSatisfactions: 0,
    }

    У этого обьекта будут методы:
      .добавитьЗакон({id, name, description})
        -> добавляет закон в laws и понижает удовлетворенность граждан на -10

      .читатькКонституцию -> Вывести все законы на экран
      .читатьЗакон(ид)

      .показатьУровеньДовольства()
      .показатьБюджет()
      .провестиПраздник -> отнимает от бюджета 50000, повышает удовлетворенность граждан на +5


*/
const data = {
  laws: [
  {
    id: 0,
    text: '123123'
  },
  {
    id: 1,
    text: '15676123'
  }
],
  budget: 1000000,
  citizensSatisfactions: 0,
};

const Government = {
      addLaw: (law) => {
        data.laws.push({id: this.laws.length + 1, text: law})
        data.citizensSatisfactions -= 10;
      },
      showAllLaws: () => console.log(data.laws),
      showLaw: (id) => console.log(data.laws.find(law => law.id === id)),
      showSatisfaction: () => console.log(data.citizensSatisfactions),
      showBudget: () => console.log(data.budget),
      createParty: () => {data.budget -= 50000; data.citizensSatisfactions += 5; console.log(data.budget, data.citizensSatisfactions)}
  }

Object.freeze(Government);

Government.createParty()
Government.showLaw(0)
