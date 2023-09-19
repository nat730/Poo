import { Viking } from './viking';
export class Arme {
    nom: string;
    degats: number;
    volDeVie: boolean;

    constructor(nom: string, degats: number, volDeVie: boolean) {
        this.nom = nom;
        this.degats = degats;
        this.volDeVie = volDeVie;
    } 

    VdV(viking: Viking) {
        if (this.volDeVie && viking.sante > 0 && viking.sante < viking.santeMax) {
            const pointsDeVieVoles = this.degats * 0.13;
            viking.sante += pointsDeVieVoles;
            if (viking.sante > 100) {
                viking.sante = 100;
            }
            console.log(`${this.nom} vole ${pointsDeVieVoles} points de vie à ${viking.nom}.`);
        }
    }
}

