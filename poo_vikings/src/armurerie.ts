import { Arme } from "./arme";
import { Armor } from "./armure";
export class Armurerie {
    static armes: Arme[] = [
        new Arme("Épée courte", 5),
        new Arme("Hache de guerre", 8),
        new Arme("Marteau de guerre", 10),
        new Arme("Arc court", 6),
        new Arme("Lance", 7),
        new Arme("Épée longue", 9),
        new Arme("Hache à deux mains", 12),
        new Arme("Dague", 3),
        new Arme("Fléau d'armes", 11),
        new Arme("Lame de sang", 7),
        new Arme("Épée rouillée", 2),
        new Arme("Gourdin en bois", 3),
        new Arme("Dague ébréchée", 2),
        new Arme("Arc en mauvais état", 4),
        new Arme("Hache émoussée", 3),
        new Arme("Poignard usé", 2),
        new Arme("Fléchette empoisonnée", 1),
        new Arme("Lame ébréchée", 3),
        new Arme("Massue en bois", 2),
        new Arme("L'Épée maudite", 1),
        new Arme("Marteau de Thor", 20),
        new Arme("Lame de l'Enfer", 18),
        new Arme("Arc de l'Apocalypse", 22),
        new Arme("Hache de la Destruction", 24),
        new Arme("Épée Excalibur", 21),
        new Arme("Lance du Destin", 19),
        new Arme("Glaive de la Puissance", 23),
        new Arme("Masse Sismique", 25),
        new Arme("Dague de l'Ombre", 20),
        new Arme("Flèche de la Foudre", 22),
    ]
        static armure : Armor[] = [
            new Armor("Casque en cuir", 1,"tete"),
            new Armor("Casque en fer", 2,"tete"),
            new Armor("Casque en acier", 3,"tete"),
            new Armor("Casque en or", 4,"tete"),
            new Armor("Casque en diamant", 5,"tete"),
            new Armor("Plastron en cuir", 2,"corps"),
            new Armor("Plastron en fer", 4,"corps"),
            new Armor("Plastron en acier", 6,"corps"),
            new Armor("Plastron en or", 8,"corps"),
            new Armor("Plastron en diamant", 10,"corps"),
            new Armor("Jambières en cuir", 1,"jambes"),
            new Armor("Jambières en fer", 2,"jambes"),
            new Armor("Jambières en acier", 3,"jambes"),
            new Armor("Jambières en or", 4,"jambes"),
            new Armor("Jambières en diamant", 5,"jambes"),
            new Armor("Bottes en cuir", 1,"pieds"),
            new Armor("Bottes en fer", 2,"pieds"),
            new Armor("Bottes en acier", 3,"pieds"),
            new Armor("Bottes en or", 4,"pieds"),
            new Armor("Bottes en diamant", 5,"pieds"),
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
