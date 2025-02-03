const menuIcon = document.guerySelector(".menu-icon");
const navLinks = document.guerySelector('.nav-links');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
}
