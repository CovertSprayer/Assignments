
// ----------------------------- Q1 --------------------------------

function checkLeapYear(year) {
    if(year % 400 == 0)
        console.log("Leap Year");
    else if (year % 100 == 0)
        console.log("Not a Leap Year");
    else if (year % 4 == 0)
        console.log("Leap year");
    else
        console.log("Not a Leap year");
}

// ----------------------------- Q2 --------------------------------

function CtoF(C){
    let f = (C/5)*9 + 32;
    return f;
}

function FtoC(F){
    let C = ((F-32)/9)*5;
    return C;
}

// ----------------------------- Q3 --------------------------------

function fact(num) {
    if( num == 0 || num == 1)
        return 1;

    let smallAns = fact(num-1);
    return num*smallAns;
}



checkLeapYear(2005);

let temp = CtoF(60);
console.log(temp + " deg C");

let temp2 = FtoC(45);
console.log(temp2 + " deg F");

console.log(fact(5));