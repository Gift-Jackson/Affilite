const header = document.querySelector("header");
const mobileNav = document.querySelector(".mobile-nav")

// Header scroll effect
window.addEventListener("scroll", () => {
    if (scrollY >= 600) {
        header.classList.add("scroll")
    }
    else {
        header.classList.remove("scroll")
    }
});

// Mobile Menu
let openMenu = () => {
    mobileNav.classList.toggle("open");

    if (mobileNav.classList.contains("close")) {
        mobileNav.classList.replace("close", "open")
    }
}

let closeMenu = () => {
    mobileNav.classList.replace("open", "close");
};

//Code to update the footer year
document.getElementById("currentYear").textContent =
    new Date().getFullYear();

// go to login page
let goToLoginPage = () => {
    window.location.href = "/register/login.html"
}
// go to Signup page
let goToSignupPage = () => {
    window.location.href = "/register/register.html"
}

