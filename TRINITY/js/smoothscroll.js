if (ScrollTrigger.isTouch !==1) {
  ScrollSmoother.create({
  wrapper: '.wrapperForSrooll',
  content: '.contentForScroll',
  smooth: 1.5,
  effects: true
})

gsap.fromTo('.main', {opacity:1}, {
  opacity: 0,
  scrollTrigger: {
    trigger: '.main',
    start: 'center',
    end: 'bottom',


    scrub: true 
  }
  })

let sections = gsap.utils.toArray('section')

sections.forEach(item => {
  gsap.fromTo(item, {opacity:1}, {
  opacity: 0,
  scrollTrigger: {
    trigger: item,
    start: 'center',
    end: 'bottom',


    scrub: true 
  }
  })
})

}