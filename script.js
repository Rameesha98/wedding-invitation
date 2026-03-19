// SELECT MUSIC
let music = document.getElementById("bgMusic");


// ===============================
// ENTER BUTTON → PLAY MUSIC
// ===============================
function enterSite(){

  const hero = document.getElementById("hero");
  const main = document.getElementById("main");

  // PLAY MUSIC (NO ERROR)
  music.muted = false;
  music.volume = 0;
  music.play();

  // SMOOTH FADE-IN
  let vol = 0;
  let fade = setInterval(()=>{
    if(vol < 0.4){
      vol += 0.02;
      music.volume = vol;
    } else {
      clearInterval(fade);
    }
  },200);

  // OPTIONAL VIBRATION (MOBILE)
  if (navigator.vibrate) {
    navigator.vibrate(50);
  }

  // ANIMATION
  hero.classList.add("fade-out");

  setTimeout(()=>{
    hero.style.display = "none";
    main.style.display = "flex";
    main.classList.add("fade-in");
  },800);
}


// ===============================
// MUSIC TOGGLE BUTTON
// ===============================
function toggleMusic(){
  music.paused ? music.play() : music.pause();
}


// ===============================
// GOOGLE MAP LINKS
// ===============================
function openPoruwa(){
  window.open("https://maps.app.goo.gl/fx43S51jtNBVq9h79");
}

function openWedding(){
  window.open("https://maps.app.goo.gl/GQ1GDR7QPBP6pFQ18");
}


// ===============================
// COUNTDOWN TIMER
// ===============================
let countDate = new Date("Sept 17, 2026 10:00:00").getTime();

setInterval(()=>{
  let now = new Date().getTime();
  let gap = countDate - now;

  let d = Math.floor(gap/(1000*60*60*24));
  let h = Math.floor((gap%(1000*60*60*24))/(1000*60*60));
  let m = Math.floor((gap%(1000*60*60))/(1000*60));

  document.getElementById("countdown").innerHTML =
    d + " Days " + h + " Hours " + m + " Min";
},1000);