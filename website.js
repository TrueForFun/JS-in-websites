const prevBtn = document.querySelector(`.prev`);
const nextBtn = document.querySelector(`.next`);
const galleryImg = document.querySelectorAll(`.gallery-img`);

let currentSelected = 0;

prevBtn.addEventListener(`click`, function () {
  galleryImg[currentSelected].classList.remove(`active`);
  currentSelected--;
  galleryImg[currentSelected].classList.add(`active`);
  nextBtn.disabled = false;

  if (currentSelected === 0) {
    prevBtn.disabled = true;
  }
});

nextBtn.addEventListener(`click`, function () {
  galleryImg[currentSelected].classList.remove(`active`);
  currentSelected++;
  galleryImg[currentSelected].classList.add(`active`);
  prevBtn.disabled = false;

  if (galleryImg.length === currentSelected + 1) {
    nextBtn.disabled = true;
  }
});
