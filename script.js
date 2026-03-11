// ===============================
// 1. FORCE SCROLL TO TOP
// ===============================
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

window.onload = () => {
    window.scrollTo(0, 0);
};


// ===============================
// 2. MOBILE MENU TOGGLE
// ===============================
const menuToggle = document.querySelector('#mobile-menu');
const navList = document.querySelector('.nav-list');

menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
});


// ===============================
// 3. CLOSE MENU AFTER CLICK
// ===============================
document.querySelectorAll('.nav-list a').forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('active');
    });
});


// ===============================
// 4. SMOOTH SCROLLING
// ===============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({
                behavior: "smooth"
            });

    });

});


// ===============================
// 5. PROJECT DETAILS
// ===============================
function showDetails(type) {

    const projects = {

        "Project 1": {
            title: "PCA Analysis",
            message: "Reduced dimensions from 5 to 2 while keeping maximum variance."
        },

        "Project 2": {
            title: "LDA Classification",
            link: "https://colab.research.google.com/"
        },

        "Ethics": {
            title: "Professional Ethics",
            message: "Explains Moral vs Morality and Kohlberg's stages of moral development."
        }

    };

    const project = projects[type];

    if (!project) return;

    if (project.link) {

        window.open(project.link, "_blank");

    } else {

        alert(project.title + "\n\n" + project.message);

    }

}


// ===============================
// 6. SIMPLE TYPEWRITER EFFECT
// ===============================
const words = ["Developer", "Data Scientist", "Engineer"];

let wordIndex = 0;
let letterIndex = 0;

const dynamicText = document.querySelector(".dynamic-text");

function typeEffect() {

    if (letterIndex < words[wordIndex].length) {

        dynamicText.textContent += words[wordIndex].charAt(letterIndex);
        letterIndex++;

        setTimeout(typeEffect, 100);

    } else {

        setTimeout(eraseEffect, 2000);

    }

}

function eraseEffect() {

    if (letterIndex > 0) {

        dynamicText.textContent = words[wordIndex].substring(0, letterIndex - 1);
        letterIndex--;

        setTimeout(eraseEffect, 50);

    } else {

        wordIndex++;

        if (wordIndex >= words.length) {
            wordIndex = 0;
        }

        setTimeout(typeEffect, 300);
    }

}

document.addEventListener("DOMContentLoaded", typeEffect);
