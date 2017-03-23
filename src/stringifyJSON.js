// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
	var stringified = [];
    

    if(typeof obj === 'string'){
  		return "\"" + obj + "\"";
  	} else if(typeof obj === 'number'){
  		return "" + obj;
  	} else if(obj === null || obj === 'undifend' || typeof obj === 'boolean'){
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
    
    	
     } 
     else{

     for (var el in obj) {
        if (obj.hasOwnProperty(el)) {
              stringifyJSON(el);
         	}
            if (el.toString() && obj[el].toString()) {
                start += el.toString() + ": " + obj[el].toString();
            }
	         if (typeof obj[el] === 'object') {
	            start += stringifyJSON(obj[el]);    
	        }
           
  		}
  	 }
    }

    return stringify + "}"


    }
};



  // var stringify = "{";


  //   
  //       } 
  //    else{
  //    for (var el in obj) {
  //       if (obj.hasOwnProperty(el)) {
  //             stringifyJSON(el);
  //        	}
  //           if (el.toString() && obj[el].toString()) {
  //               start += el.toString() + ": " + obj[el].toString();
  //           }
	 //         if (typeof obj[el] === 'object') {
	 //            start += stringifyJSON(obj[el]);    
	 //        }
           
  // 		}
  // 	 }
  //   }

  //   return stringify + "}"