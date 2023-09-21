export class Armor {
    private _name: string;   
    private _defense: number;
    private _type: string;

    constructor(name:string, defense: number, type: string) {
        this._name = name;
        this._defense = defense;
        this._type = type;
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

    get type(): string {
        return this._type;
    }

    set type(value: string) {
        this._type = value;
    }
}