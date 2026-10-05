// =========================
// MOBILE MENU
// =========================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


// Close menu when clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


// =========================
// CONTACT FORM
// =========================

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", async (event) => {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;


    formMessage.textContent = "Sending...";
    formMessage.style.color = "#00a8cc";


    try {

        const response = await fetch("/api/contact", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                name,
                email,
                subject,
                message
            })

        });


        const data = await response.json();


        if (response.ok) {

            formMessage.textContent =
                "Message sent successfully!";

            formMessage.style.color = "green";

            contactForm.reset();

        } else {

            throw new Error(data.message);

        }

    } catch (error) {

        formMessage.textContent =
            "Something went wrong. Please try again.";

        formMessage.style.color = "red";

    }

});
