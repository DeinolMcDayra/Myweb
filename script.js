document.addEventListener("DOMContentLoaded", function () {
    // Dark Mode Toggle
    const toggleSwitch = document.getElementById("dark-mode-toggle");
    const body = document.body;

    // Check localStorage for dark mode preference
    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
        toggleSwitch.checked = true;
    }

    // Toggle dark mode on switch change
    toggleSwitch.addEventListener("change", function () {
        if (this.checked) {
            body.classList.add("dark-mode");
            localStorage.setItem("darkMode", "enabled");
        } else {
            body.classList.remove("dark-mode");
            localStorage.setItem("darkMode", "disabled");
        }
    });

    // Section Visibility Handling
    const navLinks = document.querySelectorAll('.topnav a');
    const sections = document.querySelectorAll('section');
    const profileImage = document.querySelector('.profile-image');
    const heading = document.querySelector('.heading');
    const info = document.querySelector('.info');

    function showSection(targetId) {
        sections.forEach(section => {
            if (section.id === targetId) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });

        // Hide profile image and heading when a section is clicked
        if (targetId !== 'about') {
            profileImage.style.display = 'none';
            heading.style.display = 'none';
            info.style.display = 'none';
        } else {
            profileImage.style.display = 'block';
            heading.style.display = 'block';
            info.style.display = 'block';
        }
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            showSection(targetId);
        });
    });

    // Show the first section by default
    if (sections.length > 0) {
        sections[0].classList.add('active');
    }

    // FAQ Toggle Functionality
    document.querySelectorAll('.faq-question').forEach(item => {
        item.addEventListener('click', function () {
            const faqItem = this.parentElement;
            faqItem.classList.toggle('active');
        });
    });

    // Read More / Read Less Functionality
    const readMoreBtn = document.getElementById("readMoreBtn");
    const readLessBtn = document.getElementById("readLessBtn");
    const moreText = document.getElementById("moreText");

    if (readMoreBtn && readLessBtn && moreText) {
        readMoreBtn.addEventListener("click", function () {
            moreText.style.display = "block";
            readMoreBtn.style.display = "none";
            readLessBtn.style.display = "inline-block";
        });

        readLessBtn.addEventListener("click", function () {
            moreText.style.display = "none";
            readMoreBtn.style.display = "inline-block";
            readLessBtn.style.display = "none";
        });

        // Initially hide the "Read Less" button and the additional text
        readLessBtn.style.display = "none";
        moreText.style.display = "none";
    }
});