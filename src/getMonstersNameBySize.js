const { monsters } = require('../data/api_data');

/*
  Desenvolva uma função que categorize os monstros por tamanho,
  retorne um objeto no seguinte formato:
  {
    Small: ['Monstro A'],
    Huge: ['Monstro B', 'Monstro D'],
    Large: ['Monstro C'],
    Medium: ['Monstro E'],
  }
*/

const getMonstersNameBySize = () =>
  monsters.reduce((acc, { name, size }) =>
    ({ ...acc, [size]: [...acc[size] || '', name] }), {});

module.exports = getMonstersNameBySize;