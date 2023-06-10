const toggle = document.querySelector(".toggle-box");
const toggleBar = document.querySelector(".toggle");
const headContainer = document.querySelector(".head-container");
const overlay = document.querySelector(".overlay");
const link = document.querySelectorAll(".link");

toggle.addEventListener("click", () => {
    let menu = document.querySelector(".menu").classList.toggle("active");
    // let body = document.body.classList.toggle(".active");
    toggleBar.classList.toggle("active");
    headContainer.classList.toggle("active");
    overlay.classList.toggle("active");
});
link.forEach((el) => {
    el.addEventListener("click", () => {
        overlay.classList.remove("active");
        toggleBar.classList.remove("active");
        headContainer.classList.remove("active");
        let menu = document.querySelector(".menu").classList.remove("active");
    })
});

const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });