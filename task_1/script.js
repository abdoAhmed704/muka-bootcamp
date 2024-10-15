// 1. Linking JavaScript to HTML
console.log("JavaScript is working!");

// Ensure DOM is fully loaded before interacting with elements
document.addEventListener("DOMContentLoaded", () => {

    // 2. Dynamic Content Updates
    const aboutSection = document.querySelector("#aboutme");
    const updateButton = document.createElement("button");
    updateButton.textContent = "Update About Me";
    document.body.appendChild(updateButton);

    updateButton.addEventListener("click", () => {
        aboutSection.textContent = "This is the new updated content!";
    });

    // 3. Navigation Bar Interactivity
    window.addEventListener("scroll", () => {
        const sections = document.querySelectorAll("section");
        const navLinks = document.querySelectorAll("nav a");

        sections.forEach((section, i) => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 50 && rect.bottom >= 50) {
                navLinks[i].classList.add("active");
            } else {
                navLinks[i].classList.remove("active");
            }
        });
    });

    // 4. Form Validation
    const form = document.querySelector("form");
    form.addEventListener("submit", (event) => {
        const nameInput = document.querySelector("#name");
        const emailInput = document.querySelector("#email");
        if (!nameInput.value || !emailInput.value.includes("@")) {
            event.preventDefault();
            alert("Please fill out all fields and ensure the email is valid.");
        }
    });

    // 5. Toggle Light/Dark Mode
    const toggleButton = document.querySelector("#theme-toggle");
    toggleButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
    });

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }

    // 6. Modal Window for Project Previews
    const modal = document.querySelector("#project-modal");
    const project = document.querySelector("#project");
    const closeBtn = document.querySelector(".close");

    if (project && closeBtn && modal) {
        project.addEventListener("click", () => {
            modal.style.display = "block";
        });

        closeBtn.addEventListener("click", () => {
            modal.style.display = "none";
        });
    }

    // 7. Interactive Skill Bars
    const skillBars = document.querySelectorAll(".skill-bar");
    window.addEventListener("scroll", () => {
        skillBars.forEach((bar) => {
            const rect = bar.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                bar.style.width = bar.dataset.proficiency + "%";
            }
        });
    });

    // 8. Image Carousel for Projects Section
    let currentIndex = 0;
    const images = document.querySelectorAll(".carousel img");

    if (images.length > 0) {
        setInterval(() => {
            images[currentIndex].classList.remove("active");
            currentIndex = (currentIndex + 1) % images.length;
            images[currentIndex].classList.add("active");
        }, 3000);

        document.querySelector(".prev").addEventListener("click", () => {
            images[currentIndex].classList.remove("active");
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            images[currentIndex].classList.add("active");
        });

        document.querySelector(".next").addEventListener("click", () => {
            images[currentIndex].classList.remove("active");
            currentIndex = (currentIndex + 1) % images.length;
            images[currentIndex].classList.add("active");
        });
    }

    // 9. Scroll-to-Top Button
    const scrollToTopBtn = document.querySelector("#scroll-to-top");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    });

    scrollToTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // 10. Responsive JavaScript Features
    window.addEventListener("resize", () => {
        if (window.innerWidth < 600) {
            document.querySelector("#projects").style.display = "block";
        } else {
            document.querySelector("#projects").style.display = "flex";
        }
    });
});

