import data from "./data";

const Government = {
        data: [...data],
      addLaw: (law) => {
        this.data.laws.push({id: this.laws.length + 1, text: law})
        this.data.citizensSatisfactions -= 10;
      },
      showAllLaws: () => console.log(this.data.laws),
      showLaw: (id) => console.log(this.data.laws.find(law => law.id === id)),
      showSatisfaction: () => console.log(this.data.citizensSatisfactions),
      showBudget: () => console.log(this.data.budget),
      createParty: () => {this.data.budget -= 50000; this.data.citizensSatisfactions += 5; console.log(this.data.budget, this.data.citizensSatisfactions)}
  };
Object.freeze(Government);

export default Government;
