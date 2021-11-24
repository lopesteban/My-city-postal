//HEAD
const $documentHead = document.head;
//BODY
const $documentBody = document.body;

//----------------------------------------------------------

//Creating scripts for html srtucture
const scriptsSrcArray = ["../JS/AddingElements.js", "../JS/CSS-classes.js"];
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
for (let i = 0; i < 3; i++) {
  const $div = document.createElement("div");
  $div.classList.add("item", "card-component");
  //Creating images containers (figure)
  const $imgContainer = document.createElement("figure");
  $imgContainer.classList.add("img-container");
  $div.appendChild($imgContainer);
  //Appending images to imgContainer
  const $image = document.createElement("img");
  $image.src = imgReferences[i].img;
  $image.alt = imgReferences[i].title;
  $imgContainer.appendChild($image);
  //Creating info containers
  const $infoContainer = document.createElement("div");
  $infoContainer.classList.add("item", "info-container");
  $div.appendChild($infoContainer);
  $divsFragment.appendChild($div);
}
