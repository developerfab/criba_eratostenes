var naturales = new Array();

function inicio(){

	var a = document.getElementById("numero").value;
	var lista_n = document.getElementById("lista-naturales");
	var lista_p = document.getElementById("lista-primos");
	var cantidad_p = document.getElementById("cantidad-primos");
	var texto="";
	//se limpian los campos:
	lista_n.innerHTML="";
	lista_p.innerHTML=texto;
	//se llena la lista
	for (var i = 1; i < a; i++) {
		naturales[i]=i+1;
		texto=texto+naturales[i]+", ";
	};

	lista_n.innerHTML=texto;
	texto="";
	console.log(naturales);

	//se averiguan los primos
	for(var i=1;i<Math.sqrt(naturales[naturales.length-1]);i++){
		criba(naturales[i],i);
	}
	//se imprimen la lista
	for (var i = 1; i < naturales.length; i++) {
		texto=texto+naturales[i]+", ";
	};

	lista_p.innerHTML=texto;
	cantidad_p.innerHTML = "Cantidad de numeros primos: "+(naturales.length-1);
	console.log(naturales);
	naturales=[];

}

function criba(numero,inicio){
	var pos;
	for (var i = inicio+1; i <naturales.length; i++) {
		if(naturales[i]%numero==0){
			pos = naturales.indexOf(naturales[i]);
			pos!=-1 ? naturales.splice(pos, 1):null;
		}
	};
}