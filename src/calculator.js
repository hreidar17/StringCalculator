function add (numbers){
    if(numbers == ""){
		return 0
	}
	if(numbers.includes(",")){
        var arr = numbers.split(",");

        return numberSum(arr);
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

module.exports = add;

