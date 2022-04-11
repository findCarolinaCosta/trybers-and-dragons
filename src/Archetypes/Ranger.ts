import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private _energyType: EnergyType;
  static instanceRanger = 0;

  constructor(name: string) {
    super(name);

    this._energyType = 'stamina';
    Ranger.instanceRanger += 1;
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Ranger.instanceRanger;
  }
}

export default Ranger;