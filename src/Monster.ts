import { SimpleFighter } from './Fighter';

class Monter implements SimpleFighter {
  private _lifePoints = 85;
  private _strength = 63;

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  receiveDamage(attackPoints: number) {
    const demage = attackPoints - this.lifePoints;

    if (demage > 0) this._lifePoints -= demage;

    if (this.lifePoints <= 0) this._lifePoints = -1;

    return this.lifePoints;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this.strength);
  }
}

export default Monter;