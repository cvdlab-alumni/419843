
function capitalizeOneWord(word){		//ex03a
	return word.charAt(0).toUpperCase() + word.slice(1);
	}

function capitalizeMoreWords(proposition){		//ex03b
	var array = proposition.split(" ").map(function(item){ return capitalize(item);})
	var riga =array.join(' ');
	return riga;
}
