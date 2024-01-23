const nextBtn_1 = document.querySelector(".next-btn-1");
const nextBtn_2 = document.querySelector(".next-btn-2");
const prevBtn_1 = document.querySelector(".prev-btn-1");
const prevBtn_2 = document.querySelector(".prev-btn-2");
const form_1 = document.querySelector(".form-1");
const form_2 = document.querySelector(".form-2");
const form_3 = document.querySelector(".form-3");
const tag_1 = document.querySelector(".tag-1");
const tag_2 = document.querySelector(".tag-2");
const tag_3 = document.querySelector(".tag-3");

nextBtn_1.addEventListener('click', () => {
    form_2.style.transform = "translateX(0)";
    form_1.style.transform = "translateX(-200%)";
    tag_1.classList.remove("current");
    tag_2.classList.add("current");
    tag_3.classList.remove("current");
})
prevBtn_1.addEventListener('click', () => {
    form_2.style.transform = "translateX(200%)";
    form_1.style.transform = "translateX(0)";
    tag_1.classList.add("current");
    tag_2.classList.remove("current");
    tag_3.classList.remove("current");
})
nextBtn_2.addEventListener('click', () => {
    form_3.style.transform = "translateX(0)";
    form_2.style.transform = "translateX(-200%)";
    tag_1.classList.remove("current");
    tag_2.classList.remove("current");
    tag_3.classList.add("current");
})
prevBtn_2.addEventListener('click', () => {
    form_3.style.transform = "translateX(200%)";
    form_2.style.transform = "translateX(0)";
    tag_1.classList.remove("current");
    tag_2.classList.add("current");
    tag_3.classList.remove("current");
})

// dynamic email field
const addBtn = document.querySelector(".add-more-btn");
const removeBtn = document.querySelector(".remove-btn");
const inputField = document.querySelector(".field");
const alertMsg = document.querySelector(".alertMsg")
let emailCount = 1; // Initial count

function addField() {
    if (emailCount < 5) {
        const email = document.createElement("input");
        email.type = "email";
        email.placeholder = "E-mail Address";
        email.name = `email${emailCount + 1}`;

        inputField.appendChild(email);
        emailCount++;
    } else {
        // alert("You can add a maximum of 5 email inputs.");
        alertMsg.classList.add("active")
        alertMsg.innerHTML =  "You can add a maximum of 5 email inputs.";
        setTimeout(()=>{
            alertMsg.classList.remove("active");
        }, 2500)
    }
}

function removeField() {
    if (emailCount > 1) {
        const lastEmail = inputField.lastElementChild;
        inputField.removeChild(lastEmail);
        emailCount--;
    } else {
        // alert("You must have at least one email input.");
        alertMsg.classList.add("active")
        alertMsg.innerHTML =  "You must have at least one email input.";
        setTimeout(()=>{
            alertMsg.classList.remove("active");
        }, 2500)
    }
}

addBtn.addEventListener("click", addField);
removeBtn.addEventListener("click", removeField);