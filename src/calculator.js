function add (numbers){
    if(numbers == ""){
		return 0
	}
	if(numbers.includes(",")){
        var numberArr = numbers.split(",");
        var total = 0;
        for(var i = 0 ; i < numberArr.length ; i++){
            total += parseInt(numberArr[i])
        }
        return total;
    }
    else{
	    return parseInt(numbers);
	}
}

module.exports = add;

