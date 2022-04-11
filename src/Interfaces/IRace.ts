interface IRaceGetter {
  maxLifePoints: number;
}

interface IRace extends IRaceGetter {
  name: string;
  dexterity: number;
}

export default IRace;