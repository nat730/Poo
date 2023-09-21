export class Armor{

    name: string;
    defense: number;
    defenseBinaire: number;
    type: string;
    constructor(name: string, defense: number, defenseBinaire: number, type: string){
        this.name = name;
        this.defense = defense;
        this.defenseBinaire = defenseBinaire;
        this.type = type;
    }
} 