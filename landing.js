const productCards = document.querySelectorAll(".product-card");
productCards.forEach((card) => {
  // rating text
  const ratingText = document.createElement("span");
  ratingText.textContent = "0/5";
  ratingText.style.display = "block";
  ratingText.style.marginTop = "10px";

  //Add stars
  const starContainer = document.createElement("div");
  starContainer.style.textAlign = "center";

  const totalStars = 5;
  let selectedRating = 0;

  for (let i = 0; i < totalStars; i++) {
    const star = document.createElement("span");
    star.textContent = "★";
    star.style.fontSize = "30px";
    star.style.cursor = "pointer";
    star.style.color = "gray";

    star.addEventListener("mouseover", () => {
      for (let j = 0; j < totalStars; j++) {
        if (j <= i) {
          starContainer.children[j].style.color = "gold";
        } else {
          starContainer.children[j].style.color = "gray";
        }
      }
    });

    star.addEventListener("mouseout", () => {
      for (let j = 0; j < totalStars; j++) {
        if (j < selectedRating) {
          starContainer.children[j].style.color = "gold";
        } else {
          starContainer.children[j].style.color = "gray";
        }
      }
    });

    star.addEventListener("click", () => {
      selectedRating = i + 1;
      ratingText.textContent = `${selectedRating}/5`;
    });

    starContainer.appendChild(star);
  }

  //  favorite icon
  const favIcon = document.createElement("span");
  favIcon.textContent = "♥";
  favIcon.style.fontSize = "45px";
  favIcon.style.cursor = "pointer";
  favIcon.style.color = "black";

  favIcon.addEventListener("click", () => {
    if (favIcon.style.color === "red") {
      favIcon.style.color = "black";
    } else {
      favIcon.style.color = "red";
    }
  });

  card.querySelector(".card-body").appendChild(ratingText);
  card.querySelector(".card-body").appendChild(starContainer);
  card.querySelector(".card-body").appendChild(favIcon);
});
//slider
const images = ["q1.jpg", "q2.jpg", "q3.jpg", "q4.jpg"];

const sliderImage = document.getElementById("slider-image");

function showImage(index) {
  sliderImage.src = images[index];
}

let currentIndex = 0;
showImage(currentIndex);

function nextImage() {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  showImage(currentIndex);
}
function prevImage() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  showImage(currentIndex);
}

setInterval(() => {
  nextImage();
}, 4000);

let nextBtn = document.getElementById("nextBtn");
nextBtn.addEventListener("click", nextImage);
let prevBtn = document.getElementById("prevBtn");
prevBtn.addEventListener("click", prevImage);

//counter
let count = 0;
function updateCounter() {
  let counter = document.getElementById("counter");
  counter.textContent = count;
}

const buyButtons = document.querySelectorAll(".buy-btn");
let msg_count = document.getElementById("msg_count");
buyButtons.forEach((button) => {
  button.addEventListener("click", () => {
    count++;
    updateCounter();
    msg_count.innerHTML = "Item added to your cart!";
  });
});
document.getElementById("reset-btn").addEventListener("click", () => {
  count = 0;
  updateCounter();
});
