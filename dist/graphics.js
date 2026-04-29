// this function initializes a canvas to have the
// correct width and height
function initCanvas(canvas) {
    // set canvas bounds
    const canvas_box = canvas.getBoundingClientRect();
    canvas.width = canvas_box.width;
    canvas.height = canvas_box.height;
    // return the drawing element
    return canvas.getContext("2d");
}
class RGBColor {
    r;
    g;
    b;
    constructor(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
    }
    getHTMLValue() {
        return `rgb(${this.r}, ${this.g}, ${this.b})`;
    }
}
function drawCircle(drw, x, y, r, color) {
    drw.beginPath();
    drw.arc(x, y, r, 0, 2 * Math.PI);
    drw.fillStyle = color.getHTMLValue();
    drw.fill();
}
export { initCanvas, drawCircle, RGBColor };
//# sourceMappingURL=graphics.js.map