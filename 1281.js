var subtractProductAndSum = function(n) {
    var sum = 0;
    var product = 1;
    while(n/10 != 0){
        sum += n%10;
        product *= n%10;
        n = Math.floor(n/10);
    }

    return product - sum;
};