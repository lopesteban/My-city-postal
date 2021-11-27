//HEAD
const $documentHead = document.head;
//BODY
const $documentBody = document.body;

//----------------------------------------------------------

//Creating scripts for html srtucture
const scriptsSrcArray = [
  "../JS/AddingElements.js",
  "../JS/CSS-classes.js",
  "../JS/Events.js",
  "../JS/Functions.js",
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
  $image.id = `image-number-${i + 1}`;
  $imgContainer.appendChild($image);
  //Creating info containers
  const $infoContainer = document.createElement("div");
  $infoContainer.classList.add("item", "info-container");
  $div.appendChild($infoContainer);
  $divsFragment.appendChild($div);
}
//-------------------------------------------------------------------------
//OJO!!
/*Recuerda que al insertar los divs en un nodo fragmento, los divs NO son hijos del body, sino del nodo Fragmennto*/
console.log($divsFragment.children);

//First Card
const $firstContent = $divsFragment.children[0].children[1];
$firstContent.innerHTML = `<h2> New York </h2>`;
//First Image
const $firstImg = document.getElementById("image-number-1");

//Second Card
const $secondContent = $divsFragment.children[1].children[1];
$secondContent.innerHTML = `<h2> Paris </h2>`;
//Second image
const $secondImg = document.getElementById("image-number-2");

//Third Card
const $thirdContent = $divsFragment.children[2].children[1];
$thirdContent.innerHTML = `<h2> London </h2>`;
//Third image
const $thirdImg = document.getElementById("image-number-3");
