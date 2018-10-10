function add (numbers){
    if(numbers == ""){
		return 0
	}
    if(numbers.includes("\n") || numbers.includes(",")){
        var arr = numbers.split(/[\n,\s]+/);
        //var numArr = verifyNums(arr);
        return numberSum(verifyNums(arr));
    }
    else{
	    return parseInt(numbers);
	}
}

function numberSum(numberArr){
    var total = 0;

    for(var i = 0; i < numberArr.length; i++){
        total += parseInt(numberArr[i]);
    }
    return total;
}

function verifyNums(numArr){
    var negativeNums = [];
    //var counter = 0;

    for (var i = 0; i < numArr.length; i++){
        if(parseInt(numArr[i]) < 0){
            negativeNums.push(numArr[i]);
            //negativeNums[counter] = parseInt(numArr[i]);
            //counter++;
        }
        if(negativeNums.length > 0){
            throw("Negatives not allowed: " + negativeNums.join());
        }
    }

    return numArr;
}

module.exports = add;

