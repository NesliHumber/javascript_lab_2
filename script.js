console.log(); console.log("--------------------Step 2: If-else 1--------------------"); console.log();

let number = -100;
 
if (number > 0) {
    console.log("The number you entered is positive.");
} else if (number < 0) {
    console.log("The number you entered is negative.");
} else {
    console.log("The number you entered is zero.");
}

console.log(); console.log("--------------------Step 2: If-else 2--------------------"); console.log();

function assessNumber (number2) {
    if (number2 > 0) {
        return `You entered ${number2}. This number is positive.`;
    } else if (number2 < 0) {
        return `You entered ${number2}. This number is negative.`;
    } else {
        return "You entered zero.";
    }
}

console.log(assessNumber(100)); 
console.log(assessNumber(-100));  
console.log(assessNumber(0));   


console.log(); console.log("--------------------Step 3: Switch Statement--------------------"); console.log();



function dayOfTheWeek(number) {


    let day;

    switch (number) {
        case 1:
            day = "Sunday";
            break;
        case 2:
            day = "Monday";
            break;
        case 3:
            day = "Tuesday";
            break;
        case 4:
            day = "Wednesday";
            break;
        case 5:
            day = "Thursday";
            break;
        case 6:
            day = "Friday";
            break;
        case 7:
            day = "Saturday";
            break;
        default:
            day = "Invalid entry. Choose a number from 1 to 7 including.";
    }

    return day;
}

console.log(dayOfTheWeek(1)); 
console.log(dayOfTheWeek(4)); 
console.log(dayOfTheWeek(7)); 
console.log(dayOfTheWeek(8)); 
console.log(dayOfTheWeek(0)); 

console.log(); console.log("--------------------Step 4: Loops (For, While, Do...While)--------------------"); console.log();

console.log("Using for loop:");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

console.log(); console.log("Using while loop:");
let j = 1;
while (j <= 5) {
    console.log(j);
    j++;
}

console.log(); console.log("Using do...while loop:");
let k = 1;
do {
    console.log(k);
    k++;
} while (k <= 5);

console.log(); console.log("--------------------Step 5: Control Flow with break and continue--------------------"); console.log();

console.log("Using for loop with break:");
for (let i = 1; i <= 5; i++) {
    console.log(i);
    if(i === 3){
        break;
    }
}
console.log("Using for loop with continue:");
for (let i = 1; i <= 5; i++) {
    if(i === 3){
        continue;
    }
    console.log(i);
}
console.log(); console.log("Using while loop with break:");
let m = 1;
while (m <= 5) {
    console.log(m);
    m++;
    if(m === 3){
        break;
    }
}
console.log(); console.log("Using while loop with continue:");
let n = 1;
while (n <= 5) {
    if (n === 3) {
        n++;
        continue;
    }
    console.log(n);
    n++;
}
console.log(); console.log("Using do...while loop with break:");
let p = 1;
do {
    console.log(p);
    if(p === 3){
        break;
    }
    p++;
} while (p <= 5);
console.log(); console.log("Using do...while loop with continue:");
let r = 1;
do {
    if(r === 3){
        r++;
        continue;
    }
    console.log(r);
    r++;
} while (r <= 5);

console.log(); console.log("--------------------Step 6: Scope and Context--------------------"); console.log();

let globalVariable = "Global";

function scope() {
    
    let localVariableOfFunction = "Local";
    

    console.log("Local scope (inside the function): ");
    console.log(globalVariable); // Global variable is accessible also inside the function  
    console.log(localVariableOfFunction);  

    if (true) {
        console.log("Local scope (inside the if statement): ");
        console.log(globalVariable); // Global variable is accessible also inside the if statement
        console.log(localVariableOfFunction); // Local variable of function is accessible by the if statement which is inside the function
        let ifStatementVariable = "If statement variable";
        console.log(ifStatementVariable);
    }
    
}

console.log("In global scope:");
console.log(globalVariable);
//console.log(localVariable); // -> Local variable is NOT ACCESSIBLE within global scope 
//console.log(blockVariable); // -> Local variable is NOT ACCESSIBLE within global scope

scope();

