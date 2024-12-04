/*
 * Handles the action of the navigation bar button (hamburger menu) for smaller devices
 * @Version 1-0-1
 * @Author Julian Lamm
 */

const toggleButton = document.querySelector('.toggle_button');
const navBar = document.getElementById('navBar'); // navigation bar

toggleButton.addEventListener('click', function() { // hamburger menu is clicked
    this.classList.toggle('is-active'); // create / remove "X" with the lines of the button
    navBar.classList.toggle('active'); //open / close navigation bar
});