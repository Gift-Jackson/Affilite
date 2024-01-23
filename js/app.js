const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const sideBar = document.querySelector(".mobile-sidebar");
const darkBg = document.querySelector(".dark-bg");
const profileContainer = document.querySelector(".profile-container")
const dropDown = document.querySelector(".drop-down")
const notificationLink = document.querySelector('.notification-link');
const indicator = document.querySelector(".indicator");


openMenu.addEventListener("click", () => {
    sideBar.classList.add("active");
    darkBg.classList.add("active");
})

closeMenu.addEventListener("click", () => {
    sideBar.classList.remove("active");
    darkBg.classList.remove("active");
})
darkBg.addEventListener("click", () => {
    sideBar.classList.remove("active");
    darkBg.classList.remove("active");
});

profileContainer.addEventListener("click", () => {
    dropDown.classList.toggle("active");
})

// Event listener to close dropdown when clicking outside
window.addEventListener("click", (event) => {
    const isInsideProfileContainer = profileContainer.contains(event.target);
    const isInsideDropDown = dropDown.contains(event.target);

    if (!isInsideProfileContainer && !isInsideDropDown) {
        dropDown.classList.remove("active");
    }
});

// Get the current hour
var currentHour = new Date().getHours();

// Select the elements
var greetingElement = document.querySelector('.greeting');
var quoteElement = document.querySelector('.quote');

// Update greetings and quotes based on the time
if (currentHour >= 5 && currentHour < 12) {
    greetingElement.textContent = "Good Morning, Gift! 🌅";
    quoteElement.textContent = "Hello Boss, ready to generate Sales Today? Let's go!";
} else if (currentHour >= 12 && currentHour < 18) {
    greetingElement.textContent = "Good Afternoon, Gift! ☀️";
    quoteElement.textContent = "Afternoon, Boss! Time to shine and close those deals!";
} else {
    greetingElement.textContent = "Good Evening, Gift! 🌙";
    quoteElement.textContent = "Evening, Boss! Reflect on your day and plan for success tomorrow!";
}


function productDetails(){
    window.location = "/templates/product-page.html"
}
