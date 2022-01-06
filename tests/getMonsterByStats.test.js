const getMonsterByStats = require('../src/getMonstersByStats');

describe('1 - Crie uma função que retorna uma lista de monstros que possuem o status dado', () => {
  it('Dado 20 de strength, testa se o retorno é o esperado', () => {
    const actual = getMonsterByStats(strength, 20);

    const expected = [
      {
        id: '533bebf3-6bbe-41d8-9cdf-46f7d13b62ae',
        name: 'Alabaster Tree',
        size: 'Huge',
        type: 'celestial',
        exp_by_defeating: 300,
        stats: {
          health_points: 105,
          strength: 20,
          dexterity: 10,
          constitution: 18,
          intelligence: 10,
          wisdom: 14,
          charisma: 10,
        },
        special_abilities: [
          {
            name: 'Cloud of Needles',
            damage: 20,
          },
          {
            name: 'Slam',
            damage: 12,
          },
          {
            name: 'Toss',
            damage: 16,
          },
        ]
      },
      {
        id: '78460a91-f4da-4dea-a469-86fd2b8ccc84',
        name: 'Adult Black Dragon',
        size: 'Huge',
        type: 'dragon',
        exp_by_defeating: 500,
        stats: {
          health_points: 195,
          strength: 23,
          dexterity: 14,
          constitution: 21,
          intelligence: 14,
          wisdom: 13,
          charisma: 17,
        },
        special_abilities: [
          {
            name: 'Acid Breath',
            damage: 25,
          },
          {
            name: 'Tail',
            damage: 10,
          },
          {
            name: 'Bite',
            damage: 15,
          }
        ]
      },
    ];

    expect(actual).toEqual(expected);
  });
});