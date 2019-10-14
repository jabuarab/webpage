let materias=[{"id":"analisis2","hijo":"analisis1"}];

alert("esta entrando en la jsSheet");

function pintar(idpadre) {
 for (i=0;i<materias.length;i++){
  if (materias[i].id ==idpadre)
   document.getElementById(materias[i].hijo).style.color = "red";
  document.getElementById(materias[i].hijo).style.boxShadow = "0px 0px 0px 0.2rem rgba(216,217,219,0.5)";

 }
}
function despintar(idpadre) {
 for (i=0;i<materias.length;i++){
  if (materias[i].id ==idpadre)
   document.getElementById(materias[i].hijo).style.color = "#212519";
  document.getElementById(materias[i].hijo).style.boxShadow = "0px 0px 0px 0.0rem rgba(216,217,219,0.5)";

 }
}

function loop(){
 addEventListener("mousenter",function (event) {
  pintar( event.getSource().id)},false);


 addEventListener("mouseleave",function (event) {

  despintar( document.event.getcSource().id)},false);
}
idPadre = null;
loop()







