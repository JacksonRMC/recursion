// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
	var stringified = [];
    var stringify = "{";
     var results =[];

    if(typeof obj === 'string'){
  		return "\"" + obj + "\"";
  	} else if(typeof obj === 'number'){
  		return "" + obj;
  	} else if(obj === null || obj === undefined || typeof obj === 'boolean'){
  		return "" + obj;
  	} 

    else if (Array.isArray(obj)) {
        if(obj[0] === undefined){
            	return '[]';
        }
        else {
            obj.forEach(function(element){
            	stringified.push(stringifyJSON(element));
            });
          return '[' + stringified + ']';
        }
    }

   
 	else if(typeof obj === 'object'){
      	if(Object.keys(obj).length === 0){
       		return '{}';
       	} else { 	
       	for (var el in obj) {
       		if(obj[el] instanceof Function || typeof obj[el] === undefined){
       			return '{}';
       		}
 	     results.push(stringifyJSON(el)+ ":" +stringifyJSON(obj[el]));  
       	}
       }
    return "{" + results + "}";
    }
};

