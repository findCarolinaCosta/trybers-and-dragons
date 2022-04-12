import Energy from '../Energy';
import SimpleFighter from './SimpleFighter';

export interface IFighterAttributes {
  lifePoints: number;
  strength: number;
  defense: number;
  energy?: Energy; 
}

interface Fighter extends IFighterAttributes {
  attack(enemy: IFighterAttributes | SimpleFighter): void;
  special(enemy: IFighterAttributes): void;
  levelUp(): void;
  receiveDamage(attackPoints: number): void;
}

export default Fighter;