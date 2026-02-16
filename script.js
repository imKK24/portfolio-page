/* ==========================================================================
   1. PROJECT DETAILS MODAL / ALERT
   ========================================================================== */
/**
 * Function to display details about a project when the button is clicked.
 * This corresponds to the onclick events in the index.html file.
 */
function showDetails(project) {
    let title = "";
    let description = "";
    let techStack = "";

    // Switch case to handle different projects
    switch(project) {
        case 'Project 1':
            title = "Customer Segmentation using ML";
            description = "Developed a system to group customers based on purchasing behavior. I used a custom manual standardization function to process the data before applying clustering.";
            techStack = "Python, NumPy, Scikit-Learn";
            break;

        case 'Project 2':
            title = "PCA Dimensionality Analysis";
            description = "Applied Principal Component Analysis (PCA) to the Breast Cancer dataset, reducing 30 features to 11 while retaining 95% variance and maintaining high classification accuracy.";
            techStack = "Python, PCA, Logistic Regression";
            break;

        case 'Project 3':
            title = "LDA vs. PCA Comparison";
            description = "A comparative study showing how Linear Discriminant Analysis (LDA) maximizes class separability compared to PCA's variance-focused approach.";
            techStack = "Python, LDA, Matplotlib";
            break;

        default:
            title = "Project Update";
            description = "Details for this project are coming soon!";
            techStack = "N/A";
    }

    // Displaying the information in a clean format
    alert(`🚀 ${title}\n\n📝 ${description}\n\n🛠️ Tech Stack: ${techStack}`);
}

/* ==========================================================================
   2. SMOOTH SCROLLING (ENHANCEMENT)
   ========================================================================== */
// While CSS handles simple smooth scrolling, this JS ensures consistent 
// behavior across all browsers when clicking navigation links.
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70, // Adjust for sticky nav height
                behavior: 'smooth'
            });
        }
    });
});

/* ==========================================================================
   3. NAVIGATION BACKGROUND CHANGE ON SCROLL
   ========================================================================== */
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.background = '#000'; // Darker background when scrolling
        nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.5)';
    } else {
        nav.style.background = '#1a1a1a'; // Original background
        nav.style.boxShadow = 'none';
    }
});



/* ==========================================================================
   4. CONSOLE LOG FOR DEBUGGING
   ========================================================================== */
console.log("Portfolio JavaScript loaded successfully.");