import Fighter, { SimpleFighter } from '../Fighter';
import IMonster from '../Interfaces/IMonster';
import Battle from './Battle';

type Bot = IMonster[] | Fighter[] | SimpleFighter[];

class PVE extends Battle {
  private _player1: Fighter;
  private _bots: Bot;

  constructor(
    player: Fighter, 
    bots: Bot,
  ) {
    super(player);

    this._player1 = player;
    this._bots = bots;
  }

  get player1(): Fighter {
    return this._player1;
  }

  get bots(): Bot {
    return this._bots;
  }

  fight(): number {
    this.bots.forEach((bot) => {
      while (bot && bot.lifePoints > 0 && this._player1.lifePoints > 0) {
        this.player1.attack(bot);
        bot.attack(this.player1);
      }
    });

    return this.player1.lifePoints === -1 ? -1 : 1;
  }
}

export default PVE;