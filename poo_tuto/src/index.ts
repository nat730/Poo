import { Car } from './car';
import { Conducteur } from './conducteur';

const lamborghini = new Car('rouge', 100);
const audi = new Car('blanche', 61);
const renaud = new Car('noire', 32);

const Thomas = new Conducteur('Laforge', 'Thomas', [lamborghini, audi, renaud]);

Thomas.crasher(0);

const voitureThomas = Thomas.cars[0];

console.log(
  "La voiture de couleur",voitureThomas.couleur,"est à",voitureThomas.etat,"% de durabilité"
);
