export class Engine {

    public update: () => void;
    public draw: () => void;
    public step: number;
    public maxStep: number;
    public cell: number;

    constructor(update: () => void, draw: () => void) {
        this.update = update;
        this.draw = draw;
        this.step = 0;
        this.maxStep = 5;
        this.cell = 10;
        this.animate = this.animate.bind(this);
        this.animate();
    }

    animate() {
        requestAnimationFrame(this.animate);
        if (++this.step < this.maxStep) {
            return;
        }
        this.step = 0;
        this.update();
        this.draw();
    }
}