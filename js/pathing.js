window.onhashchange = function () {
    if (window.location.href.split("#")[1] === undefined || window.location.href.split("#")[1] === "/"){
        home.className = "sectShown";
        about.className = "sectHidden";
        myWork.className = "sectHidden";
        contact.className = "sectHidden";
        navbar.className = "navbarHidden";
    } else if (window.location.href.split("#")[1] === "/about"){
        home.className = "sectHidden";
        about.className = "sectShown";
        myWork.className = "sectHidden";
        contact.className = "sectHidden";
        navbar.className = "navbarShown";
        sideMenuItems[1].className = "active";

    } else if (window.location.href.split("#")[1] === "/work"){
        home.className = "sectHidden";
        about.className = "sectHidden";
        myWork.className = "sectShown";
        contact.className = "sectHidden";
        navbar.className = "navbarShown";
        sideMenuItems[2].className = "active";
        
    } else if (window.location.href.split("#")[1] === "/contact"){
        home.className = "sectHidden";
        about.className = "sectHidden";
        myWork.className = "sectHidden";
        contact.className = "sectShown";
        navbar.className = "navbarShown";
        sideMenuItems[3].className = "active";
    }
}

setTimeout(function () {
    if (window.location.href.split("#")[1] === undefined || window.location.href.split("#")[1] === "/"){
        home.className = "sectShown";
        about.className = "sectHidden";
        myWork.className = "sectHidden";
        contact.className = "sectHidden";
        navbar.className = "navbarHidden";
    } else if (window.location.href.split("#")[1] === "/about"){
        home.className = "sectHidden";
        about.className = "sectShown";
        myWork.className = "sectHidden";
        contact.className = "sectHidden";
        navbar.className = "navbarShown";
        sideMenuItems[1].className = "active";

    } else if (window.location.href.split("#")[1] === "/work"){
        home.className = "sectHidden";
        about.className = "sectHidden";
        myWork.className = "sectShown";
        contact.className = "sectHidden";
        navbar.className = "navbarShown";
        sideMenuItems[2].className = "active";
        
    } else if (window.location.href.split("#")[1] === "/contact"){
        home.className = "sectHidden";
        about.className = "sectHidden";
        myWork.className = "sectHidden";
        contact.className = "sectShown";
        navbar.className = "navbarShown";
        sideMenuItems[3].className = "active";
    }
}, 1500);