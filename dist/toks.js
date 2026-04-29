import { drawCircle } from "./graphics.js";
const DETECTION_RADIUS_CONSTANT = 1;
const MULTIPLIER = 10;
const CM = 20;
class Tok {
    x;
    y;
    vx;
    vy;
    color;
    settings;
    type;
    constructor(settings, x, y, color, vx = 1, vy = 1) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.color = color;
        this.settings = settings;
        this.type = (this.color.r > 128);
    }
    draw() {
        drawCircle(this.settings.drw, this.x, this.y, 3, this.color);
    }
    update(other_toks) {
        this.x += this.vx;
        this.y += this.vy;
        if (this.settings.wrap) {
            if (this.x >= this.settings.canvas_width)
                this.x = 1;
            if (this.y >= this.settings.canvas_height)
                this.y = 1;
            if (this.x <= 0)
                this.x = this.settings.canvas_width - 1;
            if (this.y <= 0)
                this.y = this.settings.canvas_height - 1;
        }
        else {
            if (this.x >= this.settings.canvas_width) {
                this.x = this.settings.canvas_width - 1;
                this.vx *= -1;
            }
            ;
            if (this.y >= this.settings.canvas_height) {
                this.y = this.settings.canvas_height - 1;
                this.vy *= -1;
            }
            ;
            if (this.x <= 0) {
                this.x = 1;
                this.vx *= -1;
            }
            ;
            if (this.y <= 0) {
                this.y = 1;
                this.vy *= -1;
            }
            ;
            //
        }
        let total_vx = 0;
        let total_vy = 0;
        let total_red = 0;
        let total_green = 0;
        let total_blue = 0;
        for (const tok of other_toks) {
            const distance = this.computeDistance(tok.x, tok.y);
            if (true) {
                total_vx += DETECTION_RADIUS_CONSTANT * tok.vx * (1 / (distance));
                total_vy += DETECTION_RADIUS_CONSTANT * tok.vy * (1 / (distance));
            }
            total_red += (this.color.r - tok.color.r) * (1 / distance);
            total_green += (this.color.g - tok.color.g) * (1 / distance);
            total_blue += (this.color.b - tok.color.b) * (1 / distance);
        }
        let previous_magnitude = Math.sqrt(this.vx ** 2 + this.vy ** 2);
        let prev_cm = Math.sqrt(this.color.r ** 2 + this.color.g ** 2 + this.color.b ** 2);
        this.vx += total_vx / other_toks.length * MULTIPLIER;
        this.vy += total_vy / other_toks.length * MULTIPLIER;
        // this.color.r += total_red / other_toks.length * CM;
        // this.color.g += total_green / other_toks.length * CM;
        // this.color.b += total_blue / other_toks.length * CM;
        let new_magnitude = Math.sqrt(this.vx ** 2 + this.vy ** 2);
        // let new_cm = Math.sqrt(this.color.r ** 2 + this.color.g ** 2 + this.color.b ** 2);
        this.vx /= new_magnitude;
        this.vy /= new_magnitude;
        this.vx *= previous_magnitude;
        this.vy *= previous_magnitude;
        // this.color.r *= prev_cm / new_cm;
        // this.color.g *= prev_cm / new_cm;
        // this.color.b *= prev_cm / new_cm;
    }
    computeDistance(x2, y2) {
        return Math.sqrt(x2 * x2 + y2 * y2);
    }
}
export { Tok };
//# sourceMappingURL=toks.js.map