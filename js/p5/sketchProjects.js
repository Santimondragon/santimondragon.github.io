let x1, x2, x3, x4;
let y1, y2, y3, y4;

let bx1, bx2, bx3, bx4;
let by1, by2, by3, by4;

let particles = [];
let bg;

let prevAlpha;
let growH, growW;

function preload() {
    bg = loadImage('../images/bg.png');

    glootPrev = loadImage("../images/glootPrev.jpg");
    ridesPrev = loadImage("../images/ridesPrev.jpg");
    betracksPrev = loadImage("../images/betracksPrev.jpg");
    iPetsPrev = loadImage("../images/iPetsPrev.jpg");
    bannerPrev = loadImage("../images/bannerPrev.jpg");
    //parqueaderosPrev = loadImage("../images/parqueaderosPrev.jpg");
    //buddyFinderPrev = loadImage("../images/buddyFinderPrev.jpg");

    projectPrev = loadImage('../images/projectsPrev.jpg');
}

function setup() {
    let canvas = createCanvas(document.documentElement.clientWidth, document.documentElement.clientHeight);
    canvas.id("bg");
    canvas.parent("#canvasPreview");

    if (width > height) {
        for (let i = 0; i < height / 15; i++) {
            particles.push(new Particle(random(width), random(height), random(-2, 2), random(-2, 2)));
        }
    } else {
        for (let i = 0; i < height / 35; i++) {
            particles.push(new Particle(random(width), random(height), random(-2, 2), random(-2, 2)));
        }
    }

    growH = 0;
    growW = 0;
    prevAlpha = 100;
}

function draw() {
    image(bg, 0, 0, width, height);
    //image(projectPrevBackUp, -growW / 5, -growH / 2, (height * 2.5) + growW, (height) + growH);
    //image(projectPrev, -growW / 5, -growH / 2, (height * 2.5) + growW, (height) + growH);
    if (prevShowing == "gloot") {
        image(glootPrev, -growW / 5, -growH / 2, (height * 2.5) + growW, (height) + growH);

    } else if (prevShowing == "banner") {
        image(bannerPrev, -growW / 5, -growH / 2, (height * 2.5) + growW, (height) + growH);

    } else if (prevShowing == "iPets") {
        image(iPetsPrev, -growW / 5, -growH / 2, (height * 2.5) + growW, (height) + growH);

    } else if (prevShowing == "betracks") {
        image(betracksPrev, -growW / 5, -growH / 2, (height * 2.5) + growW, (height) + growH);

    } else if (prevShowing == "rides") {
        image(ridesPrev, -growW / 5, -growH / 2, (height * 2.5) + growW, (height) + growH);

    } else {
        image(projectPrev, -growW / 5, -growH / 2, (height * 2.5) + growW, (height) + growH);
    }

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
    if (frameCount % 120 == 1) {
        particles.push(new Particle(random(width), random(height), random(-2, 2), random(-2, 2)));
        particles.shift();
    }

    imageResize();
}

function imageResize() {
    growW = lerp(growW, 375, 0.003);
    growH = lerp(growH, 150, 0.003);
}

function mousePressed() {
    particles.push(new Particle(mouseX + Math.round(random(-1, 1)) * 30, mouseY + Math.round(random(-1, 1)) * 30, random(-2, 2), random(-2, 2)));
    particles.push(new Particle(mouseX + Math.round(random(-1, 1)) * 30, mouseY + Math.round(random(-1, 1)) * 30, random(-2, 2), random(-2, 2)));
    particles.shift();
    particles.shift();
}

function mouseDragged() {
    particles.push(new Particle(mouseX + Math.round(random(-1, 1)) * 30, mouseY + Math.round(random(-1, 1)) * 30, random(-2, 2), random(-2, 2)));
    particles.push(new Particle(mouseX + Math.round(random(-1, 1)) * 30, mouseY + Math.round(random(-1, 1)) * 30, random(-2, 2), random(-2, 2)));
    particles.shift();
    particles.shift();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

let projectsCont = document.getElementById("projects");
let projects = [...document.getElementsByClassName("project")];
let prevShowing = "";

projectsCont.addEventListener("mouseleave", () => {
    prevShowing = "";
    growW = lerp(growW, 0, 0.8);
    growH = lerp(growH, 0, 0.8);
});

projects.forEach(project => {
    project.addEventListener("mouseenter", () => {
        if (prevShowing != project.classList[1]) {
            prevShowing = project.classList[1];
            growW = lerp(growW, 0, 0.8);
            growH = lerp(growH, 0, 0.8);
        } else {
            console.log("Already previewing")
        }
    });
});