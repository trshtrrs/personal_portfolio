// JavaScript Interactive Feature: Dark/Light Mode Switcher

// Select the toggle button element
const themeToggleBtn = document.getElementById('theme-toggle');

// Function to handle theme switching
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    
    if (currentTheme === 'dark') {
        // Switch to Light Pink Mode
        document.documentElement.setAttribute('data-theme', 'light');
        themeToggleBtn.textContent = '🌙 Dark Mode';
    } else {
        // Switch to Dark Pink/Plum Mode
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggleBtn.textContent = '☀️ Light Mode';
    }
}

// Add click listener to button
themeToggleBtn.addEventListener('click', toggleTheme);