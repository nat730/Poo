import {Joueur} from "./Joueur";
export class Team {
    name: string;
    J1: Joueur;
    J2: Joueur;
    
    constructor(name: string, J1: Joueur, J2: Joueur) {
        this.name = name;
        this.J1 = J1;
        this.J2 = J2;
    }

    affichernbrjoueurs() {
        console.log("Les équipes sont composée de 2 joueurs");        
    }
}