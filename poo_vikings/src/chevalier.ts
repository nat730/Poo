import { CharacterType } from "./CharacterType";

export class Chevalier extends CharacterType {

    private _bouclier: boolean;


    constructor() {
        super("Chevalier", 40, 5, 1, 1, 5, 3);
        this._bouclier = true;

    }

    public get bouclier(): boolean {
        return this._bouclier;
    }
    public set bouclier(value: boolean) {
        this._bouclier = value;
    }
}

