let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "flex";
}

let pongal_slideIndex = 1;
showSlides_pongal(pongal_slideIndex);

// Next/previous controls
function plusSlides_pongal(n) {
  console.log("pong");
  showSlides_pongal((pongal_slideIndex += n));
}

function showSlides_pongal(n) {
  let i;
  let slides = document.getElementsByClassName("urSlides");
  if (n > slides.length) {
    pongal_slideIndex = 1;
  }
  if (n < 1) {
    pongal_slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[pongal_slideIndex - 1].style.display = "flex";
}

let slideIndex_26th = 1;
showSlides_26th(slideIndex_26th);
// Next/previous controls
function plusSlides_26(n) {
  console.log("out");
  showSlides_26th((slideIndex_26th += n));
}

function showSlides_26th(n) {
  let i;
  let slides = document.getElementsByClassName("ourSlides");
  if (n > slides.length) {
    slideIndex_26th = 1;
  }
  if (n < 1) {
    slideIndex_26th = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex_26th - 1].style.display = "flex";
}

function display_pic(para) {
  if (para == "tk22") {
    let tk = document.getElementById(para);
    tk.style.display = "flex";
    let pongal = document.getElementById("pongal23");
    pongal.style.display = "none";
    let var_26 = document.getElementById("The_26");
    var_26.style.display = "none";
  } else if (para == "pongal23") {
    let tk = document.getElementById("tk22");
    tk.style.display = "none";
    let pongal = document.getElementById(para);
    pongal.style.display = "flex";
    let var_26 = document.getElementById("The_26");
    var_26.style.display = "none";
  } else if (para == "The_26") {
    let tk = document.getElementById("tk22");
    tk.style.display = "none";
    let pongal = document.getElementById("pongal23");
    pongal.style.display = "none";
    let var_26 = document.getElementById("The_26");
    var_26.style.display = "flex";
  }
}
// function initAudioPlayer() {
//   audio = new Audio("memories/audio/music.mp3");

//   audio.loop = true;
//   audio.play;

//   // playbtn = document.getElementById("playpausebtn");
//   // mutebtn = document.getElementById("mutebtn");

//   // // playbtn.addEventListener("click", playPause);
//   // mutebtn.addEventListener("click", mute);

//   // function mute() {
//   //   if (audio.muted) {
//   //     audio.muted = false;
//   //     mutebtn.style.background =
//   //       "url('https://img.icons8.com/ios/30/ffd700/high-volume--v2.png') no-repeat";
//   //   } else {
//   //     audio.muted = true;
//   //     mutebtn.style.background =
//   //       "url('https://img.icons8.com/ios/30/ffd700/sound-speaker.png') no-repeat";
//   //   }
//   // }
// }

// window.addEventListener("load", initAudioPlayer);
let pla = document.getElementById("play");
let pas = document.getElementById("mute");
let audio1 = new Audio("music.mp3");

function play_mus() {
  audio1.play();
  audio1.loop = true;
  pla.style.display = "none";
  pas.style.display = "inline";
  audio1.muted = false;
}
function mute_mus() {
  pla.style.display = "inline";
  pas.style.display = "none";
  audio1.muted = true;
}
