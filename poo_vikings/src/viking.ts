import { Arme } from "./arme";

export class Viking {
    nom: string;
    sante: number;
    force: number;
    defense: number;
    defenseBinaire: number;
    arme: Arme;
    santeMax: number;

    constructor(nom: string, sante: number, force: number, defense: number, defenseBinaire: number, arme: Arme) {
        this.nom = nom;
        this.sante = sante;
        this.force = force;
        this.defense = defense;
        this.defenseBinaire = defenseBinaire;
        this.arme = arme;
        this.santeMax = sante;
    }
}
