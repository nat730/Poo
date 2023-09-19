import { Team } from "./Team";
import { Match } from "./Match";

export class Tournament {
    Team1: Team;
    Team2: Team;
    Team3: Team;
    Team4: Team;

    constructor(Team1: Team, Team2: Team, Team3: Team, Team4: Team) {
        this.Team1 = Team1;
        this.Team2 = Team2;
        this.Team3 = Team3;
        this.Team4 = Team4;
    }

    manageTournament() {
        const match1 = new Match(this.Team1, this.Team2);
        match1.manageMatch();
        
        const match2 = new Match(this.Team3, this.Team4);
        match2.manageMatch();

        const winner1 = match1.getWinner();
        const winner2 = match2.getWinner();
        const looser1 = match1.getLooser();
        const looser2 = match2.getLooser();

        const finalMatch = new Match(winner1, winner2);
        finalMatch.manageMatch();

        const littleFinalMatch = new Match(looser1, looser2);
        littleFinalMatch.manageMatch();
        
        const winnerTournament = finalMatch.getWinner();
        const secondPlace = finalMatch.getLooser();
        const thirdPlace = littleFinalMatch.getWinner();
        const fourthPlace = littleFinalMatch.getLooser();

        console.log(`Le grand gagnant du tournoi est ${winnerTournament.name}`);
        console.log(`Le second est ${secondPlace.name}`);
        console.log(`Le troisième est ${thirdPlace.name}`);
        console.log(`Le quatrième est ${fourthPlace.name}`);
    }
}