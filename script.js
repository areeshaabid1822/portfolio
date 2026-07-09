

document.addEventListener("DOMContentLoaded", () => {

    const menuBtn = document.querySelector(".nxMenu");
    const navBar = document.querySelector(".nxNavbar");

   
    if (menuBtn && navBar) {
        menuBtn.addEventListener("click", () => {
            navBar.classList.toggle("active");
        });
    }

    
    document.querySelectorAll(".nxNavbar a").forEach(link => {
        link.addEventListener("click", () => {
            navBar.classList.remove("active");
        });
    });

    const header = document.querySelector(".nxHeader");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 80) {
            header.style.background = "rgba(7,11,23,.95)";
            header.style.boxShadow = "0 10px 25px rgba(0,0,0,.3)";
        } else {
            header.style.background = "rgba(7,11,23,.75)";
            header.style.boxShadow = "none";
        }

    });

});