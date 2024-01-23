const lightMode = document.querySelector("#light");
const darkMode = document.querySelector("#dark");
const theme = document.querySelector(".theme-toggle");
const body = document.body;

theme.addEventListener("click", ()=>{
    theme.classList.toggle("active");

    if(theme.classList.contains("active")){
        body.classList.add("dark-theme");
    }
    else{
        body.classList.remove("dark-theme");
    }
    saveTheme();
})

function saveTheme(){
    localStorage.setItem("theme", body.classList)
}
function getTheme(){
    body.classList = localStorage.getItem("theme");

    if(document.body.classList.contains("dark-theme")){
        theme.classList.add("active");
    }
    else{
        theme.classList.remove("active");
    }
}
getTheme();