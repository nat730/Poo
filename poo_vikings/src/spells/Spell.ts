import { Character } from '../Character';

export abstract class Spell {

    private _name: string;

    constructor(name: string) {
        this._name = name;
    }

    public abstract canCast(caster : Character): boolean;

    public abstract cast(caster : Character, target : Character) : any

    get name() {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

}
