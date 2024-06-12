const Typed = require("typed.js");

const typed = new Typed("#textWelcome", {
  strings: ["My Creative Space. 👋"],
  typeSpeed: 50,
  loop: true,
  backDelay: 1000,
  fadeOut: true,
  fadeOutClass: "typed-fade-out",
  fadeOutDelay: 500,
});

const typed2 = new Typed("#textLearning", {
  strings: ["A learning artist", "and college student."],
  typeSpeed: 50,
  loop: true,
  backDelay: 1000,
  fadeOut: true,
  fadeOutClass: "typed-fade-in",
  fadeOutDelay: 500,
});
