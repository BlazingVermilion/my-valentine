const text = document.getElementById("text");
const buttons = document.getElementById("buttons");
const gif = document.getElementById("gif");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const bgm = document.getElementById("bgm");

window.addEventListener("load", () => {
  bgm.muted = false;
  bgm.play().catch(() => {});
});


const lines = [
  {
    text: "I know you have a lot on your mind lately,<br>and life hasn’t been the easiest for you.",
    gif: "assets/images/1.gif"
  },
  {
    text: "You’ve been working so hard for your exams,<br>and I just want you to know you’re doing amazing, even on the days you don’t feel like it.",
    gif: "assets/images/2.gif"
  },
  {
    text: "I was thinking maybe you deserve a small escape from the stress —<br>a warm evening, good food, and a gentle smile.",
    gif: "assets/images/3.gif"
  },
  {
    text: "I’ve made a reservation for two at Johanns Wirtshaus im Gentner.",
    gif: "assets/images/4.jpg"
  },
  {
    text: "So… would you make me the happiest guy and be my Valentine? ❤️",
    gif: "assets/images/5.gif"
  }
];

let index = 0;
let accepted = false;

/* CLICK TO CHANGE TEXT */
document.body.addEventListener("click", () => {

  if (index >= lines.length) return;

  text.style.opacity = 0;
  gif.style.opacity = 0;

  setTimeout(() => {
    text.innerHTML = lines[index].text;
    text.classList.remove("intro");

    gif.src = lines[index].gif;
    gif.classList.remove("hidden");

    text.style.opacity = 1;
    gif.style.opacity = 1;

    index++;

    if (index === lines.length) {
      setTimeout(() => {
        buttons.classList.remove("hidden");
      }, 800);
    }

  }, 800);
});

/* HOVER YES -> CHANGE GIF */
yesBtn.addEventListener("mouseenter", () => {
  if (!accepted && index === lines.length) {
    gif.src = "assets/images/6.gif";
  }
});

/* LEAVE YES -> BACK TO GIF 5 */
yesBtn.addEventListener("mouseleave", () => {
  if (!accepted && index === lines.length) {
    gif.src = lines[lines.length - 1].gif;
  }
});

/* YES BUTTON CLICK */
yesBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  accepted = true;

  text.style.opacity = 0;
  gif.style.opacity = 0;

  setTimeout(() => {

    text.innerHTML = "Yayyy ❤️ I will pick you up at 17h45 14/02 😽";
    gif.src = "assets/images/7.gif";

    buttons.classList.add("hidden");

    text.style.opacity = 1;
    gif.style.opacity = 1;

  }, 800);
});

/* NO BUTTON RUN AWAY */
noBtn.addEventListener("mouseover", function() {
  const x = Math.random() * (window.innerWidth - this.offsetWidth);
  const y = Math.random() * (window.innerHeight - this.offsetHeight);

  this.style.position = "absolute";
  this.style.left = x + "px";
  this.style.top = y + "px";
});
