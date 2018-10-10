function add (numbers){
    if(numbers == ""){
		return 0
	}
    if(numbers.includes("\n") || numbers.includes(",")){
        var arr = numbers.split(/[\n,\s]+/);
        return numberSum(verifyNums(arr));
    }
    else{
	    return parseInt(numbers);
	}
}

function numberSum(numberArr){
    var total = 0;

    for(var i = 0; i < numberArr.length; i++){
        if(parseInt(numberArr[i]) <= 1000){
            total += parseInt(numberArr[i]);
        }
    }
    return total;
}

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
    return numArr;
}

module.exports = add;

