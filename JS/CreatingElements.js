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
$linkToCSS.href = "dist/main.css";

//-----------------------------------------------------------------------
//Creating divs
