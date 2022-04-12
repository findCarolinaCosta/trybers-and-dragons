import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  private _player1: Fighter;
  private _player2: Fighter;

  constructor(player1: Fighter, player2: Fighter) {
    super(player1);

    this._player1 = player1;
    this._player2 = player2;
  }

  get player1(): Fighter {
    return this._player1;
  }

  get player2(): Fighter {
    return this._player2;
  }

  fight(): number {
    // enquanto tiverem "vida" = attack
    while (this.player1.lifePoints > 0 && this.player2.lifePoints > 0) {
      this.player1.attack(this.player2);
      this.player2.attack(this.player1);
    }

    return this.player1.lifePoints === -1 ? -1 : 1;
  }
}

export default PVP;