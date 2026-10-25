// dark mode button
const themeToggle = document.getElementById("theme-toggle");

// switch the theme, update the button text, and remember the choice
function setTheme(theme) {
  document.body.classList.toggle("dark", theme === "dark");
  themeToggle.textContent = theme === "dark" ? "Light Mode" : "Dark Mode";
  localStorage.setItem("theme", theme);
}

// use the saved theme when the page loads, light if there isn't one
setTheme(localStorage.getItem("theme") || "light");

// flip between light and dark on click
themeToggle.addEventListener("click", () => {
  const isDark = document.body.classList.contains("dark");
  setTheme(isDark ? "light" : "dark");
});
