/*
 * Handles the action of the navigation bar toggle button for smaller devices
 * @Version 2-0-0
 * @Author Julian Lamm
 */
const navToggleButton = document.getElementById('nav-toggle-button-label')
const nav = document.querySelector('nav')

navToggleButton.addEventListener('click', function() {
  this.classList.toggle('is-active') // create / remove 'X' with the lines of the hambuger menu
  nav.classList.toggle('active') // open / close navigation bar
})