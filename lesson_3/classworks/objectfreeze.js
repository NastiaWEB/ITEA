let universe = {
  infinity: Infinity,
  good: ['cats', 'love', 'rock-n-roll'],
  evil: {
    bonuses: ['cookies', 'great look'],
    app: {z:1}
  }
};

const objectFreeze = (obj) => {
let props = Object.getOwnPropertyNames(obj);
props.forEach(prop => {
  const objProp = obj[prop];
  if (typeof objProp == 'object' && objProp !== null){ objectFreze(objProp)}
})
return Object.freeze(obj);
};

let FarGalaxy = objectFreze(universe);
    FarGalaxy.good.push('javascript');
    FarGalaxy.something = 'Wow!';
    FarGalaxy.evil.humans = [];

export default objectFreeze;
