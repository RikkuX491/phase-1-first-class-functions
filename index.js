// Instruction # 1 solution
function receivesAFunction(callbackFunction){
    callbackFunction();
}

// Instruction # 2 solution
function returnsANamedFunction(){
    function namedFunction(){

    }

    return namedFunction;
}

// Instruction # 3 solution
function returnsAnAnonymousFunction(){
    return () => {

    }
}