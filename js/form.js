const signupForm = document.querySelector("#signupForm")
const firstName = document.querySelector("#fname")
const lastName = document.querySelector("#lname")
const email = document.querySelector("#email")
const username = document.querySelector("#uname")
const password = document.querySelector("#pwd")
const toast = document.querySelector(".toast")
const inputFields = document.querySelectorAll(".form-container form input")

signupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (username.value === "" && firstName.value === "" && lastName.value === "" && email.value === "" && password.value === "") {

        toast.classList.add("is-active")
        inputFields.forEach((inputField) => {
            inputField.classList.add("error")
        })
        toast.textContent = "All fields are required"

        setTimeout(() => {
            toast.classList.remove("is-active");
            inputFields.forEach((inputField) => {
                inputField.classList.remove("error")
            })
        }, 3000)
    }
    else if (firstName.value === "") {
        toast.classList.add("is-active")
        toast.textContent = "Firstname is are required"

        setTimeout(() => {
            toast.classList.remove("is-active");
        }, 3000)
    }
    else if (lastName.value === "") {
        toast.classList.add("is-active")
        toast.textContent = "Lastname is are required"

        setTimeout(() => {
            toast.classList.remove("is-active");
        }, 3000)
    }
    else if (username.value === "") {
        toast.classList.add("is-active")
        toast.textContent = "Username is are required"

        setTimeout(() => {
            toast.classList.remove("is-active");
        }, 3000)
    }
    
    else if (password.value === "") {
        toast.classList.add("is-active")
        toast.textContent = "Password is are required"

        setTimeout(() => {
            toast.classList.remove("is-active");
        }, 3000)
    }
    else if (password.value.length <= 5) {
        toast.classList.add("is-active")
        toast.textContent = "Password should be at least 6 characters"

        setTimeout(() => {
            toast.classList.remove("is-active");
        }, 3000)
    }
    else {
        registerUser({
            first_name: firstName.value,
            last_name: lastName.value,
            username: username.value,
            password: password.value
        })
        // window.location.href = "/marketer-dashboard/dashbord.html"
    }

})

