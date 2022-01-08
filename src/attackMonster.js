const { monsters, adventurers, weapons } = require('../data/api_data');

/*
  Desenvolva uma função que retone uma frase neste estilo:
  "Fulano, nivel X atacou o monstro Fuleco de tamanho Gigante dando X dano"
  para capturar o dano, utilize o dano da primeira arma que o aventureiro possui
*/

function attackMonster(adventurerId, monsterId) {
  const { name, level, weapons: [weaponId] } = adventurers.find((v) => v.id === adventurerId);
  const { name: monster, size } = monsters.find((v) => v.id === monsterId);
  const { damage } = weapons.find((v) => v.id === weaponId);

  return `${name}, nivel ${level} atacou o monstro ${monster} de tamanho ${size}\
 dando ${damage} dano`;
}
const adventurer = 'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1';
const monster = 'baa6e93a-f295-44e7-8f70-2bcdc6f6948d';
const actual = attackMonster(adventurer, monster);
console.log(actual);

// const expected = 'Nigel Bethea, nivel 5 atacou o monstro Acolyte de tamanho Medium dando 15 dano';

module.exports = attackMonster;