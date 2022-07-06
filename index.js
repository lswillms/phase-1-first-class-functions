function receivesAFunction(callBack) {
    return (callBack())
}
function returnsANamedFunction() {
    return function receivesAFunction(callback) {
    }
}

function returnsAnAnonymousFunction() {
    return function() {
    console.log("Anonymous")
}
}

