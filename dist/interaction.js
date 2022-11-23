
const gnavH = document.getElementById("gNav").clientHeight;

window.addEventListener("scroll", () => {
    const scroll_y = window.scrollY;
    const lNav = document.getElementById("lNav");
    if(scroll_y > gnavH){
        lNav.classList.add("active");
    }else if(scroll_y < gnavH){
        lNav.classList.remove("active");
    }

});


//sp nav

//hambtn mordal spnav

let hambtn = document.getElementById("jsHambtn");
let spnav = document.getElementById("spNav");
hambtn.addEventListener("click", () => {
  spnav.classList.toggle("show");
  hambtn.classList.toggle("clicked");
});





//subNav 
const subnavBtn = document.getElementById("subnavBtn");
subnavBtn.addEventListener("mouseenter", (e) => {
  e.currentTarget.classList.add("openNav");
});
subnavBtn.addEventListener("mouseleave", (e) => {
  e.currentTarget.classList.remove("openNav");
});

