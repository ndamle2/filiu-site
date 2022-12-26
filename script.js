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



let slideIndex = 1
let slides = document.getElementsByClassName("project__image");

function setSlideNum(n) {
  slideIndex = n
  showSlides(slideIndex)
}

function changeSlideNum(n) {
  slideIndex += n
  showSlides(slideIndex)
}

function showSlides(n) {
  if (n > slides.length - 1) {slideIndex = 0}
  if (n < 0) {slideIndex = slides.length - 1}
  const overlayImage = document.querySelector('.overlay__inner img');
  const overlayCaption = document.querySelector('.overlay__inner p');
  overlayImage.src = slides[slideIndex].src
  overlayCaption.innerHTML = slides[slideIndex].alt
}

function overlay() {
  const buttons = document.querySelectorAll('.project');
  const overlay = document.querySelector('.overlay');
  const overlayImage = document.querySelector('.overlay__inner img');
  const overlayCaption = document.querySelector('.overlay__inner p');

  function open(e) {
    overlay.classList.add('open');
    const src = e.currentTarget.querySelector('img').src;
    slideIndex = parseInt(e.currentTarget.querySelector('img').id - 1)
    overlayCaption.innerHTML = e.currentTarget.querySelector('img').alt
    overlayImage.src = src;
  }
  
  function close() {
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