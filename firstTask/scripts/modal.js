const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const closeBtn = document.getElementById('closeBtn');

// Show the mobile menu when the hamburger icon is clicked
hamburger.addEventListener('click', () => {
  mobileMenu.classList.add('active'); 
});

// Hide the mobile menu when the close button is clicked
closeBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
});
