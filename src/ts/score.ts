import { score } from "./app";


export class Score {

    private scores: number;

    constructor() {
        this.scores = 0;
        this.draw();
    }

    draw() {
        score.innerHTML = this.scores.toString();
    }


    inc() {
        this.scores++;
        this.draw();
    }

    refresh() {
        this.scores = 0;
        this.draw();
    }
}