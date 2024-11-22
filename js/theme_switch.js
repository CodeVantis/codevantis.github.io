/*
 * Switches between dark- and light-mode
 * @Version 1-0-0
 * @Author Julian Lamm
 */

let isDarkmode = localStorage.getItem('darkmode') || null
const themeSwitch = document.getElementById('theme-switch')

const enableDarkmode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', 'active')
}

const disableDarkmode = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', null)
}

// website is loaded
if(isDarkmode === "active") enableDarkmode()

// theme-switch is clicked
themeSwitch.addEventListener("click", () => {
    isDarkmode = localStorage.getItem('darkmode') || null
    isDarkmode !== "active" ? enableDarkmode() : disableDarkmode()
})