document.addEventListener("DOMContentLoaded", function () {
    const toggleSwitch = document.getElementById("dark-mode-toggle");
    const body = document.body;

    // Check if dark mode is already enabled in localStorage
    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
        toggleSwitch.checked = true;
    }

    toggleSwitch.addEventListener("change", function () {
        if (this.checked) {
            body.classList.add("dark-mode");
            localStorage.setItem("darkMode", "enabled");
        } else {
            body.classList.remove("dark-mode");
            localStorage.setItem("darkMode", "disabled");
        }
    });
});

document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', function() {
      const answer = item.nextElementSibling;
      const icon = item.querySelector('.toggle-icon');
      
      // Toggle the visibility of the answer with animation
      answer.classList.toggle('active');
      
      // Change the icon
      icon.textContent = answer.classList.contains('active') ? '-' : '+';
    });
  });

