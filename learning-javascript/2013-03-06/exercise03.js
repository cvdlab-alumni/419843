
for(var i=1; i<=10; i++){
	var riga = "";
	var valore;
	for(var j=1; j<=10; j++){
		if(j===i)
			valore = 1;
		else
			valore = 0;
		riga = riga + " " + valore;
		if(j<10)
			riga = riga + ",";
	}
	console.log(riga);
};
