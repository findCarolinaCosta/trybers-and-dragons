import Race from './Race';

class Orc extends Race {
  private _maxLifePoints: number;
  static instanceOrc = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);

    this._maxLifePoints = 74;
    Orc.instanceOrc += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Orc.instanceOrc;
  }
}

export default Orc;