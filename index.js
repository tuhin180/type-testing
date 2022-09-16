const images = [
  "image/img-1.jfif",
  "image/img-2.jfif",
  "image/img-3.jfif",
  "image/img-4.jfif",
  "image/img-5.jfif",
  "image/img-6.jfif",
];
let imageindex = 0;
const container = document.getElementById("image-container");
setInterval(() => {
  if (imageindex === images.length) {
    imageindex = 0;
  }
  const Imglink = images[imageindex];
  container.setAttribute("src", Imglink);
  imageindex++;
}, 1000);
