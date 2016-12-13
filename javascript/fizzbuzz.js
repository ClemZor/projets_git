function main () {
	
	faireListeNombre(10,40);
}


function fizzbuzzer(nombre)   {

	if  (nombre %3 ==0 && nombre %5 !==0)  	{ 
		console.log("fizz"); 
	}
	else if (nombre %5 ==0 && nombre %3 !==0)  	{ 
		console.log("buzz");
	}
	else if (nombre %3 ==0 && nombre %5 ==0)	{ 
		console.log("fizzbuzz");
	}
	else console.log(nombre);
}


function faireListeNombre(nb_depart, nb_fin)	{

	for (var i=nb_depart; i <= nb_fin ; i++) {

		fizzbuzzer(i);
	}
}

main();
