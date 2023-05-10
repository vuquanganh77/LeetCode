var romanToInt = function(s) {
    var result = 0;
    const roman = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    for(var i=0; i<s.length; i++){
        let cur = roman[s[i]], next = roman[s[i+1]];
        if(cur < next){
            result += next-cur;
            i++;
        }else{
            result += cur;
        }
    }
    return result;
};
// console.log(y);