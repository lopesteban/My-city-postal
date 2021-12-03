//Propiedades de solo lectura
/*clientLeft/clientTop 
clientWidth/clientHeight – el ancho/alto del contenido incluyendo rellenos, pero sin la barra de desplazamiento.
scrollWidth/scrollHeight 
scrollLeft/scrollTop  */

console.log($document.clientLeft);
console.log($document.clientTop);
console.log($document.clientWidth);
console.log($document.clientHeight);

//Eventos del Window
//Redimensionamiento de la ventaan
/*window.addEventListener("resize", (e) => {
  console.clear();
  console.log($document.clientWidth);
  console.log($document.clientHeight);
  console.log(e);
});*/

//Desplazamiento con barra scroll
//$documentBody.style.cssText = "height: 1000px; width: 1500px";

/*window.addEventListener("scroll", (e) => {
  console.clear();
  console.log($document.scrollTop);
  console.log($document.scrollLeft);
  console.log($firstCard.getBoundingClientRect());
  console.log(e);
});*/

//Evento del document
//Carga del documento (DOMContentLoaded): Este metodo es aconsejable usar por encima del evento "Load".
