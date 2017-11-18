// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, doc) {
	var returner = [];
	var myClass = className;
	if (doc === undefined){
		var thisNode = document.body;
	} else {
		var thisNode = doc;
	}
	var myClasses = thisNode.className && thisNode.className.split(" ");
	if (myClasses === undefined){
		return returner;
	}
	if (myClasses.includes(myClass)){
		returner.push(thisNode);
	} 
	if (thisNode.childNodes.length === 0){
	} else {
		for (var i=0; i<thisNode.childNodes.length; i++){
			 returner = returner.concat(getElementsByClassName(myClass, thisNode.childNodes[i]));
		}
	}
	return returner;
};
