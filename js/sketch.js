function setup() {
    var canvas = createCanvas(800, 800);
    canvas.parent("p5container");
}

function draw() {
    background(220);

    fill(0, 0, 0)
    rect(290, 50, 220, 700)

    fill(255, 0, 0)
    ellipse(400, 170, 200)

    fill(255, 255, 0);
    ellipse(400, 400, 200);

    fill(0, 255, 0)
    ellipse(400, 630, 200)
}