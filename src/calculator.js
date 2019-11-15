function add(){
    var sum = 0;
    var i;
    for(i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
}
   console.log(add(1,2,3,4))

   function multiply(){
    var product = 1;
    var i;
    for(i = 0; i < arguments.length; i++){
        product *= arguments[i];
    }
    return product;
}
   console.log(multiply(1,2,3,4))

    module.exports = {

       add, multiply

   }