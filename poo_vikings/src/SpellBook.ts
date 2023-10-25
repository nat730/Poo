import { Spell } from "./spells/Spell";
import { FireBall } from "./spells/FireBall";
import { Character } from "./Character";
import { Heal } from "./spells/Heal";
import { Protect } from "./spells/Protect";

const AVAILABLE_SPELLS =  [new FireBall(), new Heal(), new Protect()];

export class SpellBook {
    private spells: Spell[] = [];

    constructor() {
        const randomIndex = Math.floor(Math.random() * AVAILABLE_SPELLS.length);
        console.log('spell index', randomIndex);
        
        this.spells.push(AVAILABLE_SPELLS[randomIndex]);
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
