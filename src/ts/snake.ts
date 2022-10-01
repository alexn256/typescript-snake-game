import {canvas, context, cell} from "./app";
import {Score} from "./score";
import {Berry} from "./berry";

export class Snake {

    public dx: number;
    public dy: number;

    private x: number;
    private y: number;
    private talsNum: number;
    private tails: Item[];
    private score: Score;

    constructor(score: Score) {
        this.x = 160;
        this.y = 160;
        this.dx = cell;
        this.dy = 0;
        this.talsNum = 3;
        this.tails = new Array<Item>();
        this.score = score;
    }

    left() {
        this.dx = -cell;
        this.dy = 0;
    }

    right() {
        this.dx = cell;
        this.dy = 0;
    }

    down() {
        this.dy = cell;
        this.dx = 0;
    }

    up() {
        this.dy = -cell;
        this.dx = 0;
    }

    update(berry: Berry) {
        this.x += this.dx;
        this.y += this.dy;
        if (this.x < 0) {
            this.x = canvas.width - cell;
        } else if (this.x >= canvas.width) {
            this.x = 0;
        }
        if (this.y < 0) {
            this.y = canvas.height - cell;
        } else if (this.y >= canvas.height) {
            this.y = 0;
        }
        this.tails.unshift({x: this.x, y: this.y});
        if (this.tails.length > this.talsNum) {
            this.tails.pop();
        }
        this.tails.forEach((item: Item, index: number) => {
            if (item.x === berry.x && item.y === berry.y) {
                this.talsNum++;
                this.score.inc();
                berry.randomPosition();
            }
            for (let i = index + 1; i < this.tails.length; i++) {
                if (item.x == this.tails[i].x && item.y == this.tails[i].y) {
                    this.refresh();
                    this.score.refresh();
                    berry.randomPosition();
                }
            }
        });
    }

    draw() {
        this.tails.forEach(function (el: Item, index: number) {
            context.fillStyle = '#76D7C4';
            if (index == 0) {
                context.fillRect(el.x, el.y, cell, cell);
            } else {
                context.fillRect(el.x + 1, el.y + 1, cell - 2, cell - 2);
            }
        });
    }

    refresh() {
        this.x = 160;
        this.y = 160;
        this.dx = cell;
        this.dy = 0;
        this.tails = new Array();
        this.talsNum = 3;
    }
}

type Item = {
    x: number;
    y: number;
}