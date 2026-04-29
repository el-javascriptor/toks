// this is the main file, wrapping everything together.

import { drawCircle, RGBColor, initCanvas } from "./graphics.js"
import { Stats, Tok } from "./toks.js"

const toks: Tok[] = [];
let drw: CanvasRenderingContext2D;
let timeStamp: number = 0;
let settings: Stats;

function main() {
    let canvas = document.querySelector("#canvas") as HTMLCanvasElement;

    if (canvas) {
        drw = initCanvas(canvas)!;

        let color = new RGBColor(100, 150, 255);

        drawCircle(drw, 100, 100, 5, color);

        settings = {
            canvas_width: canvas.width,
            canvas_height: canvas.height,
            wrap: true,
            drw: drw
        }

        for (let i = 0; i < 500; i++) {

            const tok = new Tok(settings,
                random(0, settings.canvas_width),
                random(0, settings.canvas_height),
                new RGBColor(100, 150, 255,),
                random(-0.5, 0.5),
                random(-0.5, 0.5)

            );

            toks.push(tok);
        }

        update();
    }
    // do stuff
}

function update() {
    if (Date.now() - timeStamp >= 1) {

        timeStamp = Date.now();

        drw.fillStyle = "rgba(0,20,42,0.08)";

        drw.fillRect(0, 0, settings.canvas_width, settings.canvas_height);

        for (const tok of toks) {

            tok.update(toks);
            tok.draw();
        }
    }

    requestAnimationFrame(update);
}

function random(lower: number, upper: number): number {
    return Math.random() * (upper - lower) + lower;
}

window.addEventListener("DOMContentLoaded", () => main());
