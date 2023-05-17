var xorOperation = function(n, start) {
    var arr = [];
    var result = 0;
    for(var i=0; i<n; i++){
        arr.push(start+2*i);
        result = result ^ arr[i];
    }

    return result;
};