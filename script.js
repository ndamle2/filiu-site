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
  }
}
