const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Function to apply the theme and update the button text
const applyTheme = (theme) => {
    if (theme === 'dark') {
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }
};

// This function runs immediately on script load
const initializeTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    // If there's a saved theme, use it
    if (savedTheme) {
        applyTheme(savedTheme);
    } else {
        // Otherwise, check the user's system preference as the default
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        applyTheme(prefersDark ? 'dark' : 'light');
    }
};

// Event listener for the toggle button
themeToggleButton.addEventListener('click', () => {
    const newTheme = body.classList.contains('dark-mode') ? 'light' : 'dark';
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
});

// Initialize the theme when the script is loaded
initializeTheme();