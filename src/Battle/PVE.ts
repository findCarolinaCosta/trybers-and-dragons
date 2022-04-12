import Fighter, { SimpleFighter } from '../Fighter';
import IMonster from '../Interfaces/IMonster';
import Battle from './Battle';

type Bot = IMonster[] | Fighter[] | SimpleFighter[];

class PVE extends Battle {
  _player1: Fighter;
  _bot: Bot;

  constructor(
    player: Fighter, 
    bot: Bot,
  ) {
    super(player);

    this._player1 = player;
    this._bot = bot;
  }

  get player1(): Fighter {
    return this._player1;
  }

  get bot(): Bot {
    return this._bot;
  }

  fight(): number {
    this.bot.forEach((bot) => {
      this.player1.attack(bot);
      bot.attack(this.player1);
    });

    return this.player1.lifePoints === -1 ? -1 : 1;
  }
}

export default PVE;