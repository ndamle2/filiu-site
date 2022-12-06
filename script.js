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
}
