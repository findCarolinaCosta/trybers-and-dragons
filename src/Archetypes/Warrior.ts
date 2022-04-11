import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private _energyType: EnergyType;
  static instanceWarrior = 0;

  constructor(name: string) {
    super(name);

    this._energyType = 'stamina';
    Warrior.instanceWarrior += 1;
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Warrior.instanceWarrior;
  }
}

export default Warrior;