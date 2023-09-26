export class Spell {
    constructor(public name: string, public manaCost: number, public damage?: number,public heal?: number, public protection?: number) {
    }

    get getName() {
        return this.name;
    }

    get getDamage() {
        return this.damage;
    }

    get getManaCost() {
        return this.manaCost;
    }

    set setName(name: string) {
        this.name = name;
    }

    set setDamage(damage: number) {
        this.damage = damage;
    }

    set setManaCost(manaCost: number) {
        this.manaCost = manaCost;
    }

    get getHeal() {
        return this.heal;
    }

    set setHeal(heal: number) {
        this.heal = heal;
    }

    get getProtection() {
        return this.protection;
    }

    set setProtection(protection: number) {
        this.protection = protection;
    }
}