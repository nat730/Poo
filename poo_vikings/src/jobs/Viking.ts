import { Character } from "../Character";
import { CharacterType } from "../CharacterType";

export class Viking extends CharacterType {

    constructor() {
        super("Viking", 25, 4, 2, 0, 0, 8);
    }

    triggerBeforeBattle(character: Character) {
    }
    triggerBeforeAttack(character: Character) {
    }
    triggerAttack(character: Character, defender: Character,) {
        console.log('damages before hit on viking', character.TakeDamage);
        
        const pointsDeVieVoles = Math.floor(character.TakeDamage * 0.15);
        let pointdemanaVoles = Math.floor(character.TakeDamage * 0.03);
        console.log(`${character.nom} vole ${pointsDeVieVoles} points de vie et ${pointdemanaVoles} points de mana.`);
        console.log(`${character.nom} a maintenant ${character.sante} points de vie et ${character.mana} points de mana.`);

        if (pointdemanaVoles > defender.mana) {
            defender.mana = 0;
        }

        if (pointdemanaVoles < 1) {
            pointdemanaVoles = 1;
        }

        defender.mana -= pointdemanaVoles;

        if (character.sante < character.santeMax) {
            character.sante += pointsDeVieVoles;
        }

        if (character.mana < character.manaMax) {
            character.mana += pointdemanaVoles;
        }
        
    }
  
    triggerTurnEnd(character: Character,damage: number) {
        character.latestDamage = damage
    }
}    

    



