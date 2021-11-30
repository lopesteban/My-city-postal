//EVENT HANDLERS---------------------------------------------------------------------------------------------------
//a) Hovering images function
const hovering = (card, img) => {
  card.classList.toggle("hovering-cards");
  img.classList.toggle("gray-filter");
};

//EVENTS

//Night mode on body
document.addEventListener("click", (e) => {
  if (e.target === $documentBody) {
    $documentBody.classList.toggle("night-mode");
    $documentBody.querySelectorAll(".info-container").forEach((div) => {
      div.classList.toggle("night-mode-info");
    });
  }
});

// //Event - Hovering 1st card
$firstCard.addEventListener("mouseover", () =>
  hovering($firstCard, $firstImage)
);
$firstCard.addEventListener("mouseout", () =>
  hovering($firstCard, $firstImage)
);

// //Event - Hovering 2nd card
$secondCard.addEventListener("mouseover", () =>
  hovering($secondCard, $secondImage)
);
$secondCard.addEventListener("mouseout", () =>
  hovering($secondCard, $secondImage)
);

// //Clicking on 2nd img
//$secondCard.addEventListener("click", clicking, { once: true });

// //Event - Hovering 3rd card
$thirdCard.addEventListener("mouseover", () =>
  hovering($thirdCard, $thirdImage)
);
$thirdCard.addEventListener("mouseout", () =>
  hovering($thirdCard, $thirdImage)
);

console.log($divsFragment.children);
