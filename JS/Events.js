//EVENT HANDLERS---------------------------------------------------------------------------------------------------
//a) Hovering images function
const hovering = (card, img) => {
  card.classList.toggle("hovering-cards");
  img.classList.toggle("gray-filter");
};

//b) Click on image
const clicking = () => {
  alert("You clicked");
};

//Hovering 1st card
$firstCard.addEventListener("mouseover", () =>
  hovering($firstCard, $firstImage)
);
$firstCard.addEventListener("mouseout", () =>
  hovering($firstCard, $firstImage)
);

//Hovering 2nd card
$secondCard.addEventListener("mouseover", () =>
  hovering($secondCard, $secondImage)
);
$secondCard.addEventListener("mouseout", () =>
  hovering($secondCard, $secondImage)
);

//Clicking on 2nd img
$secondCard.addEventListener("click", clicking, { once: true });

//Hovering 3rd card
$thirdCard.addEventListener("mouseover", () =>
  hovering($thirdCard, $thirdImage)
);
$thirdCard.addEventListener("mouseout", () =>
  hovering($thirdCard, $thirdImage)
);
