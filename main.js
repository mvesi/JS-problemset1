// #1 - Write a function called letterCapitalize which takes a single string parameter
// and capitalizes the first letter of each word in the string. You can assume that words
// in the input string will be separated by only one space.

//exampe of a declared function

var letterCapitalize = function (str){
	var strArray = str.split(" ");
		for (var i=0 ; i<strArray.length ; i++){
			strArray[i] = (strArray[i].substring(0,1)).toUpperCase() + strArray[i].substring(1, strArray[i].length);
		}
		var newStr = strArray.join(" ");
	return newStr;

}

console.log(letterCapitalize("Dogs like to eat food"));





// #2 - Write a function called wordCount which takes a single string parameter and
// returns the number of words the string contains (ie. "Never eat shredded wheat"
// would return 4). You can assume that words in the input string will be separated by
// only one space.

//example of a named function

function wordCount (str2) {

	var str2Array = str2.split(" ");
	var numWords = str2Array.length;
	return numWords;

}

console.log(wordCount("Never eat shredded wheat"));


// Write a function called primeTime that takes a single number parameter and
// returns the true if the parameter is a prime number, otherwise false. The range will
// be between 1 and 2^16.

function primeTime (num){
	var SqrRtNum = Math.sqrt(num);
	var primeNum = true;
	for(var i=2 ; i<SqrRtNum ; i++){
		if(num%i === 0){
			primeNum = false;
			break;
		}
	}
	return primeNum;

}

console.log(primeTime(89));

