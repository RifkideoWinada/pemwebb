// Hamburger menu toggle
const hamburger = document.getElementById('hamburger-menu');
const navList = document.getElementById('nav-list');

hamburger.addEventListener('click', () => {
    navList.classList.toggle('active');
});

// Menampilkan tahun saat ini di footer
const currentYear = document.getElementById('current-year');
currentYear.textContent = new Date().getFullYear();
