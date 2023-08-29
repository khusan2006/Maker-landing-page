const navbar = document.querySelector('.navbar-links')
const menuBtn = document.querySelector('.menu-btn')
const closeBtn = document.querySelector('.close-btn')

// handling menu opening on mobile phones
menuBtn.addEventListener( 'click', () => {
    navbar.classList.add('active');
    menuBtn.classList.add('remove')
    closeBtn.classList.add('active')
})

closeBtn.addEventListener( 'click', () => {
    navbar.classList.remove('active');
    menuBtn.classList.remove('remove')
    closeBtn.classList.remove('active')
})