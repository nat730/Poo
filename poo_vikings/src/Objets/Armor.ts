import { Item } from "./Item";

export class Armor implements Item {
    private _name: string;
    private _defense: number;
    private _price: number;
    private _weight: number;
    private _category: string;

    constructor(name: string, defense: number, price: number, weight: number, category: string) {
        this._name = name;
        this._defense = defense;
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

    get defense(): number {
        return this._defense;
    }

    set defense(value: number) {
        this._defense = value;
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
