const INVESTIGATION_INDEX = 0
const OLI_INDEX = 9
const SURREAL_INDEX = 14
const PROCREATE_INDEX = 22
const MULTIMEDIA_INDEX = 40
const YEAR2019_INDEX = 48
const YEAR2015_INDEX = 65
const CONNOTATIVE_INDEX = 78
const DENOTATIVE_INDEX = 90
const IMAGE_INDEX = 117
const INTRO_INDEX = 142
const indices = [INVESTIGATION_INDEX, OLI_INDEX, SURREAL_INDEX, PROCREATE_INDEX, MULTIMEDIA_INDEX, YEAR2019_INDEX, YEAR2015_INDEX, CONNOTATIVE_INDEX, DENOTATIVE_INDEX, IMAGE_INDEX, INTRO_INDEX, 192]

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	//unsustainable - link nav appears to work-scroll later
  if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
    document.getElementById("home-nav").style.top = "0";
  } else {
    document.getElementById("home-nav").style.top = "-500px";
  }
}
function uiToVis() {
    document.querySelector('#exp-section>.active').classList.remove('active');
    document.querySelector('#exp-section>#vis').classList.add('active');
}

function visToUI() {
    document.querySelector('#exp-section>.active').classList.remove('active');
    document.querySelector('#exp-section>#ui').classList.add('active');
}

function playTab(elem) {
  document.querySelector('#play-nav-text>.active').classList.remove('active');
  elem.classList.add('active');
  let els = document.querySelectorAll('.shown');
  els.forEach(function(el) {
    el.classList.remove('shown');
  });
  if(document.getElementById("fine") == elem) {
    document.getElementById('investigation').parentElement.classList.add('shown');
    document.getElementById('oli').parentElement.classList.add('shown');
    document.getElementById('surreal').parentElement.classList.add('shown');
  }
  if(document.getElementById("digital") == elem) {
    document.getElementById('procreate').parentElement.classList.add('shown');
  }
  if(document.getElementById("multi") == elem) {
    document.getElementById('multimedia').parentElement.classList.add('shown');
  }
  if(document.getElementById("sketch") == elem) {
    document.getElementById('2019').parentElement.classList.add('shown');
    document.getElementById('2015').parentElement.classList.add('shown');
  }
  if(document.getElementById("course") == elem) {
    document.getElementById('vis41').parentElement.classList.add('shown');
    document.getElementById('vis80').parentElement.classList.add('shown');
    document.getElementById('dsgn1').parentElement.classList.add('shown');
  }
}



let slideIndex = 0
let slides = document.getElementsByClassName("thumbnail__image");

function changeSlideNum(n) {
  if (n == 1) {
    let asdf = indices.indexOf(slideIndex + 1)

    if (asdf >= 0) {
      slideIndex = indices[asdf - 1]
    } else {
      slideIndex += 1
    }
  } else if (n == -1) {
    let asdf = indices.indexOf(slideIndex)

    if (asdf >= 0) {
      slideIndex = indices[asdf + 1] - 1
    } else {
      slideIndex -= 1
    }
  }
  showSlides(slideIndex)
}

function thumbnailToOriginal(thumbnail) {
  const tnPos = thumbnail.indexOf('tn.')
  if (tnPos < 0) {
    return thumbnail
  }
  const imgPos = thumbnail.indexOf('/img')
  return thumbnail.slice(0, tnPos) + '.jpg'
}

function showSlides(n) {
  const overlayImage = document.querySelector('.overlay__inner .expanded-img');
  //const overlayCaption = document.querySelector('.overlay__inner p');
  overlayImage.src = thumbnailToOriginal(slides[slideIndex].src)
  //overlayCaption.innerHTML = slides[slideIndex].alt
}

function overlay() {
  // let investigationSlides = document.querySelectorAll('#investigation img')
  // let oliSlides = document.querySelectorAll('#oli img')
  // let surrealSlides = document.querySelectorAll('#surreal img')
  // let procreateSlides = document.querySelectorAll('#procreate img')
  // let multimediaSlides = document.querySelectorAll('#multimedia img')
  // let nineteenSlides = document.querySelectorAll('div.nineteen img')
  // let fifteenSlides = document.querySelectorAll('.fifteen img')
  // let vis41Slides = document.querySelectorAll('#vis41 img')
  // let introSlides = document.querySelectorAll('#vis80 img')

  // let slides = [investigationSlides, oliSlides, surrealSlides, procreateSlides, multimediaSlides, nineteenSlides, fifteenSlides, vis41Slides, introSlides]

  const buttons = document.querySelectorAll('.thumbnail');
  const overlay = document.querySelector('.overlay');
  const overlayImage = document.querySelector('.overlay__inner .expanded-img');
  //const overlayCaption = document.querySelector('.overlay__inner p');

  function open(e) {
    overlay.classList.add('open');
    const src = e.currentTarget.querySelector('img').src;
    slideIndex = parseInt(e.currentTarget.querySelector('img').id - 1)
    //overlayCaption.innerHTML = e.currentTarget.querySelector('img').alt
    overlayImage.src = thumbnailToOriginal(src);
  }

  function close() {
    overlayImage.src = ''
    overlay.classList.remove('open');
  }

  buttons.forEach(button => button.addEventListener('click', open));

  document.getElementById('qwer').addEventListener('click', function(e) {
    e = window.event || e
    if (this === e.target) {
      close()
    }
  })
}
