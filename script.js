document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;
    const navLinks = document.querySelector(".nav-links");
    const hamburger = document.querySelector(".hamburger");

    // Dark/Light Mode Toggle
    themeToggle.addEventListener("click", () => {
        body.classList.toggle("light-theme");
        const icon = themeToggle.querySelector("i");
        if (body.classList.contains("light-theme")) {
            icon.classList.replace("fa-moon", "fa-sun");
        } else {
            icon.classList.replace("fa-sun", "fa-moon");
        }
    });

    // Mobile Menu Toggle
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const featureCards = document.querySelectorAll(".feature-card");

    featureCards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.boxShadow = "0px 5px 15px rgba(0, 173, 181, 0.5)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.boxShadow = "none";
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const courseCards = document.querySelectorAll(".course-card");

    courseCards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.boxShadow = "0px 5px 15px rgba(0, 173, 181, 0.5)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.boxShadow = "none";
        });
    });
});
let currentTestimonial = 0;
const testimonials = document.querySelectorAll(".testimonial-card");
const dots = document.querySelectorAll(".dot");

function changeTestimonial(index) {
    testimonials[currentTestimonial].classList.remove("active");
    dots[currentTestimonial].classList.remove("active");

    currentTestimonial = index;

    testimonials[currentTestimonial].classList.add("active");
    dots[currentTestimonial].classList.add("active");
}

// Auto change every 5 seconds
setInterval(() => {
    let nextTestimonial = (currentTestimonial + 1) % testimonials.length;
    changeTestimonial(nextTestimonial);
}, 5000);
document.getElementById("newsletter-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload

    let emailInput = document.getElementById("email").value.trim();
    
    if (validateEmail(emailInput)) {
        sendVerificationCode(emailInput);
    } else {
        alert("Please enter a valid email address.");
    }
});

// Function to Validate Email
function validateEmail(email) {
    let re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
}

// Generate & Send a Random Verification Code
let generatedCode = "";
function sendVerificationCode(email) {
    generatedCode = Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit code
    alert(`Verification code sent to ${email}: ${generatedCode}`); // Simulate email sending

    document.getElementById("newsletter-form").classList.add("hidden");
    document.getElementById("verification-section").classList.remove("hidden");
}

// Verify the Entered Code
document.getElementById("verify-code").addEventListener("click", function() {
    let enteredCode = document.getElementById("verification-code").value.trim();
    
    if (enteredCode === generatedCode) {
        document.getElementById("verification-section").classList.add("hidden");
        document.getElementById("success-message").classList.remove("hidden");
    } else {
        alert("Incorrect verification code. Please try again.");
    }
});
document.querySelectorAll(".faq-question").forEach(button => {
    button.addEventListener("click", () => {
        let faq = button.parentElement;

        // Close all other open FAQs
        document.querySelectorAll(".faq").forEach(item => {
            if (item !== faq) {
                item.classList.remove("active");
            }
        });

        // Toggle the clicked FAQ
        faq.classList.toggle("active");
    });
});
// Scroll to Top Button
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
});

scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// Course Search & Filter Function
function filterCourses() {
    let searchInput = document.getElementById("searchBox").value.toLowerCase();
    let category = document.getElementById("categoryFilter").value;
    let courses = document.querySelectorAll(".course-card");

    courses.forEach(course => {
        let title = course.querySelector("h3").innerText.toLowerCase();
        let courseCategory = course.getAttribute("data-category");

        if ((category === "all" || courseCategory === category) && title.includes(searchInput)) {
            course.style.display = "block";
        } else {
            course.style.display = "none";
        }
    });
}

// Enroll Button Click Event
document.querySelectorAll(".enroll-btn").forEach(button => {
    button.addEventListener("click", function() {
        alert("You have enrolled successfully!");
    });
});
// Redirect to Course Detail Page with Data
function redirectToDetail(title, description, category) {
    localStorage.setItem("courseTitle", title);
    localStorage.setItem("courseDescription", description);
    localStorage.setItem("courseCategory", category);
    window.location.href = "course-detail.html";
}
// Load Course Details
document.getElementById("courseTitle").innerText = localStorage.getItem("courseTitle");
document.getElementById("courseDescription").innerText = localStorage.getItem("courseDescription");
document.getElementById("courseCategory").innerText = "Category: " + localStorage.getItem("courseCategory");

// Handle Enrollment Form Submission
document.getElementById("enrollForm").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("enrollMessage").innerText = "Thank you for enrolling!";
});

document.addEventListener("DOMContentLoaded", function () {
    const testimonials = document.querySelectorAll(".testimonial");
    let currentIndex = 0;

    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.classList.toggle("active", i === index);
        });
    }

    document.getElementById("prevBtn").addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        showTestimonial(currentIndex);
    });

    document.getElementById("nextBtn").addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(currentIndex);
    });

    showTestimonial(currentIndex);
});


