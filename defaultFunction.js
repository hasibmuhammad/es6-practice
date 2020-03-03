function add( numberOne = 1, numberTwo = 1 ) {
    return numberOne + numberTwo;
}
console.log( add() );

function defaultString( string = "tick" ){
    return string;
}
console.log( defaultString() );