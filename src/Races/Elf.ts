import Race from './Race';

class Elf extends Race {
  private _maxLifePoints: number;
  static instanceElf = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);

    this._maxLifePoints = 99;
    Elf.instanceElf += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Elf.instanceElf;
  }
}

export default Elf;