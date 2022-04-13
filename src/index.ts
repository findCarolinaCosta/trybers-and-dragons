import Battle, { PVE, PVP } from './Battle';
import Character from './Character';
import Dragon from './Dragon';
import Monster from './Monster';

// 3 objetos do tipo Character
const player1 = new Character('Barbarian');
const player2 = new Character('Monk');
const player3 = new Character('Wizard');

// Execute algumas vezes o método levelUp do player1
let level = 0;
const maxLevel = 10;
while (level < maxLevel) {
  player1.levelUp();
  level += 1;
}

// Crie 2 objetos do tipo Monster
const monster1 = new Monster();
const monster2 = new Dragon();

// objeto do tipo PVP
const pvp = new PVP(player2, player3);

// objeto do tipo PVE
const pve = new PVE(player1, [monster1, monster2]);

// função chamada runBattles
const runBattles = (battles: Battle[]) => {
  battles.forEach((battle) => {
    battle.fight();
    console.log(battle);
  });
  console.log('fim');
};

export {
  player1,
  player2,
  player3,
  monster1,
  monster2,
  pvp,
  pve,
  runBattles,
};