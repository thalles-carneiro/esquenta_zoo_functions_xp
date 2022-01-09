const { adventurers, monsters } = require('../data/api_data');

/*
  Desenvolva uma função que realiza a soma de
  quantos pontos de experiência uma determinada
  pessoa aventureira conseguiu adquirir de acordo
  com seus monstros derrotados.

  Retorne um número: X
*/

function getTotalExpByAdventurer(adventurerId) {
  const exp = adventurers.reduce((acc, { id, defeatedMonsters }) => {
    let result = acc;
    if (id === adventurerId) {
      defeatedMonsters.forEach((defeatedId) => {
        result += monsters.find((v) => v.id === defeatedId).exp_by_defeating;
      });
    }
    return result;
  }, 0);
  if (exp) return exp;
  throw new Error('O id inserido não é de uma pessoa aventureira!');
}

module.exports = getTotalExpByAdventurer;