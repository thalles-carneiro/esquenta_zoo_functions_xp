const { weapons } = require('../data/api_data');

/*
  Desenvolva uma função que retorne o aventureiro com a arma de maior dano,
  retorne um objeto no seguinte formato:
  {
    id: 'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1',
    name: 'Nigel Bethea',
    class: 'Barbarian',
    race: 'Human',
    weapons: [
      '89be95b3-47e4-4c5b-b687-1fabf2afa274',
      clubId,
    ],
    level: 5,
    defeatedMonsters: [acidAntId, airElementalId],
  }
*/

function getAdventurerWithHigherDamageWeapon() {
  return weapons.reduce((acc, obj) => (acc.damage < obj.damage ? obj : acc));
}

module.exports = getAdventurerWithHigherDamageWeapon;