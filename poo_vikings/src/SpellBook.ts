import { Character } from './Character';
import { Spell } from './Spell';
import { FireBall } from './FireBall';
import { Protect } from './Protect';
import { Heal } from './Heal';

export class SpellBook {
    private spells: Spell[] = [];

    constructor(character: Character) {
        const availableSpells: (new (character: Character) => Spell)[] = [FireBall, Protect, Heal];
        const randomIndex = Math.floor(Math.random() * availableSpells.length);
        const selectedSpellConstructor = availableSpells[randomIndex];
        this.spells.push(new selectedSpellConstructor(character));
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
