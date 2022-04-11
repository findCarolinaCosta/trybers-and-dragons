import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private _energyType: EnergyType;
  static instanceMages = 0;

  constructor(name: string) {
    super(name);

    this._energyType = 'mana';
    Mage.instanceMages += 1;
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Mage.instanceMages;
  }
}

export default Mage;