/*
 * Handles the scroll animation of the elements
 * @Version 2-0-0
 * @Author Julian Lamm
 */
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting) {
      entry.target.classList.add('active')
    } else {
      entry.target.classList.remove('active')
    }
  })
})

const revealElements = document.querySelectorAll('.reveal')
revealElements.forEach((el) => observer.observe(el))