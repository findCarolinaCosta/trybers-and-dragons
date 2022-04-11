import Race from './Race';

class Elf extends Race {
  private _maxLifePoints: number;
  static instantiatedDwarfs = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);

    this._maxLifePoints = 99;
    Elf.instantiatedDwarfs += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Elf.instantiatedDwarfs;
  }
}

export default Elf;