const getAdventurerHistory = require('../src/getAdventurerHistory');

describe('1 - Crie uma função que retorna as informações sobre um aventureiro', () => {
  it('Passado o Id de um aventureiro, retorne as informações no formato correto', () => {
    const actual = getAdventurerHistory("b0dc644a-5335-489b-8a2c-4e086c7819a2");
    const adventurer = {
      id: 'b0dc644a-5335-489b-8a2c-4e086c7819a2',
      name: 'Emery Spry',
      class: 'Fighter',
      race: 'Dwarf',
      weapons: [
        '89be95b3-47e4-4c5b-b687-1fabf2afa274',
      ],
      level: 7,
      defeatedMonsters: [
        'baa6e93a-f295-44e7-8f70-2bcdc6f6948d',
        airElementalId,
      ],
    },
    const weapons = [
      {
        id: '89be95b3-47e4-4c5b-b687-1fabf2afa274',
        name: 'Greataxe',
        category: 'Martial Melee Weapons',
        weight: '7 lb.',
        damage: 15,
        properties: [
          'heavy',
          'two-handed',
        ],
      },
    ]
    const expected = {
      adventurer,
      weapons,
      monstersToDefead: [
        {
          id: 'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5',
          name: 'Acid Ant',
          size: 'Small',
          type: 'monstrosity',
          exp_by_defeating: 100,
          stats: {
            health_points: 13,
            strength: 8,
            dexterity: 13,
            constitution: 12,
            intelligence: 1,
            wisdom: 7,
            charisma: 3,
          },
          special_abilities: [
            {
              name: 'Explosive Death',
              damage: 10,
            },
            {
              name: 'Acid Spit',
              damage: 5,
            },
            {
              name: 'Bite',
              damage: 3,
            }
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
      ]
    };

    expect(actual).toEqual(expected);
  });
});