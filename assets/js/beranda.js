document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    if (!themeToggle) return; 

    function updateIcon(isDark) {
        themeToggle.textContent = isDark ? "☀️" : "🌙";
    }

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        body.classList.add("dark-mode");
        updateIcon(true);
    } else {
        updateIcon(false);
    }

    themeToggle.addEventListener("click", () => {
        const isDark = body.classList.toggle("dark-mode");

        updateIcon(isDark);

        localStorage.setItem("theme", isDark ? "dark" : "light");
    });
});
