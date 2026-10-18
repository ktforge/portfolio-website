// Grab the theme toggle button
const themeToggle = document.getElementById("theme-toggle");

// Apply a theme, update the button label, and save the choice
function setTheme(theme) {
  document.body.classList.toggle("dark", theme === "dark");
  themeToggle.textContent = theme === "dark" ? "Light Mode" : "Dark Mode";
  localStorage.setItem("theme", theme);
}

// Load the saved theme when the page opens (default is light)
setTheme(localStorage.getItem("theme") || "light");

// Switch themes when the button is clicked
themeToggle.addEventListener("click", () => {
  const isDark = document.body.classList.contains("dark");
  setTheme(isDark ? "light" : "dark");
});
