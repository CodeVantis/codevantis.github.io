/*
 * Handles the action of search and filter fields
 * @Version 2-0-0
 * @Author Julian Lamm
 */
const projects = document.querySelectorAll('.card')

function filterProjects() {
  const searchValue = searchInputField.value.toLowerCase()
  const filterCategory = categoryFilter.getElementsByClassName('activated')[0].textContent

  projects.forEach(project => {
    const keywords = project.getAttribute('card-keywords').toLowerCase()
    const projectCategory = project.querySelector('.badges .category').textContent

    if((searchValue === '' || keywords.includes(searchValue))
      && (filterCategory.includes('All') || filterCategory.includes(projectCategory))) {
      project.style.display = 'inline-block'
    } else {
      project.style.display = 'none'
    }
  })
}

/* CATEGORY FILTER */
const categoryFilter = document.getElementById('categoryFilter')
const filterOptions = categoryFilter.querySelectorAll('.filter-option')

for (var i = 0; i < filterOptions.length; i++) { // add an event listener to the buttons
  filterOptions[i].addEventListener('click', function() {
    categoryFilter.getElementsByClassName('activated')[0].classList.remove('activated') // remove old button selection
    this.classList.add('activated') // set new button selection

    filterProjects()
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
  filterProjects()
}

searchInputField.onkeyup = function() {
  filterProjects()
}