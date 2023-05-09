var isPalindrome = function(x) {
    let y = x.toString();
    let t = y.split("").reverse().join("");
    let z = Number(t);
    if(x==z){
        return true;
    }else{
        return false;
    }
};