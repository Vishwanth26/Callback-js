/*Question 1*/
function processNumbers(a, b, callback) {
    return callback(a, b);
}
let vishwa = processNumbers(3, 4, function(x, y) {
    return x + y;
});
console.log("Sum:", vishwa);
/*Question 2*/
function greet(callback){
    return callback("Alice");
}
var letvar = greet(function(name){
    return `Hello, ${name}!`;
});
console.log(letvar);
/*Question 3*/
function calculate(a, b, callback) {
    return callback(a, b);
}
let result = calculate(10, 5, (x, y) => x - y);
console.log("Difference:", result);
