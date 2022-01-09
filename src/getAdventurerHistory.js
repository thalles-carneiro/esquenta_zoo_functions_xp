const { adventurers, weapons: weaponsData, monsters } = require('../data/api_data');

/*
  Desenvolva uma função que retorne uma lista de monstros,
  retorne um array de contendo o aventureiro,
  os monstros que ele derrotou e a arma,
  seguindo este formato {adventurer: {}, weapons: {}, monstersToDefead:[]}
*/

function getAdventurerHistory(adventurerId) {
  return adventurers.reduce((acc, adventurer) => {
    if (adventurer.id === adventurerId) {
      const weapons = weaponsData.filter((v) => adventurer.weapons.includes(v.id));
      const monstersToDefead = monsters.filter((v) => !adventurer.defeatedMonsters.includes(v.id));

      const finalObj = {
        adventurer,
        weapons,
        monstersToDefead,
      };
      return finalObj;
    }
    return acc;
  }, {});
}

module.exports = getAdventurerHistory;
