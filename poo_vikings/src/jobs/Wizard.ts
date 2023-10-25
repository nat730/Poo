import { Character } from "../Character";
import { CharacterType } from "../CharacterType";
import { SpellBook } from '../SpellBook';
import { Spell } from '../spells/Spell';

export class Wizard extends CharacterType {

    private _latestDamage: number = 0;
    private _availableSpells: boolean[] | undefined;

    constructor() {
        super("Magicien", 5, 1, 1, 5, 45, 3);
        this._spellBook = new SpellBook();
        this._availableSpells = [];
    }

    castRandom(castable : boolean[]) : number{
        let index = Math.floor(Math.random() * castable.length)
        while (!castable[index]){
            index = Math.floor(Math.random() * castable.length)
        }
            
        return index
    }

    triggerBeforeBattle(character: Character) {
    }

    triggerBeforeAttack(character: Character) {
        let availableSpells = this._spellBook?.castableSpells(character);
        this._availableSpells = availableSpells 
    }

    triggerAttack(caster: Character, target: Character): void {
        if (this._availableSpells) {
            console.log(`${caster.nom} lance un sort !`);
            
            let index: number = this.castRandom(this._availableSpells);
            let spell: Spell = this._spellBook?.getSpells()[index]!;
            spell.cast(caster, target);
        }else{}
    }

    triggerTurnEnd(character: Character,damage: number) {
        const manaRegen = character.intelligence * 0.5;
            character.mana += manaRegen;
            if (character.mana > character.manaMax) {
                character.mana = character.manaMax;
            }
            console.log(`${character.nom} régénère ${manaRegen} points de mana.`);
            character.latestDamage = damage
        }
    
    public get availableSpells(): boolean[] | undefined {
        return this._availableSpells;
    }
    public set availableSpells(value: boolean[]) {
        this._availableSpells = value;
    }
}