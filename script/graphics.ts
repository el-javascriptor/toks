// this function initializes a canvas to have the
// correct width and height
function initCanvas(canvas: HTMLCanvasElement): CanvasRenderingContext2D | null {

    // set canvas bounds
    const canvas_box = canvas.getBoundingClientRect();
    canvas.width = canvas_box.width;
    canvas.height = canvas_box.height;

    // return the drawing element
    return canvas.getContext("2d");
}

class RGBColor {

    public r: number;
    public g: number;
    public b: number;

    constructor(r: number, g: number, b: number) {
        this.r = r;
        this.g = g;
        this.b = b;
    }

    getHTMLValue(): string {
        return `rgb(${this.r}, ${this.g}, ${this.b})`;
    }
}

function drawCircle(drw: CanvasRenderingContext2D, x: number, y: number, r: number, color: RGBColor) {
    drw.beginPath();
    drw.arc(x, y, r, 0, 2 * Math.PI);
    drw.fillStyle = color.getHTMLValue();
    drw.fill();
}

export { initCanvas, drawCircle, RGBColor };
