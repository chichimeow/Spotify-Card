const quotes = [
  "Stay positive, work hard, make it happen."
];

const flipCard = document.getElementById("flipCard");
const quoteText = document.getElementById("quoteText");

// Flip card
flipCard.addEventListener("click", () => {
  const card = document.querySelector(".card");
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  quoteText.textContent = quote;
  card.classList.toggle("flipped");
});

// Music buttons
document.querySelector(".play").addEventListener("click", e => {
  e.stopPropagation();
  alert("Play button clicked!");
});
document.querySelector(".prev").addEventListener("click", e => {
  e.stopPropagation();
  alert("Previous track!");
});
document.querySelector(".next").addEventListener("click", e => {
  e.stopPropagation();
  alert("Next track!");
});
// Dynamic background based on album image
const albumImage = document.getElementById("albumImage");

albumImage.addEventListener("load", () => {
  const vibrantColor = getAverageColor(albumImage);
  document.body.style.background = `linear-gradient(135deg, ${vibrantColor}, #000)`;
});

// Function to get average color of the image
function getAverageColor(img) {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = img.width;
  canvas.height = img.height;
  ctx.drawImage(img, 0, 0, img.width, img.height);

  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;

  let r = 0, g = 0, b = 0, count = 0;

  for (let i = 0; i < data.length; i += 4) {
    r += data[i];
    g += data[i + 1];
    b += data[i + 2];
    count++;
  }

  r = Math.floor(r / count);
  g = Math.floor(g / count);
  b = Math.floor(b / count);

  return `rgb(${r},${g},${b})`;
}