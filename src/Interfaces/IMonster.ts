import { SimpleFighter } from '../Fighter';

export default interface IMonster {
  lifePoints: number;
  strength: number;
  receiveDamage(attackPoints: number): number;
  attack(enemy: SimpleFighter): void;
}