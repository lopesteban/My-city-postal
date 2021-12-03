//DOCUMENTO HTML
const $document = document.documentElement;
//HEAD
const $documentHead = document.head;
//BODY
const $documentBody = document.body;
$documentBody.id = "body";
//----------------------------------------------------------

//Creating scripts for html srtucture
const scriptsSrcArray = [
  "../JS/AddingElements.js",
  "../JS/CSS-classes.js",
  "../JS/Events.js",
  "../JS/BOM.js",
];
const $scriptsFragment = document.createDocumentFragment();
//Adding scripts to fragment
for (let i = 0; i < scriptsSrcArray.length; i++) {
  const $script = document.createElement("script");
  $script.setAttribute("src", `${scriptsSrcArray[i]}`);
  $scriptsFragment.appendChild($script);
}
//Adding JS scripts to html-
$documentBody.appendChild($scriptsFragment);
//------------------------------------------------------------------------------
//Creating link tag to head
const $linkToCSS = document.createElement("link");
$linkToCSS.rel = "stylesheet";
$linkToCSS.href = "../dist/main.css";

//-----------------------------------------------------------------------
//BODY
//Creating Divs
const $divsFragment = document.createDocumentFragment();

//Assigning images to every card
const imgReferences = [
  {
    img: "https://www.ngenespanol.com/wp-content/uploads/2018/08/Nuevo-museo-en-la-Estatua-de-la-Libertad.jpg",
    title: "New York",
  },
  {
    img: "https://estaticos.muyhistoria.es/media/cache/1140x_thumb/uploads/images/pyr/57baab765bafe83c45be0a61/paris.jpg",
    title: "Paris",
  },
  {
    img: "https://elviajerofeliz.com/wp-content/uploads/2017/10/Rutas-por-Londres.jpg",
    title: "London",
  },
];

//--------------------------------------------------------------
//CREATING CARDS WITH IMAGES
for (let i = 0; i < imgReferences.length; i++) {
  const $div = document.createElement("div");
  $div.classList.add("card-component", "item");
  //Creating images containers (figure)
  const $imgContainer = document.createElement("figure");
  $imgContainer.classList.add("img-container");
  $div.appendChild($imgContainer);
  //Appending images to imgContainer
  const $image = document.createElement("img");
  $image.id = `image-number-${i + 1}`;
  $image.src = imgReferences[i].img;
  $image.alt = imgReferences[i].title;
  $imgContainer.appendChild($image);
  //Creating info containers
  const $infoContainer = document.createElement("div");
  $infoContainer.classList.add("info-container");
  $div.appendChild($infoContainer);
  $divsFragment.appendChild($div);
}

//-------------------------------------------------------------------------
//OJO!!
/*Recuerda que al insertar los divs en un nodo fragmento, los divs NO son hijos del body, sino del nodo Fragmento*/
/*RECUERDA QUE AL USAR LA INSERCION DE UN FRAGMENTO,SI NO INSERTAS el fragmento al body; NO se puede aplicar las propiedades  'getElementById()', 'querySelector' o 'querySelectorAll' sobre el 'document', sino sobre el fragmento en cuestion. */

//First Card---------------------------------------------------------------------------------------------------------------
const $firstCard = $divsFragment.children[0];
//First Card-Image
const $firstImage = $firstCard.querySelector("img");
//First Card-Text
const $firstContent = $divsFragment.children[0].children[1];
$firstContent.innerHTML = `<h2> New York </h2>`;

//Second Card----------------------------------------------------------------------------------------------------------------
const $secondCard = $divsFragment.children[1];
//Second Card-Image
const $secondImage = $secondCard.querySelector("img");
//Second Card-Text
const $secondContent = $divsFragment.children[1].children[1];
$secondContent.innerHTML = `<h2> Paris </h2>`;

//Third Card------------------------------------------------------------------------------------------------------------------
const $thirdCard = $divsFragment.children[2];
//Third Card-Image
const $thirdImage = $thirdCard.querySelector("img");
//Third Card-Text
const $thirdContent = $divsFragment.children[2].children[1];
$thirdContent.innerHTML = `<h2> London </h2>`;
