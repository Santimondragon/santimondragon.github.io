let x1, x2, x3, x4;
let y1, y2, y3, y4;

let bx1, bx2, bx3, bx4;
let by1, by2, by3, by4;

let particles = [];
let bg;

function preload() {
    bg = loadImage('../assets/images/bg.png');
}

function setup() {
    let canvas = createCanvas(document.documentElement.clientWidth, document.documentElement.clientHeight);
    canvas.id("bg");

    if (width > height) {
        for (let i = 0; i < height / 15; i++) {
            particles.push(new Particle(random(width), random(height), random(-2, 2), random(-2, 2)));
        }
    } else {
        for (let i = 0; i < height / 35; i++) {
            particles.push(new Particle(random(width), random(height), random(-2, 2), random(-2, 2)));
        }
    }
}

function draw() {
    image(bg, 0, 0, width, height);
    stroke(255);
    particles.forEach(particle => {
        particle.display();
        particle.move();
    });

    for (let i = 0; i < particles.length; i++) {
        const particle = particles[i];
        for (let j = 0; j < particles.length; j++) {
            const other = particles[j];
            let distance = dist(particle.x, particle.y, other.x, other.y);
            if (width > height) {
                if (distance < 300) {
                    let strokeOpacity = map(distance, 0, 300, 5, 0);
                    stroke(255, strokeOpacity * strokeOpacity);
                    strokeWeight(1);
                    line(particle.x, particle.y, other.x, other.y);
                }
            } else {
                if (distance < 200) {
                    let strokeOpacity = map(distance, 0, 200, 5, 0);
                    stroke(255, strokeOpacity * strokeOpacity);
                    strokeWeight(1);
                    line(particle.x, particle.y, other.x, other.y);
                }
            }
        }
    }

    if (width > height) {
        if (particles.length >= height / 15 && frameCount % 10 == 1) {
            particles.shift();
        }
    } else if (particles.length >= height / 35 && frameCount % 10 == 1) {
        particles.shift();
    }
}


function mousePressed() {
    particles.push(new Particle(mouseX + Math.round(random(-1, 1)) * 30, mouseY + Math.round(random(-1, 1)) * 30, random(-2, 2), random(-2, 2)));
}

function mouseDragged() {
    particles.push(new Particle(mouseX + Math.round(random(-1, 1)) * 30, mouseY + Math.round(random(-1, 1)) * 30, random(-2, 2), random(-2, 2)));
    particles.shift();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}