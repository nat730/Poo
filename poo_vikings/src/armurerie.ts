import { Arme } from "./arme";
import { Armor } from "./armure";
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
    ]
        static armure : Armor[] = [
            new Armor("Casque en cuir", 1,1,"tete"),
            new Armor("Casque en fer", 2,2,"tete"),
            new Armor("Casque en acier", 3,3,"tete"),
            new Armor("Casque en or", 4,4,"tete"),
            new Armor("Casque en diamant", 5,5,"tete"),
            new Armor("Plastron en cuir", 2,2,"corps"),
            new Armor("Plastron en fer", 4,4,"corps"),
            new Armor("Plastron en acier", 6,6,"corps"),
            new Armor("Plastron en or", 8,8,"corps"),
            new Armor("Plastron en diamant", 10,10,"corps"),
            new Armor("Jambières en cuir", 1,1,"jambes"),
            new Armor("Jambières en fer", 2,2,"jambes"),
            new Armor("Jambières en acier", 3,3,"jambes"),
            new Armor("Jambières en or", 4,4,"jambes"),
            new Armor("Jambières en diamant", 5,5,"jambes"),
            new Armor("Bottes en cuir", 1,1,"pieds"),
            new Armor("Bottes en fer", 2,2,"pieds"),
            new Armor("Bottes en acier", 3,3,"pieds"),
            new Armor("Bottes en or", 4,4,"pieds"),
            new Armor("Bottes en diamant", 5,5,"pieds"),
    ];


    static choisirArmeAleatoire(): Arme {
        const indexAleatoire = Math.floor(Math.random() * this.armes.length);
        return this.armes[indexAleatoire];
    }

    static choisirArmureAleatoire(): Armor {
        const indexAleatoire = Math.floor(Math.random() * this.armure.length);
        return this.armure[indexAleatoire];
    }
}
