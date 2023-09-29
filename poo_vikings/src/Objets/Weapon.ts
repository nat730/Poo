import { Item } from "./Item";

export class Weapon implements Item {
    private _name: string;
    private _degats: number;
    private _price: number;
    private _weight: number;
    private _category: string;

    constructor(name: string, defense: number, price: number, weight: number, category: string) {
        this._name = name;
        this._degats = defense;
        this._price = price;
        this._weight = weight;
        this._category = category;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get degats(): number {
        return this._degats;
    }

    set degats(value: number) {
        this._degats = value;
    }

    get category(): string {
        return this._category;
    }

    set category(value: string) {
        this._category = value;
    }

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        this._price = value;
    }

    get weight(): number {
        return this._weight;
    }

    set weight(value: number) {
        this._weight = value;
    }
}
