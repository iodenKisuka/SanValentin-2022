function corazon(r, paso) {
  let puntos = [];
  for (var a = 0; a < 2 * Math.PI; a += paso) {
    let p = {};
    p.x = cx + 16 * r * (Math.sin(a) * Math.sin(a) * Math.sin(a));
    p.y =
      cy -
      13 * r * Math.cos(a) +
      5 * r * Math.cos(2 * a) +
      2 * r * Math.cos(3 * a) +
      1 * r * Math.cos(4 * a);
    puntos.push(p);
  }
  return puntos;
}

function funcionjavascript() {
  if ("content" in document.createElement("template")) {
    // Funciona!
  } else {
    // Usamos algún motor de templates
  }
}

function email(){
var emailError = document.getElementById ( "emailError");

nameError.innerHTML = "";

emailError.innerHTML = "";

si (document.contact.name.value == "") {

nameError.innerHTML = "Debe introducir un nombre!";

falso retorno;

}

si (document.contact.email.value == "") {

emailError.innerHTML = "Debe introducir una dirección de correo electrónico!";

falso retorno;

}

return true;

}