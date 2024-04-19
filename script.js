let typed = new Typed("#textTy", {
    strings: ["Web Developer", "Freelancer", "Designer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navbar.classList.toggle("active");
}
navbar.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navbar.classList.remove("active");
}

// Contact us form
function validateContact() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value; 
    let error_msg = document.getElementById("error_msg");
    error_msg.style.padding = "10px";

    let errors = [];

    if (name.lenght < 5) {
        errors.push("Please enter a valid name");
    }
    if (email.indexOf("@") == -1 || email.lenght < 6) {
        errors.push("Please enter a valid email");
    }
    if (phone.lenght < 8) {
        errors.push("Please enter a valid phone number");
    }
    if (message.lenght < 40) {
        errors.push("Please enter more than 40 characters");
    }

    if (errors.length > 0) {
        error_msg.innerHTML = errors.join("<br>");
        return false;
    }
    else{
        alert("Form submitted successfully");
    }

}