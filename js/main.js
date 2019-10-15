const mainMenuItems = [...document.querySelectorAll("#home #navbar #menu li")];
const sideMenuItems = [...document.querySelectorAll("#navBar .menu li a")];

const home = document.querySelector("#home");
const about = document.querySelector("#about");
const myWork = document.querySelector("#myWork");
const contact = document.querySelector("#contact");
const navbar = document.querySelector("#navAnchor");

mainMenuItems.forEach((e, i) => {
    e.addEventListener('click', () => {
        // Shows navbar
        navbar.className = "navbarShown";
        home.className = "sectHidden";

        // Shows the corresponding section
        if (i == 1) {
            about.className = "sectShown";
            sideMenuItems[1].className = "active";
        }
        if (i == 2) {
            myWork.className = "sectShown";
            sideMenuItems[2].className = "active";
        }
        if (i == 3) {
            contact.className = "sectShown";
            sideMenuItems[3].className = "active";
        }
    })
});

sideMenuItems.forEach((e, i) => {
    e.addEventListener('click', () => {
        for (let i = 0; i < sideMenuItems.length; i++) {
            sideMenuItems[i].classList.remove("active");
        }
        e.className = "active";
    })
});

const skills = [...document.querySelectorAll("#skills .options .icons i")]
const skillDisplay = document.querySelector("#skills .options .display")

skills.forEach((e, i) => {
    e.addEventListener('click', () => {
        for (let i = 0; i < skills.length; i++) {
            if (skills[i].classList[2]) {
                skills[i].classList.remove("active");
            }
        }
        e.classList.add("active");
        if (i == 0) {
            skillDisplay.className = "display web";
        }
        if (i == 1) {
            skillDisplay.className = "display ux";
        }
        if (i == 2) {
            skillDisplay.className = "display ui";
        }
        if (i == 3) {
            skillDisplay.className = "display research";
        }
    })
});

const expertise = [...document.querySelectorAll("#expertise .options .icons i")]
const expertiseDisplay = document.querySelector("#expertise .options .display")

expertise.forEach((e, i) => {
    e.addEventListener('click', () => {
        for (let i = 0; i < expertise.length; i++) {
            if (expertise[i].classList[2]) {
                expertise[i].classList.remove("active");
            }
        }
        e.classList.add("active");
        if (i == 0) {
            expertiseDisplay.className = "display leader";
        }
        if (i == 1) {
            expertiseDisplay.className = "display team";
        }
        if (i == 2) {
            expertiseDisplay.className = "display analytic";
        }
        if (i == 3) {
            expertiseDisplay.className = "display business";
        }
    })
});

const hamOpen = document.querySelector("#hamOpen");
const hamClose = document.querySelector("#hamClose");

hamOpen.addEventListener("click", () => {
    navbar.className = "navbarShown";
});

hamClose.addEventListener("click", () => {
    navbar.className = "navbarHidden";
});

(function () {
    function id(v) {
        return document.getElementById(v);
    }

    function loadbar() {
        let ovrl = id("overlay"),
            prog = id("progress"),
            stat = id("progstat"),
            img = document.images,
            c = 0;
        tot = img.length;

        function imgLoaded() {
            c += 1;
            let perc = ((100 / tot * c) << 0) + "%";
            prog.style.width = perc;
            stat.innerHTML = "Loading " + perc;
            if (c === tot) return doneLoading();
        }

        function doneLoading() {
            ovrl.style.opacity = 0;
            setTimeout(function () {
                ovrl.style.display = "none";
            }, 1200);
        }
        for (let i = 0; i < tot; i++) {
            let tImg = new Image();
            tImg.onload = imgLoaded;
            tImg.onerror = imgLoaded;
            tImg.src = img[i].src;
        }
    }
    document.addEventListener('DOMContentLoaded', loadbar, false);
}());