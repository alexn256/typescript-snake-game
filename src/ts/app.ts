import {Game} from "./game";

export let canvas = <HTMLCanvasElement> document.querySelector('.game-board');
export let context = <CanvasRenderingContext2D> canvas.getContext('2d');
export let score = <Element> document.querySelector('.score');
export const cell = 10;

const game: Game = new Game();

document.addEventListener("keydown", (e: KeyboardEvent) => {
    if (e.code == "KeyW" && game.snake.dy !== cell) {
        game.snake.up();
    } else if (e.code == "KeyA" && game.snake.dx !== cell) {
        game.snake.left();
    } else if (e.code == "KeyS" && game.snake.dy !== -cell) {
        game.snake.down();
    } else if (e.code == "KeyD" && game.snake.dx !== -cell) {
        game.snake.right();
    }
});