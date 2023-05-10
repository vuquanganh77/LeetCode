var sumOfMultiples = function(n) {
    var result=0;
    for(var i=1; i<=n; i++){
        if(i%3==0 || i%5==0 || i%7==0){
            result += i;
        }
    }
    return result;
};