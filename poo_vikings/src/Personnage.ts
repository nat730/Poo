// ### Redéfinition des personnages
// Tous les personnages auront désormais :
// un nom, un niveau, d'un nombre de point d'expérience, un type, un nombre de points de vie (santé), une force, une vitesse, une intelligence, des points de mana (énergie magique) et un pourcentage de chance de coup critique.
// Les personnages auront aussi un équipement, qui leur donnera la capacité de porter des objets sur leur tête, leurs mains, leur torse et leur jambes.
// Les personnages, dans un premier temps, n'auront pas d'inventaire. Nous developperons cette fonctionalité plus tard
// ### Conventions de rédaction de code
// Tous les attibuts en privé et pour chaque attribut un getter (getAttr) et un setteur (setAttr)
// Une classe par fichier
// #### Héritage et les classes mères
// De base, chaque personnage démarre avec les caratéristiques suivantes :
// un nom vide, au niveau 1, 0 point d'expérience, aucun type, 50 points de vie, 10 de force, 10 de vitesse, 10 d'intelligence 50 points de mana et 2% de chance de coup critique.
// #### Les nouveaux Viking (refactoring)
// Modifier votre ancienne classe Viking pour faire correspondre l'ancienne classe viking aux nouvelles spécifications. Utiliser pour cela git pour valider votre travail.
// La capacité spéciale des nouveaux vikings est le vol de vie. Chacune de leurs attaques permet de récupérer 15% des dégats infligés en points de santé et 3% en points de mana
// À la création d'un personnage viking, il recoit un nom, +25 points de vie supplémentaires, +4 de force, +2 de vitesse, 0 d'intelligence 0 points de mana et +8% de chance de coup critique.
// ### Plusieurs nouveaux types de personnage
// Dans un premier temps, nous alors rajouter personnage de type archers, chevaliers, magiciens et voleurs
// Chacun de ses types de personnage aura des capacités particulières à utiliser lors des combats, comme les vikings
// #### Le type archer
// La capacité spéciale des archers et des archères est la pose de piège. Au début du combat, si le personnage est plus rapide que son adversaire alors le personnage peut poser un piège qui s'active à la première attaque de l'adversaire et inflige 250% des dégats d'une attaque normale
// À la création d'un personnage archer, il recoit un nom, +15 points de vie supplémentaires, +2 de force, +3 de vitesse, +1 d'intelligence 10 points de mana et +5% de chance de coup critique.
// #### Le type chevalier
// La capacité spéciale des chevaliers est l'utilisation de leur bouclier, ce sont d'ailleurs les seuls à pouvoir en utiliser un. Dès que le personnage recoit des dégats, il réduit les dégats subits de 25%, quelque soient les dégats reçus.
// À la création d'un personnage chevalier, il recoit un nom, +40 points de vie supplémentaires, +5 de force, +1 de vitesse, +1 d'intelligence 5 points de mana et +3% de chance de coup critique.
// #### Le type magicien
// La capacité spéciale des magiciens et des magiciennes est l'incantation et la récupération automatique de points de mana tous les tours.
// À tous les tours les personnages de type magicien récupère la moitié de leurs intelligence en points de mana. Les sorts se lancent automatiquement dans certaines conditions. Les magiciens et les magiciennes connaissent 1 sort à la création du personnage.
// À la création d'un personnage magicien, il recoit un nom, +5 points de vie supplémentaires, +1 de force, +1 de vitesse, +5 d'intelligence 45 points de mana et +0% de chance de coup critique.
// #### Livre de sorts
// Le livre de sort contient tous les sorts qu'un personnage de type magicien
// ##### Boule de feu
// Si le personnage possède plus de 55% de ses points de mana, alors, au lieu d'attaquer, il utilisera son sort de boule de feu qui permet de faire des dégats équivalents à 175% de sa valeur d'intelligence. Coût en points de mana : 35
// ##### Soins magiques
// Si le personnage possède moins de 25% de ses points de vie, alors, au lieu d'attaquer, il utilisera son sort de soins magiques qui lui permet de récupérer des points de vie équivalent à 75% de sa valeur d'intelligence. Coût en points de mana : 20
// ##### Protection magique
// Si le personnage a perdu plus de 15% de ses points de vie totaux au tour précedent, alors, au lieu d'attaquer, il utilisera son sort de protection magique qui lui permet de créer une barrière de protection dotée d'autant de point de vie que de points de mana investis. Coût en points de mana : 30% des points de mana actuels restant
// #### Le type voleur
// La capacité spéciale des voleurs et des voleuses est l'attaque surprise : lors d'un coup critique, les dégats infligés sont de 250% de la force du personnage. En plus, ces personnages peuvent réattaquer lors d'un coup critique.
// À tous les tours les personnages de type magicien récupère la moitié de leurs intelligence en points de mana. Les sorts se lancent automatiquement dans certaines conditions. Les magiciens et les magiciennes connaissent 1 sort à la création du personnage.
// À la création d'un personnage magicien, il recoit un nom, +5 points de vie supplémentaires, +1 de force, +1 de vitesse, +5 d'intelligence, 45 points de mana et +0% de chance de coup critique.
// ### Choix du type de personnage
// Vous devez maitenant faire en sorte que les utilisateurs et utilisatrices de votre site puissent choisir un type de personnage et soient en mesure de les nommer avant de lancer le combat
// ### Restucturer le dépôt
// Organiser votre dépôt pour que les différents types de personnages soient mis dans un dossier à part
// ### Ajouter le soin complet du personnage entre 2 combats

import { Arme } from "./arme";
import { Armor } from "./armure";

export class Character {
    // un nom, un niveau, d'un nombre de point d'expérience, un type, un nombre de points de vie (santé), une force, une vitesse, une intelligence, des points de mana (énergie magique) et un pourcentage de chance de coup critique.
    nom : string;
    niveau : number;
    experience : number;
    type : string;
    sante : number;
    force : number;
    vitesse : number;
    intelligence : number;
    mana : number;
    chanceCoupCritique : number;
    defense: number;
    defenseBinaire: number;
    arme: Arme;
    santeMax: number;
    armor: Armor;

    constructor(nom : string, niveau : number, experience : number, type : string, sante : number, force : number, vitesse : number, intelligence : number, mana : number, chanceCoupCritique : number, defense: number, defenseBinaire: number, arme: Arme, santeMax: number, equipement: string, armor: Armor) {
        this.nom = nom;
        this.niveau = niveau;
        this.experience = experience;
        this.type = type;
        this.sante = sante;
        this.force = force;
        this.vitesse = vitesse;
        this.intelligence = intelligence;
        this.mana = mana;
        this.chanceCoupCritique = chanceCoupCritique;
        this.defense = defense;
        this.defenseBinaire = defenseBinaire;
        this.arme = arme;
        this.santeMax = sante;
        this.armor = armor;
    }
}


