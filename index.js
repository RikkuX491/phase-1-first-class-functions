function receivesAFunction(callbackFunction){
    callbackFunction()
}

function returnsANamedFunction(){

    function namedFunction(){

    }

    return namedFunction
}

function returnsAnAnonymousFunction(){
    return function (){

    }
}