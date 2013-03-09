
function createIntegerArray(n){		//ex02a
	var array = [];
	for(var i=0; i<n; i++)
		array.push(Math.floor(Math.random()*100));
	return array;
}

var a = createIntegerArray(15);

a.filter(function(item){return item%2!==0;}).		//ex02b
	sort(function(value1, value2){return value1-value2;});		//ex02c
