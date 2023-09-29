import { Bowman } from './jobs/Bowman';
import { Knight } from './jobs/Knight';
import { Wizard } from './jobs/Wizard';
import { Viking } from './jobs/Viking';
import { Thief } from './jobs/Thief';
import { CharacterType } from './CharacterType';

export function getJobFromString(job: string): CharacterType | null {
   if(!job) {
       return null;
   }
   else if(job === 'Viking') {
         return new Viking();
    }
    else if(job === 'Archer') {
        return new Bowman();
    }
    else if(job === 'Chevalier') {
        return new Knight();
    }
    else if(job === 'Magicien') {
        return new Wizard();
    }
    else if(job === 'Voleur'){
        return new Thief()
    }
    else {
        return null;
    }
}

export function FormatJobInput(job: string): string {
    const formatted = job.trim();  // Supprime les espaces au début et à la fin
    return formatted.charAt(0).toUpperCase() + formatted.slice(1).toLowerCase();
}
