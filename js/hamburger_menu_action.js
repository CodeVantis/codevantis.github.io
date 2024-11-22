/*
 * Handles the action of the navigation bar button (hamburger menu) for smaller devices
 * @Version 1-0-0
 * @Author Julian Lamm
 */

const toggleButton = document.querySelector('.toggle_button');
const navBar = document.getElementById('navBar'); // navigation bar
const content = document.getElementById('main'); // content area of the page

toggleButton.addEventListener('click', function() { // hamburger menu is clicked
    this.classList.toggle('is-active'); // create "X" with the lines of the button
    navBar.classList.toggle('active');
    content.classList.toggle('blur');
});