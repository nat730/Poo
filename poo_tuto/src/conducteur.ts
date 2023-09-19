    import {Car} from './car'
    
    export class Conducteur {
    public nom: String;
    public prenom: String;
    public cars: Car[];
  
    constructor(nom: string, prenom: string, cars: Car[]) {
      this.nom = nom;
      this.prenom = prenom;
      this.cars = cars;
    }
  
    crasher(index:number): void {
      this.cars[index].crasher()
    }
  }