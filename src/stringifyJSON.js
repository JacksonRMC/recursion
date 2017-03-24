// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
	var stringified = [];
    var stringify = "{";

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
    // each piece key could possibly be a stirng, can handle with recursion,
    // else if statement can handle emtpy objects. 
    //
       for (var el in obj) {
      	if(Object.values(obj).length === 1){
        stringify += (stringifyJSON(el) + ":" + stringifyJSON(obj[el]));  
      	} else {
      	stringify += (stringifyJSON(el) + ":" + stringifyJSON(obj[el]));  
      	}
       }

    return stringify + "}";


    }
};

