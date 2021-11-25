const print = text => console.log(text)
const $ = selector => document.querySelector(selector)
const $$ = selector => document.querySelectorAll(selector)
// #############################################

const nav = $('#header nav')
const toggle = $$('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', () => {
    nav.classList.toggle('show')
  })
}

const links = $$('nav ul li a')

for (const link of links) {
  link.addEventListener('click', () => {
    nav.classList.remove('show')
  })
}

const header = $('#header')
const navHeight = header.offsetHeight
const changeHeaderWhenScroll = () => {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links`,
  footer.brand,
  footer.social,
  { interval: 100 }
)
const backToTopButton = $('.back-to-top')
const backToTop = () => {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

const sections = $$('main section[id]') // a busca só precisa estar dentro da função caso seja necessário buscar o elemento a cada chamada da função, ou seja, apenas caso o elemento possa ser modificado, o que não é o caso. Tudo ficará no mesmo lugar emq ue já está, então, não é necessário ficar buscando novamente.
const activateMenuAtCurrentSection = () => {
  const checkpoint = window.scrollY + (navHeight / 8) * 4
  // const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    const link = $(`nav ul li a[href="#${sectionId}"]`)
    if (checkpointStart && checkpointEnd) {
      link.classList.add('active')
    } else {
      link.classList.remove('active')
    }
  }
}

window.addEventListener('scroll', () => {
  changeHeaderWhenScroll()
  backToTop()
})
