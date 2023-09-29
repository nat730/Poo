import { Character } from "../Character";
import { Item } from "./Item";

export class Consommable implements Item {
    private _name: string;
    private _price: number;
    private _effect: string;
    private _effectPower: string;
    private _weight: number;
    private _category: string;
    static consommables: Consommable[] = [
        new Consommable("mini Potion de soin", 5, "Soin", "15", 0.5, "Consommable"),
        new Consommable("Potion de soin", 10, "Soin", "45", 1, "Consommable"),
        new Consommable("Grande Potion de soin", 20, "Soin", "100", 2, "Consommable"),
        new Consommable("mini Potion de mana", 10, "Mana", "15", 0.5, "Consommable"),
        new Consommable("Potion de mana", 20, "Mana", "45", 1, "Consommable"),
        new Consommable("Grande Potion de mana", 40, "Mana", "100", 2, "Consommable")
    ];

    constructor(name: string, price: number, effect: string, effectPower: string, weight: number, category: string) {
        this._name = name;
        this._price = price;
        this._effect = effect;
        this._effectPower = effectPower;
        this._weight = weight;
        this._category = category;
    }


    static choisirPotionAleatoire(): Consommable {
        const indexAleatoire = Math.floor(Math.random() * Consommable.consommables.length);
        return Consommable.consommables[indexAleatoire];
    }

    get name(): string {
        return this._name;
    }

    get price(): number {
        return this._price;
    }

    get effect(): string {
        return this._effect;
    }

    get effectPower(): string {
        return this._effectPower;
    }

    get weight(): number {
        return this._weight;
    }

    get category(): string {
        return this._category;
    }

    set category(value: string) {   
        this._category = value;
    }
}
