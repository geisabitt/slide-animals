export default class Slide {
  constructor(slide, wrapper) {
    this.slide = document.querySelector(slide)
    this.wrapper = document.querySelector(wrapper)
  }
  /* eslint-disable-next-line class-methods-use-this, lines-between-class-members */
  onStart(event) {
    event.preventDefault()
    console.log('click mouse')
    this.wrapper.addEventListener('mousemove', this.onMove)
  }

  onMove(event) {
    console.log('moveu mouse')
  }

  onEnd() {
    console.log('acabou')
    this.wrapper.removeEventListener('mousemove', this.onMove)
  }

  bindEvents() {
    // Fazer o bind para manter o contexto de 'this'
    this.onStart = this.onStart.bind(this)
    this.onMove = this.onMove.bind(this)
    this.onEnd = this.onEnd.bind(this)
  }

  addSlideEvents() {
    this.wrapper.addEventListener('mousedown', this.onStart)
    this.wrapper.addEventListener('mouseup', this.onEnd)
  }

  init() {
    this.bindEvents()
    this.addSlideEvents()
    return this
  }
}
