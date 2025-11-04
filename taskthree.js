//Check if a number is greater than 100.
function greater(n){
    if(n>100){
        return "greater";
    }else if(n<100){
        return "not greater";
    }else{
        return "equal";
    }
}
console.log(greater(100));