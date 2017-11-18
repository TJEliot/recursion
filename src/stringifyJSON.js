// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  typeArray = ["boolean", "number", "string"]
  returner = [];
  if (typeof obj === "function"){
    return null;
  }
  if (obj === null){
    return "null";
  }
  if (typeArray.includes(typeof obj)){
    holder = obj;
    if (typeof obj === "string"){
      holder = '"' + obj + '"';
    }
  	returner.push("" + holder);
  } else if (Array.isArray(obj)){
    returner += "[";
  	for (var i=0; i<obj.length; i++){
  	  if (typeof obj[i] === "function"){
  	    return "'{}'";
  	  }
  		returner += stringifyJSON(obj[i]);
  		if (i !== obj.length -1){
  		  returner += ",";
  		}
  }
    returner += "]";
  } else {
    returner += "{";
  	for (var key in obj){
  	  if (typeof obj[key] === "function"){
  	    return "{}";
  	  }
  		returner += ('"' + key + '":' );
  		returner += (stringifyJSON(obj[key]));
  		returner += ',';
  	}
  	if (returner.slice(0,-1) !== ""){
    	returner = returner.slice(0,-1);
  	}
  	returner += "}";
  }
  returner = '' + returner;
  return returner;
};