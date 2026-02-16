// 1. Force Scroll to Top on Page Reload
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);

// 2. Mobile Menu Toggle
const menuToggle = document.querySelector('#mobile-menu');
const navList = document.querySelector('.nav-list');

menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
});

// 3. Project Details & Links
function showDetails(type) {
    if (type === 'Project 1') {
        alert("PCA Analysis: Reduced dimensions from 5 to 2 while keeping max variance.");
    } else if (type === 'Project 2') {
        // Example: Redirect to your Colab link
        window.open("https://colab.research.google.com/", "_blank");
    } else if (type === 'Ethics') {
        alert("Ethics: Discusses Moral vs. Morality and Kohlberg's stages.");
    }
}