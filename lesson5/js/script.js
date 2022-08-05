//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function squareRectangle (a,b){
    return a*b;
}
let res = console.log("square of rectangle is", squareRectangle(121,9));

//- створити функцію яка обчислює та повертає площу кола з радіусом r

function squareRound (r){
    return r*r;
}
let p = 3.14;
let square_round = console.log("square of round is", p*squareRound(6));

// створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function squareСylinder(h, r){
return h*r;
}
let square_cylinder = 2*p*squareСylinder(15,9);
console.log("square of cylinder is", +square_cylinder.toFixed(1));

//створити функцію яка приймає масив та виводить кожен його елемент


let array1 = [1,2,3,4,5];
function iteration(array){
    for (const item of array) {
        console.log(item);
    }
}
iteration(array1);
//- створити функцію яка створює параграф з текстом. Текст задати через аргумент

function createP(text){
    document.write(`<p>${text}</p>`);
}
createP("Lorem ipsum dolor sit.");

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function createUlLi(text){
    document.write(`<ul>`)
    for (let i =0; i<3; i++ ){
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}
createUlLi("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, nostrum!")

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function createulli(text,number){
    document.write(`<ul>`)
    for (let i =0; i<number; i++ ){
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}
createulli("Hello Okten", 5);

//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let array2 = [56, "string", true];

function createListForArray(array){
    document.write(`<ul>`)
    for (const item of array) {
        document.write(`<li>${item}</li>`);
    }
}
createListForArray(array2);

//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let users = [
    {id: 1, name: "Vasya", age: 25},
    {id: 2, name: "Oleg", age:20},
    {id: 3, name: "Oksana", age: 30}
]
function createListOfObject(array){
    for (const item of array) {
        document.write(`<div>${item.id}. ${item.name} - ${item.age}</div>`);
    }
}
createListOfObject(users);

//- створити функцію яка повертає найменьше число з масиву
let array3 = [20, 67, 55, 14, 16];
function minNumber(array){
    let min = array3[0];
    for (const item of array) {
        if (min>item){
            min = item;
            console.log("Min number is", item);
        }
    }
}
minNumber(array3);

//- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

let array4 = [5,12,3];
function sumOfArrayElements(array){
    let sum = 0;
    for (const item of array) {
         sum += item;
    }
    return sum;
}
console.log("Sum is", sumOfArrayElements(array4));



