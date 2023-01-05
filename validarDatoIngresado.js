dato=prompt("ingrese si es una computador, un celular o un cable");
function queArticuloSoy (){
  if (articulo == "computadora"){
    return "soy una compu";
  }
	else if (articulo == "celular"){
		return "soy un celular";
	}
else if	(articulo == "cable"){
	return "soy un cable";
}
else{
  return "soy otra articulo";
}
}
queArticuloSoy(dato);

