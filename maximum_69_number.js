var maximum69Number  = function(num) {
    var temp = num.toString().split('').map(Number);
    for(var i=0; i<temp.length; i++){
        if(temp[i] == 6){
            temp[i] = 9;
            break;
        }
        
    }
    var result = parseInt(temp.join(''));
    return result;
};