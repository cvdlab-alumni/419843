function identity (n) {
	for(var i = 0; i <n; i++){
		var riga = "";
		for(var j = 0; j<n; j++){
			if(j===i)
				riga = riga + " " + 1;
			else
				riga = riga + " " + 0;
		}
		console.log(riga);
		}
		return riga;
	}
