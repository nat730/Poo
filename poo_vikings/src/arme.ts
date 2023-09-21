import { Viking } from './viking';
export class Arme {
    private _nom: string;
    private _degats: number;

    constructor(nom: string, degats: number) {
        this._nom = nom;
        this._degats = degats;
    }

    get nom(): string {
        return this._nom;
    }

    set nom(value: string) {
        this._nom = value;
    }

    get degats(): number {
        return this._degats;
    }

    set degats(value: number) {
        this._degats = value;
    }

}

