//STEP 1
function halfNumber(num) {
    let half = num / 2;
    console.log('Half of ' + num + ' is ' +  half);
    return half;
  }
  
  halfNumber(5);

//STEP 2
function squareNumber(num) {
    let squareNumber = num * num;
    console.log("The result of squaring the number " + num + " is " + squareNumber);
    return squareNumber;
}
squareNumber(3);
//STEP 3

function percentOf(x,y) {
        let percent = (x/y) * 100;
        console.log(x + " is " + percent + " % of " + y);
        return percent;
}

percentOf(2,4);
//STEP 4
function findModulus(num1, num2) {
    let module  = (num2 % num1)
    console.log(module + " is the modulus of " + num1 + " and " + num2);
    return module;
}

findModulus(4,10)

//STEP 5
function add() {
    console.log(arguments);
    let sum = 0;
    for(let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
console.log(add(4,3,1));
console.log(add(10,12,21));
console.log(add(89,12,35,44));
