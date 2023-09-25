import { CharacterType } from "./CharacterType";

export class Viking extends CharacterType {
    private _volDeVie: boolean;

    constructor() {
        super("Viking", 25, 4, 2, 0, 0, 8);
        this._volDeVie = true;
    }

    get volDeVie(): boolean {
        return this._volDeVie;
    }

    set volDeVie(value: boolean) {
        this._volDeVie = value;
    }

}


