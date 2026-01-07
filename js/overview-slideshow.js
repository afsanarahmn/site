document.addEventListener("DOMContentLoaded", () => {
  const slideTrack = document.querySelector(".slides-track");
  const prevBtn = document.querySelector(".slide-arrow.left");
  const nextBtn = document.querySelector(".slide-arrow.right");

  if (!slideTrack) return;

  const TOTAL_SLIDES = 11; // you have 1.png → 11.png
  let currentIndex = 0;
  let autoSlideInterval;

  /* Inject images */
  for (let i = 1; i <= TOTAL_SLIDES; i++) {
    const img = document.createElement("img");
    img.src = `assets/slideshow/${i}.png`;
    img.alt = `Overview slide ${i}`;
    slideTrack.appendChild(img);
  }

  function updateSlide() {
    slideTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % TOTAL_SLIDES;
    updateSlide();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + TOTAL_SLIDES) % TOTAL_SLIDES;
    updateSlide();
  }

  function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 4000);
  }

  function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
  }

  nextBtn.addEventListener("click", () => {
    nextSlide();
    resetAutoSlide();
  });

  prevBtn.addEventListener("click", () => {
    prevSlide();
    resetAutoSlide();
  });

  updateSlide();
  startAutoSlide();
});
