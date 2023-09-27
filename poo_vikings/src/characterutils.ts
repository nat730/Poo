import { Archer } from './archer';
import { Chevalier } from './chevalier';
import { Wizard } from './magicien';
import { Viking } from './viking';
import { Voleur } from './voleur';
import { CharacterType } from './CharacterType';

export function getJobFromString(job: string): CharacterType | null {
   if(!job) {
       return null;
   }
   else if(job === 'Viking') {
         return new Viking();
    }
    else if(job === 'Archer') {
        return new Archer();
    }
    else if(job === 'Chevalier') {
        return new Chevalier();
    }
    else if(job === 'Magicien') {
        return new Wizard();
    }
    else if(job === 'Voleur'){
        return new Voleur()
    }
    else {
        return null;
    }
}

export function FormatJobInput(job: string): string {
    const formatted = job.trim();  // Supprime les espaces au début et à la fin
    return formatted.charAt(0).toUpperCase() + formatted.slice(1).toLowerCase();
}
