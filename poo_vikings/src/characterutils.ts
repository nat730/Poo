import { CharacterType } from './CharacterType';

export function getJobFromString(job: string): CharacterType | null {
    job = FormatJobInput(job);

    try {
        const classReference = eval(job);
        if (typeof classReference === 'function') {
            return new classReference();
        } else {
            console.error(`La classe "${job}" n'existe pas.`);
            return null;
        }
    } catch (error) {
        console.error(`Une erreur s'est produite lors de la création de l'instance : ${error}`);
        return null;
    }
}

function FormatJobInput(job: string): string {
    if (!job) {
        return job;
    }
    const formatted = job.charAt(0).toUpperCase() + job.slice(1).toLowerCase();
    return formatted;
}
