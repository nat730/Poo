import { Team } from "./Team";
import { Joueur } from "./Joueur";
import { Match } from "./Match";
import { Tournament } from "./Tournament";

let J1 = new Joueur("Durant", "Kevin", 37);
let J2 = new Joueur("Wembi", "Victor", 35);
let J3 = new Joueur("Lebron", "James", 36);
let J4 = new Joueur("Jordan", "Michael", 58);
let J5 = new Joueur("Duncan", "Tim", 44);
let J6 = new Joueur("Garnett", "Kevin", 45);    
let J7 = new Joueur("Bryant", "Kobe", 43);
let J8 = new Joueur("Curry", "Stephen", 33);

let T1 = new Team("equipe1",J1, J2);
let T2 = new Team("equipe2",J3, J4);
let T3 = new Team("equipe3",J5, J6);
let T4 = new Team("equipe4",J7, J8);
T1.affichernbrjoueurs();


// 1 - Créer un match de basket entre deux équipes de deux joueurs

let match1 = new Match(T1, T2);
match1.manageMatch();

// 2 - Créer un match de basket entre deux équipes de deux joueurs

let Tournament1 = new Tournament(T1, T2, T3, T4);
Tournament1.manageTournament();