
function createArray(n){	//exercise 01a
	var array = [];
	for(var i=0;i<=n;i++)
		array.push(i);
	return array;
}

var a = createArray(11);

a.
  filter(function(item){return item%2===0;}).	//exercise 01b
		map(function(item){return item*2;}).	//exercise 01c
			filter(function(item){return item%4===0;}).	//exercise 01d
				reduce(function(prev,cur,index, array){return prev+cur;});	//exercise 01e
