/*const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}*/

//Pasar de las sentencia de switch a usar if/else If & else
const tipodesuscipcion = "Basic";

if(tipodesuscipcion==="free"){
  	console.log("Solo puedes tomar los cursos gratis");
}
else if(tipodesuscipcion==="Basic"){
  console.log("Puedes tomar casi todos los cursos durante un mes");
}
else if(tipodesuscipcion==="expert"){
  console.log("Puedes tomar casi todos los cursos por un año");
}
else if	(tipodesuscipcion==="ExpertPlus"){
  console.log("tu y alguien mas pueden tomar todos los cursos por un año");
}
else {
  console.log("suscribete a platzi que esperas");
}