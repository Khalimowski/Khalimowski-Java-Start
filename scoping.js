// Root Scope (window)
var fun  = 5; 

function funFunction() {
    // child scope
    var fun = "Hello" // this won't access the var fun, as it's overwritten
    console.log(1, fun);
}

function funerFunction() {
    // child scope
    var fun = "Bye" // this won't access the var fun, as it's overwritten
    console.log(2, fun);
}

function funnestFunction() {
    // child scope
    fun = "BArr" // This will run the "var fun = 5"
    console.log(3 ,fun);
}

console.log("window", fun); 
funFunction()
funerFunction()
funnestFunction()