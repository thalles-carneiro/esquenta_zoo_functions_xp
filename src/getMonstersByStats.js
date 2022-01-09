const { monsters } = require('../data/api_data');

/*
  Desenvolva uma função que retorne um Array de monstros,
  que possuem o o valor minimo do status dado
*/

function getMonstersByStats(stat, minValue) {
  return monsters.filter(({stats}) => stats[stat] >= minValue).reverse()
}
console.log(getMonstersByStats('strength', 20))
module.exports = getMonstersByStats;