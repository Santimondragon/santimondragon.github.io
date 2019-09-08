let menuItems = document.querySelectorAll("body #navbar.sideBar #menu li");
let menuItemWidth = menuItems[0];

let about = document.getElementById("about");


let skills = [...document.querySelectorAll("#skills .options .icons i")]
let skillDisplay = document.querySelector("#skills .options .display")

skills.forEach((e, i) => {
    e.addEventListener('click', ()=> {
        for (let i = 0; i < skills.length; i++) {
            if(skills[i].classList[2]){
                skills[i].classList.remove("active");
            }
        }
        e.classList.add("active");
        if(i == 0){
            skillDisplay.className = "display ui";
        }
        if(i == 1){
            skillDisplay.className = "display ux";
        }
        if(i == 2){
            skillDisplay.className = "display web";
        }
        if(i == 3){
            skillDisplay.className = "display research";
        }
    })
});