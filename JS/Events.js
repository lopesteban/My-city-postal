//EVENT HANDLERS---------------------------------------------------------------------------------------------------
//a) Hovering images function
const hovering = (card, img) => {
  card.classList.toggle("hovering-cards");
  img.classList.toggle("gray-filter");
};

//EVENTS--------------------------------------------------------------------------------------------

//Night mode on body
document.addEventListener("click", (e) => {
  if (e.target === $documentBody) {
    $documentBody.classList.toggle("night-mode");
    $documentBody.querySelectorAll(".info-container").forEach((div) => {
      div.classList.toggle("night-mode-info");
    });
  }
  if (e.target === $firstImage || e.target === $firstContent) {
    open("https://en.wikipedia.org/wiki/New_York_City");
  }
  if (e.target === $secondImage || e.target === $secondContent) {
    open("https://en.wikipedia.org/wiki/Paris");
  }
  if (e.target === $thirdImage || e.target === $thirdContent) {
    open("https://en.wikipedia.org/wiki/London");
  }
});

//Hovering On
$documentBody.addEventListener("mouseover", (e) => {
  if (e.target === $firstImage || e.target === $firstContent) {
    hovering($firstCard, $firstImage);
  }
  if (e.target === $secondImage || e.target === $secondContent) {
    hovering($secondCard, $secondImage);
  }
  if (e.target === $thirdImage || e.target === $thirdContent) {
    hovering($thirdCard, $thirdImage);
  }
});

//Hovering Out
$documentBody.addEventListener("mouseout", (e) => {
  if (e.target === $firstImage || e.target === $firstContent) {
    hovering($firstCard, $firstImage);
  }
  if (e.target === $secondImage || e.target === $secondContent) {
    hovering($secondCard, $secondImage);
  }
  if (e.target === $thirdImage || e.target === $thirdContent) {
    hovering($thirdCard, $thirdImage);
  }
});
