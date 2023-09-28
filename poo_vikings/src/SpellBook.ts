import { Spell } from "./spells/Spell";
import { FireBall } from "./spells/FireBall";
import { Character } from "./Character";
import { Heal } from "./spells/Heal";
import { Protect } from "./spells/Protect";


export class SpellBook {
    private spells: Spell[] = [];

    constructor() {
        const availableSpells =  [new FireBall(), new Heal(), new Protect()];
        const randomIndex = Math.floor(Math.random() * availableSpells.length);
        this.spells.push(availableSpells[randomIndex]);
    }

    public castableSpells(character : Character) : boolean[] {
        let castableSpell : boolean[] =[]
        this.spells.forEach((spell) => castableSpell.push(spell.canCast(character))        
        );

        return castableSpell;
    }



    addSpell(spell: Spell): void {
        this.spells.push(spell);
    }

    getSpells(): Spell[] {
        return this.spells;
    }

    getSpellByName(name: string): Spell | undefined {
        return this.spells.find((spell) => spell.name === name);
    }
}
