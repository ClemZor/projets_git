function triangle(nbr_caract, param) {
		var ligne = "";
  for(var i=0 ; i < nbr_caract; i++) {
 		ligne = ligne + param;
 }
	console.log(ligne);
 }
 
function rev_triangle(nbr_caract, param)	{

	for (var j=nbr_caract ; j > 0; j--) {
  		triangle(j, param);
  }
 }
 
 rev_triangle(7, " z");
