import { Team } from "./Team";

export class Match {
    Team1: Team;
    Team2: Team;
    scoreT1: number = 0;
    scoreT2: number = 0;

    constructor(Team1: Team, Team2: Team) {
        this.Team1 = Team1;
        this.Team2 = Team2;
    }

    manageMatch() {
        while (this.scoreT1 < 20 && this.scoreT2 < 20) {
            let random = Math.floor(Math.random() * 2);
            if (random === 0) {
                this.scoreT1++;
            } else {
                this.scoreT2++;
            }
        }
        this.displayMatchResult();
        const winner1 = this.getWinner();
        console.log(`Le gagnant de ce match est ${winner1.name}`);
    }

    getWinner(): Team {
        return this.scoreT1 > this.scoreT2 ? this.Team1 : this.Team2;
    }

    getLooser(): Team {
        return this.scoreT1 < this.scoreT2 ? this.Team1 : this.Team2;
    }

    displayMatchResult() {
        console.log(`Match result: ${this.Team1.name} ${this.scoreT1} - ${this.Team2.name} ${this.scoreT2}`);
        const winner = this.getWinner();
        console.log(`Winner: ${winner.name}`);
    }
}
