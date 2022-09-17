// const images = [
//   "image/img-1.jfif",
//   "image/img-2.jfif",
//   "image/img-3.jfif",
//   "image/img-4.jfif",
//   "image/img-5.jfif",
//   "image/img-6.jfif",
// ];
// let imageindex = 0;
// const container = document.getElementById("image-container");
// setInterval(() => {
//   if (imageindex === images.length) {
//     imageindex = 0;
//   }
//   const Imglink = images[imageindex];
//   container.setAttribute("src", Imglink);
//   imageindex++;
// }, 1000);
const display = document.getElementById("display");
const question = document.getElementById("question");
const startBtn = document.getElementById("starts");
const countdownOverlay = document.getElementById("countdown");
const resultModal = document.getElementById("result");
const modalBackground = document.getElementById("modal-background");

// variables
let userText = "";
let errorCount = 0;
let startTime = null;
let questionText = "";

const loadData = async () => {
  const res = await fetch("./text.json");
  const data = await res.json();
  questionText = data[Math.floor(Math.random() * data.length)];
  console.log(questionText);
  question.innerText = questionText;
};
loadData();
// Load and display question
// fetch("./text.json")
//   .then((res) => res.json())
//   .then((data) => {
//     questionText = data[Math.floor(Math.random() * data.length)];

//     question.innerText = questionText;
//   });
