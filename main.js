const header = document.querySelector("header");
const toggle = document.querySelector(".toggle-box");
const toggleBar = document.querySelector(".toggle");
const ul = document.querySelector("ul");
const link = document.querySelectorAll(".link");

let lastScroll = 0;

window.addEventListener("scroll", ()=>{
    if(scrollY > lastScroll){
        header.style.top = "-100px";
    }
    else{
        header.style.top = "20px";
    }

    lastScroll = window.scrollY;
});

toggle.addEventListener("click", ()=>{
    toggleBar.classList.toggle("active");

    if(toggleBar.classList.contains("active")){
        ul.classList.add("active");
    }
    else{
        ul.classList.remove("active");
    }
});

link.forEach((e)=>{
    e.addEventListener("click", ()=>{
        ul.classList.remove("active");
        toggleBar.classList.remove("active");
    })
});