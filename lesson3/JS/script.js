// //first task

let xx;
let m = +prompt("Put number for example.");
xx = m;
 if (m!==0){
    console.log("Correct");
}
else {
    console.log("Incorrect");
}

// //second task

let time = +prompt("Put the number of minutes from 0 to 59");
if (time < 15 && time >= 0) {
    console.log("this amount of minutes belong to first quarter");
} else if (time < 30 && time >= 15) {
    console.log("this amount of minutes belong to  second quarter");
} else if ( time < 45 && time >= 30) {
    console.log("this amount of minutes belong to  third quarter");
} else if ( time < 60 && time >= 45) {
    console.log("this amount of minutes belong to fourth quarter");
} else {
    console.log("??????");
}
// Пробував виконувати це завдання №2 за допомогою switch проте ігнорувало умови ">,<"

// third task

let day = +prompt("Put the number of day");
if ( day >= 1 && day <= 10) {
    console.log("this day belongs to the first decade");
} else if ( day > 10 && day <= 20) {
    console.log("this day belongs to the second decade");
} else if ( day > 20 && day <= 31) {
    console.log("this day belongs to the third decade");
} else {
    console.log("???????????");
}

// //fourth task

let number = +prompt("put the number of day where (1-Monday...7-Sunday");
switch (number){
    case number = 1:
        console.log("Monday");
        break;
    case number = 2:
        console.log("Tuesday");
        break;
    case number = 3:
        console.log("Wednesday");
        break;
    case number = 4:
        console.log("Thursday");
        break;
    case number = 5:
        console.log("Friday");
        break;
    case number = 6:
        console.log("Saturday");
        break;
    case number = 7:
        console.log("Sunday");
        break;
    default:
        console.log("Error");
}

// //fifth task

let a = +prompt("Put first number");
let b = +prompt("Put second number");
if (a>b){
    console.log(a);
}
else if (a<b){
    console.log(b);
}
else if (a === b){
    console.log("This numbers is same");
}
else{
    console.log("Error");
}


//sixth task
let x = prompt("put something") || 'default';
console.log(x);
