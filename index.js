document.addEventListener('DOMContentLoaded', function () {
    const languageSelector = document.querySelector('.language-selector');
    const selectedLanguage = document.querySelector('.selected-language');
    const languageMenu = document.querySelector('.language-menu');
    const languages = ['English', 'Spanish', 'French', 'German', 'Chinese', 'Japanese', 'Korean', 'Russian', 'Arabic', 'Hindi'];
    const body = document.querySelector("body");
    const toggle = document.querySelector("#toggle");
    const sunIcon = document.querySelector(".toggle .bxs-sun");
    const moonIcon = document.querySelector(".toggle .bx-moon");

    // Function to toggle language menu
    languageSelector.addEventListener('click', function () {
        languageMenu.classList.toggle('show');
    });

    // Create language menu items
    languages.forEach(function (language) {
        const languageOption = document.createElement('span');
        languageOption.textContent = language;
        languageOption.addEventListener('click', function () {
            selectedLanguage.textContent = language;
            languageMenu.classList.remove('show');
        });
        languageMenu.appendChild(languageOption);
    });

    // Function to toggle dark mode
    
    
    toggle.addEventListener("change", () => {
      body.classList.toggle("dark");
      sunIcon.className =
        sunIcon.className == "bx bxs-sun" ? "bx bx-sun" : "bx bxs-sun";
      moonIcon.className =
        moonIcon.className == "bx bxs-moon" ? "bx bx-moon" : "bx bxs-moon";
    });
    
});
