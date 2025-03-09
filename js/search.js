/*
 * Handles the action of a search field
 * @Version 1-0-0
 * @Author Julian Lamm
 */
const projects = document.querySelectorAll('.item')

function filterItems() {
  const searchValue = searchInputField.value.toLowerCase()

  projects.forEach(project => {
    const keywords = project.getAttribute('item-keywords').toLowerCase()
    
    if(searchValue === '' || keywords.includes(searchValue)) {
      project.style.display = 'block'
    } else {
      project.style.display = 'none'
    }
  })
}

/* SEARCH FIELD */
const searchField = document.getElementById('search')
const searchIcon  = searchField.querySelector('.icon')
const searchClear = searchField.querySelector('.clear')
const searchInputField = searchField.querySelector('#search-input')

searchIcon.onclick = function() {
  searchField.classList.toggle('active') // open / close search field
}

searchClear.onclick = function() {
  searchInputField.value = '' // clear input field
  filterItems()
}

searchInputField.onkeyup = function() {
  filterItems()
}