//-------------------------------------------------------Q1-------------------------------------------------

function checkTriancle(a,b,c) {
    if((a==b && a!=c) || (a==c && a!=b) || (a!=b && b==c))
        return "Isosceles Triangle";

    else if(a == b && a == c)
        return "Equilateral Triangle";

    else
        return "Scalene Triangle";
}

console.log(checkTriancle(2,2,2));
console.log(checkTriancle(2,3,6));
console.log(checkTriancle(2,1,2));



//-------------------------------------------------------Q2-------------------------------------------------

function findGrade(marks){
    let ans;
    switch (true) {
        case (marks <= 100 && marks >= 90):
            ans = "S grade";
            break;
            
        case (marks <= 89 && marks >= 80):
            ans = "A grade";
            break;

        case (marks <= 79 && marks >= 70):
            ans = "B grade";
            break;

        case (marks <= 69 && marks >= 60):
            ans = "C grade";
            break;

        case (marks <= 59 && marks >= 50):
            ans = "D grade";
            break;

        case (marks <= 49 && marks >= 40):
            ans = "E grade";
            break;

        case (marks <= 39 && marks >= 0):
            ans = "Student has failed";
            break;


        default: ans = "Invalid marks";
            break;
    }
    return ans;
}
let output = findGrade(85);
console.log("\n" + output);


//-------------------------------------------------------Q3-------------------------------------------------

function findSum(x,y){
    let sum = 0;
    for(let i=1; i<=1000; i++){
        if(i%x == 0 && i%y == 0)
            sum += i;
    }
    return sum;
}

console.log("\n" + findSum(3,5));


//-------------------------------------------------------Q4-------------------------------------------------

function fact(num) {
    if( num == 0 || num == 1)
        return 1;

    let smallAns = fact(num-1);
    return num*smallAns;
}

function isPrime(num) {
    if(num == 1)
        return false;

    else if (num > 1) {
        for(let i=2; i<num; i++) {
            if(num % i == 0) 
                return false;
        }
    }
    return true;
}

console.log("\nPrime" + " - " + "fact");
function factOfAllPrimeNo(a,b) {
    if(a < b) {
        for(let i=a; i<=b; i++){
            if(isPrime(i)) {
                console.log(i + " - " + fact(i));
            }
        }
    }
    else {
        factOfAllPrimeNo(b,a);
    }
}

console.log(factOfAllPrimeNo(3, 13));
