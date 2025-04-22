/*
 * Sets and loads the languages
 * @Version 2-0-1
 * @Author Julian Lamm
 */
const languageSelect = document.getElementById('language-select')
let translations = {}

function loadTranslations(lang) {
  return fetch('../translations/translations_' + lang + '.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to load translations: ' + response.statusText)
      }
      return response.json()
    })
    .then(data => {
      translations = data
      setLanguage(lang)
    })
    .catch(error => {
      console.error(error)
    })
}

function setLanguage(lang) {
  if (!translations[lang]) {
    console.error('Language ' + lang + ' is not available.')
    return
  }

  const elements = document.querySelectorAll('[data-i18n]')
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n')
    el.innerHTML = translations[lang][key]
  })
  localStorage.setItem('language', lang)
}

// website is loaded
document.addEventListener('DOMContentLoaded', () => {
  const defaultLanguage = navigator.language.startsWith('de') ? 'de' : 'en' // determine Browser language
  const savedLanguage   = localStorage.getItem('language') || defaultLanguage

  loadTranslations(savedLanguage)
  languageSelect.value = savedLanguage
})

// another language is selected currently
languageSelect.addEventListener('change', (event) => {
  const selectedLanguage = event.target.value
  loadTranslations(selectedLanguage)
})