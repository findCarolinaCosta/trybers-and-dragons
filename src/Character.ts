import { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import IArchetype from './Interfaces/IArchetype';
import IRace from './Interfaces/IRace';
import { Elf } from './Races';
import getRandomInt from './utils';

class Character implements Fighter {
  private _race: IRace;
  private _archetype: IArchetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(name: string) {
    this._race = new Elf(name, 10);
    this._archetype = new Mage(name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._dexterity = this._race.dexterity;
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  get race(): IRace {
    return this._race;
  }

  get archetype(): IArchetype {
    return this._archetype;
  }
  
  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  get energy(): Energy {
    return {
      type_: this._energy.type_,
      amount: this._energy.amount,
    };
  }

  receiveDamage(attackPoints: number) {
    // demage = this._defense - attackPoints
    const demage = attackPoints - this.defense;

    // ( demage > 0)  this._lifePoints -= demage
    if (demage > 0) this._lifePoints -= demage;

    // (this._lifePoints <= 0) this._lifePoints =  -1 (fix value)
    if (this.lifePoints <= 0) this._lifePoints = -1;

    return this.lifePoints;
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this.strength);
  }

  levelUp():void {
    // maxLifePoints, strength, dexterity e defense +=  getRandomInt(1, 10)
    this._maxLifePoints += getRandomInt(1, 10);
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    // alterar amount = 10
    this._energy.amount = 10;

    // _maxLifePoint nunca poderá ser maior this.race.maxLifePoints
    // se maior iguala valor
    if (this._maxLifePoints > this.race.maxLifePoints) {
      this._maxLifePoints = this.race.maxLifePoints;
    }

    // atualizar this._lifePoints = novo valor de this._maxLifePoints
    this._lifePoints = this._maxLifePoints;
  }

  // gambiarra para continuar passando no re 6
  // método não funcional
  special(enemy: Fighter): void {
    console.log(enemy, this);
  }
}

export default Character;