function add (numbers){
    //If input is empty we return 0
    if(numbers == ""){
		return 0
	}
    //If input is NaN i.e. contains characters other than numeric we return their total sum
    if(isNaN(numbers)){
        return numberSum(verifyNums(splitIntoArray(numbers)));
    }
    //If input is a single number then we verify it's not negative or over 1000
    else{
	    return numberSum(verifyNums(numbers));
	}
}
//When splitting into an array i first need to find the objects seberating all the digits
//I begin with the expected seperators, then i check if i we're declaring a new delimitor
function splitIntoArray(string){

    var symbol = [];
    symbol.push(",");
    symbol.push("\n");
    symbol.push("\s");

    if(string[0] == "/" && string[1] == "/"){
        symbol.push(string[2]);
    }
    //First i use ',' as a common join
    var tempSymbol = symbol[0];
    //I iterate through the symbol list and split the string on those points and join it with ','
    for(var i = 1; i < symbol.length; i++){
        string = string.split(symbol[i]).join(tempSymbol);
    }
    //Finally i split the string on ',' leaving me with a array of numbers from the string
    string = string.split(tempSymbol);
    //Pass the array forward to be verified
    return string;
}

//To confirm that our number array is valid, we iterate through its members
//We push any negatives found into a new array and print it out when we throw an error.
function verifyNums(numArr){
    var negativeNums = [];

    for (var i = 0; i < numArr.length; i++){
        if(parseInt(numArr[i]) < 0){
            negativeNums.push(numArr[i]);
        }
    }
    if(negativeNums.length > 0){
        throw("Negatives not allowed: " + negativeNums.join());
    }
    //Our valid number array passes through if no negatives are found.
    return numArr;
}

//param can be either a single digit or array of digits both types work the same
function numberSum(numberArr){
    var total = 0;
    //We sum the total amount to a return variable while ignoring any numbers larger than 1000
    for(var i = 0; i < numberArr.length; i++){
        if(parseInt(numberArr[i]) <= 1000){
            total += parseInt(numberArr[i]);
        }
    }
    return total;
}

module.exports = add;

