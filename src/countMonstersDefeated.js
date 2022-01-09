const { monsters, adventurers } = require('../data/api_data');

/*
  Desenvolva uma função que realiza uma contagem de
  quantos monstros de cada tipo foram derrotados
  pelas pessoas aventureiras.

  Caso a função não receba parâmetros,
  retorne um objeto no seguinte formato:
  {
    monstrosity: X,
    dragon: Y,
    elemental: A,
    celestial: B,
    humanoid: Z,
  }

  Caso a função receba um parâmetro,
  no formato { type: 'algumtipodemonstro' },
  retorne um número: X
*/

function countMonstersDefeated(option) {
  const monsterList = adventurers.reduce((acc, { defeatedMonsters }) => {
    let newAcc = acc;
    defeatedMonsters.forEach((id) => {
      const { type } = monsters.find((v) => v.id === id);
      newAcc = { ...newAcc, [type]: newAcc[type] + 1 || 1 };
    });
    return newAcc;
  }, {});
  return option ? monsterList[option.type] : monsterList;
}

const actual = countMonstersDefeated();
console.log('saída=>', actual);

// const expected = {
//   monstrosity: 2,
//   dragon: 1,
//   elemental: 3,
//   celestial: 1,
//   humanoid: 1,
// };

module.exports = countMonstersDefeated;