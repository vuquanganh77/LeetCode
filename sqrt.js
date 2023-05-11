var mySqrt = function(x) {
    if(x==1)    return 1;
    for(var i=1; i<=x/2+1; i++){
        if(i*i > x){
            return i-1
        }
    }
};