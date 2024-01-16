const fibonacci = function(n) {
    function fib (n) {
        if (n < 0) {
            return "OOPS";
        }
        if(n==0){
            return 0;
        }
        else if(n==1){
            return 1;
        }
        else{
            return fib(n-1)+fib(n-2);
        };
    };
    return fib(n);
};

// Do not edit below this line
module.exports = fibonacci;
