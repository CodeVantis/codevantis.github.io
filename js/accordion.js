/* 
 * Accordion Actionhandler
 * @Version 1-0-0
 * @Author Julian Lamm
 */
class Accordion {
  constructor(el) {
    this.el = el // <details>-element
    this.summary = el.querySelector('summary') // <summary>-element
    this.content = el.querySelector('.content') // <div class="content">-element
  
    this.animation = null // animation object (so we can cancel the animation)
    this.isClosing = false // if the element is closing
    this.isExpanding = false // if the element is expanding
    
    this.summary.addEventListener('click', (e) => this.onClick(e)) // detect user clicks on the <summary>-element
  }

  onClick(e) {
    e.preventDefault() // stop default behaviour from the browser

    this.el.style.overflow = 'hidden' // add an overflow on the <details>-element to avoid content overflowing

    if (this.isClosing || !this.el.open) { // check if the element is being closed or is already closed
      this.open()
    } else if (this.isExpanding || this.el.open) { // check if the element is being opened or is already opened
        this.close()
    }
  }

  close() {
    this.el.style.height = `${this.el.offsetHeight}px` // apply a fixed height on the element
    this.el.open = false // force the [open] attribute on the details element
    window.requestAnimationFrame(() => this.shrink()) // wait for the next frame to call the shrink function
  }

  shrink() {
    this.isClosing = true // set the element as "being closed"
    const startHeight = `${this.el.offsetHeight}px` // store the current height of the element
    const endHeight = `${this.summary.offsetHeight}px` // calculate the height of the summary-element

    if(this.animation) { // if there is already an animation running
        this.animation.cancel() // cancel the current animation
    }

    // start the animation
    this.animation = this.el.animate({
        height: [startHeight, endHeight] // set the keyframes from the startHeight to endHeight
    }, {
        duration: 400,
        easing: 'ease-out'
    })

    this.animation.onfinish = () => this.onAnimationFinish(false) // when the animation is complete, call onAnimationFinish()
    this.animation.oncancel = () => this.isClosing = false // if the animation is cancelled, isClosing variable is set to false
  }

  open() {
    this.el.style.height = `${this.el.offsetHeight}px` // apply a fixed height on the element
    this.el.open = true // force the [open] attribute on the details element
    window.requestAnimationFrame(() => this.expand()) //wait for the next frame to call the expand function
  }

  expand() {
    this.isExpanding = true // set the element as "being expanding"
    const startHeight = `${this.el.offsetHeight}px` // store the current height of the element
    const endHeight = `${this.summary.offsetHeight + this.content.offsetHeight}px` // calculate the open height of the element (summary height + content height)
    
    if(this.animation) { // if there is already an animation running
        this.animation.cancel() // cancel the current animation
    }

    // start the animation
    this.animation = this.el.animate({
        height: [startHeight, endHeight] // set the keyframes from the startHeight to endHeight
    }, {
        duration: 400,
        easing: 'ease-out'
    })

    this.animation.onfinish = () => this.onAnimationFinish(true) // when the animation is complete, call onAnimationFinish()
    this.animation.oncancel = () => this.isExpanding = false // if the animation is cancelled, isExpanding variable is set to false
  }

  onAnimationFinish(open) {
    this.el.open = open // set the open attribute based on the parameter
    this.animation = null // clear the stored animation
    this.isClosing = false // reset isClosing
    this.isExpanding = false // reset isExpanding
    this.el.style.height = this.el.style.overflow = '' // remove the overflow hidden and the fixed height
  }
}

document.querySelectorAll('details').forEach((el) => {
  new Accordion(el)
})