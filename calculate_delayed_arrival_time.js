var findDelayedArrivalTime = function(arrivalTime, delayedTime) {
    var result = arrivalTime + delayedTime;
    if(result < 24){
        return result;
    }else{
        return result - 24;
    }
};