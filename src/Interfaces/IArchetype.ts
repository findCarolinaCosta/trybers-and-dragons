import { EnergyType } from '../Energy';

interface IArchetypeGetter {
  energyType: EnergyType
}

interface IArchetype extends IArchetypeGetter {
  name: string;
  special: number;
  cost: number;
}

export default IArchetype;