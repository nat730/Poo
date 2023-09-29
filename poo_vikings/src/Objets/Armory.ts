import { Weapon } from "./Weapon";
import { Armor } from "./Armor";
import { Item } from "./Item";

export class Armurerie implements Item {
    static _name: string;
    static _price: number;
    static _weight: number;
    static _category: string;
    static armureParCategorie: { [category: string]: Armor[] } = {};


    constructor(name: string, price: number, weight: number, category: string) {
        Armurerie._name = name;
        Armurerie._price = price;
        Armurerie._weight = weight;
        Armurerie._category = category;
    }

    static armes: Weapon[] = [
        new Weapon("Épée courte", 5, 10, 2, "arme"),
        new Weapon("Hache de guerre", 8, 15, 3, "arme"),
        new Weapon("Marteau de guerre", 10, 20, 4, "arme"),
        new Weapon("Arc court", 6, 12, 2, "arme"),
        new Weapon("Lance", 7, 14, 3, "arme"),
        new Weapon("Épée longue", 9, 18, 4, "arme"),
        new Weapon("Hache à deux mains", 12, 24, 5, "arme"),
        new Weapon("Dague", 3, 6, 1, "arme"),
        new Weapon("Fléau d'armes", 11, 22, 4, "arme"),
        new Weapon("Lame de sang", 7, 14, 3, "arme"),
        new Weapon("Épée rouillée", 2, 4, 1, "arme"),
        new Weapon("Gourdin en bois", 3, 6, 1, "arme"),
        new Weapon("Dague ébréchée", 2, 4, 1, "arme"),
        new Weapon("Arc en mauvais état", 4, 8, 2, "arme"),
        new Weapon("Hache émoussée", 3, 6, 1, "arme"),
        new Weapon("Poignard usé", 2, 4, 1, "arme"),
        new Weapon("Fléchette empoisonnée", 1, 2, 1, "arme"),
        new Weapon("Lame ébréchée", 3, 6, 1, "arme"),
        new Weapon("Massue en bois", 2, 4, 1, "arme"),
        new Weapon("L'Épée maudite", 1, 2, 1, "arme"),
        new Weapon("Marteau de Thor", 20, 25, 5, "arme"),
        new Weapon("Lame de l'Enfer", 18, 23, 5, "arme"),
        new Weapon("Arc de l'Apocalypse", 22, 27, 5, "arme"),
        new Weapon("Hache de la Destruction", 24, 29, 5, "arme"),
        new Weapon("Épée Excalibur", 21, 26, 5, "arme"),
        new Weapon("Lance du Destin", 19, 24, 5, "arme"),
        new Weapon("Glaive de la Puissance", 23, 28, 5, "arme"),
        new Weapon("Masse Sismique", 25, 30, 5, "arme"),
        new Weapon("Dague de l'Ombre", 20, 25, 5, "arme"),
        new Weapon("Flèche de la Foudre", 22, 27, 5, "arme"),
    ]
    static armure: Armor[] = [
        new Armor("Casque en cuir", 1, 2, 5, "tete"),
        new Armor("Casque en fer", 2, 5, 10, "tete"),
        new Armor("Casque en acier", 3, 10, 15, "tete"),
        new Armor("Casque en or", 4, 15, 20, "tete"),
        new Armor("Casque en diamant", 5, 20, 25, "tete"),
        new Armor("Plastron en cuir", 2, 5, 10, "corps"),
        new Armor("Plastron en fer", 3, 10, 15, "corps"),
        new Armor("Plastron en acier", 4, 15, 20, "corps"),
        new Armor("Plastron en or", 5, 20, 25, "corps"),
        new Armor("Plastron en diamant", 6, 25, 30, "corps"),
        new Armor("Jambières en cuir", 1, 2, 5, "jambes"),
        new Armor("Jambières en fer", 2, 5, 10, "jambes"),
        new Armor("Jambières en acier", 3, 10, 15, "jambes"),
        new Armor("Jambières en or", 4, 15, 20, "jambes"),
        new Armor("Jambières en diamant", 5, 20, 25, "jambes"),
        new Armor("Bottes en cuir", 1, 2, 5, "pieds"),
        new Armor("Bottes en fer", 2, 5, 10, "pieds"),
        new Armor("Bottes en acier", 3, 10, 15, "pieds"),
        new Armor("Bottes en or", 4, 15, 20, "pieds"),
        new Armor("Bottes en diamant", 5, 20, 25, "pieds"),
    ];

    static initArmureParCategorie(): void {
        Armurerie.armure.forEach(armure => {
            if (!Armurerie.armureParCategorie[armure.category]) {
                Armurerie.armureParCategorie[armure.category] = [];
            }
            Armurerie.armureParCategorie[armure.category].push(armure);
        });
    }

    static choisirArmeAleatoire(): Weapon {
        const indexAleatoire = Math.floor(Math.random() * Armurerie.armes.length);
        return Armurerie.armes[indexAleatoire];
    }

    static choisirArmureAleatoire(): Armor[] {
        if (Object.keys(Armurerie.armureParCategorie).length === 0) {
            Armurerie.initArmureParCategorie();
        }

        const armuresAleatoires: Armor[] = [];

        for (const category in Armurerie.armureParCategorie) {
            const armuresDeLaCategorie = Armurerie.armureParCategorie[category];
            const indexAleatoire = Math.floor(Math.random() * armuresDeLaCategorie.length);
            armuresAleatoires.push(armuresDeLaCategorie[indexAleatoire]);
        }

        return armuresAleatoires;
    }

    get name(): string {
        return Armurerie._name;
    }

    get price(): number {
        return Armurerie._price;
    }

    get weight(): number {
        return Armurerie._weight;
    }

    get category(): string {
        return Armurerie._category;
    }
}
