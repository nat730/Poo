  export class Car {
      private _couleur: String;
      public etat: number;
    
      constructor(couleur: String, etat: number) {
        this._couleur = couleur;
        this.etat = etat;
      }

      
      public get couleur() : String {
          return this._couleur
      }
      crasher(): void {
          this.etat *= 0.8;
        }
    
    }

    export const cars: Car[] = [
      new Car('rouge', 100),
      new Car('bleu', 61),
      new Car('vert', 46),
  ];
