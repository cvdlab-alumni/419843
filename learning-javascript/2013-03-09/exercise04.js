function select(data, key, values){
	var array = [];
	values.forEach(function(item){
		data.forEach(function(item2){
			if(item===item2.name){
				var obj = { id: item2.id, name: item2.name};
				array.push(obj);
				}
			})
				
		})
	return array;
}
