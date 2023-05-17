var countDigits = function(num) {
    var result = 0;
    var temp = num.toString().split('').map(Number);

    for(var i=0; i<temp.length; i++){
        if(num%temp[i]==0){
            result += 1;
        }
    }

    return result;
};