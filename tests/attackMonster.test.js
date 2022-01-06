const attackMonster = require('../src/attackMonster');

describe('Crie uma função que retorna uma frase simulando um combate', () => {
  it('Dado um aventureiro e um monstro esperado, retorne a frase no formato correto', () => {
    const adventurer = 'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1';
    const monster = 'baa6e93a-f295-44e7-8f70-2bcdc6f6948d';
    const actual = attackMonster(adventurer, monster);

    const expected = 'Nigel Bethea, nivel 5 atacou o monstro Acolyte de tamanho Medium dando 15 dano';

    expect(actual).toBe(expected);
  });
});