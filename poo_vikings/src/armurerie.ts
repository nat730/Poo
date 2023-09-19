import { Arme } from "./arme";
export class Armurerie {
    static armes: Arme[] = [
        new Arme("Épée courte", 5,false),
        new Arme("Hache de guerre", 8,false),
        new Arme("Marteau de guerre", 10,false),
        new Arme("Arc court", 6,false),
        new Arme("Lance", 7,false),
        new Arme("Épée longue", 9,false),
        new Arme("Hache à deux mains", 12,false),
        new Arme("Dague", 3,false),
        new Arme("Fléau d'armes", 11,false),
        new Arme("Lame de sang", 7,true),
        new Arme("Épée rouillée", 2,false),
        new Arme("Gourdin en bois", 3,false),
        new Arme("Dague ébréchée", 2,false),
        new Arme("Arc en mauvais état", 4,false),
        new Arme("Hache émoussée", 3,false),
        new Arme("Poignard usé", 2,false),
        new Arme("Fléchette empoisonnée", 1,false),
        new Arme("Lame ébréchée", 3,false),
        new Arme("Massue en bois", 2,false),
        new Arme("L'Épée maudite", 1,false),
        new Arme("Marteau de Thor", 20,false),
        new Arme("Lame de l'Enfer", 18,false),
        new Arme("Arc de l'Apocalypse", 22,false),
        new Arme("Hache de la Destruction", 24,false),
        new Arme("Épée Excalibur", 21,false),
        new Arme("Lance du Destin", 19,false),
        new Arme("Glaive de la Puissance", 23,false),
        new Arme("Masse Sismique", 25,false),
        new Arme("Dague de l'Ombre", 20,false),
        new Arme("Flèche de la Foudre", 22,false),
    ];


    static choisirArmeAleatoire(): Arme {
        const indexAleatoire = Math.floor(Math.random() * this.armes.length);
        return this.armes[indexAleatoire];
    }
}
