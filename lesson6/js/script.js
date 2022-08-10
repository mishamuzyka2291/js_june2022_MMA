//- Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'
let str1 = 'hello world';
let str2 = 'lorem ipsum';
let str3 = 'javascript is cool';
 console.log(str1.length);
 console.log(str2.length);
 console.log(str3.length);

 //- Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'
console.log(str1.toUpperCase());
console.log(str2.toUpperCase());
console.log(str3.toUpperCase());

//- Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let str4 = 'HELLO WORLD';
let str5 = 'LOREM IPSUM';
let str6 = 'JAVASCRIPT IS COOL';
console.log(str4.toLowerCase());
console.log(str5.toLowerCase());
console.log(str6.toLowerCase());

//- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str = ' dirty string   ';
console.log(str.substring(1, 13));

// Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str = 'Ревуть воли як ясла повні';
//     let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let str7 = 'Ревуть воли як ясла повні';
function stringToarray(str){
    let split = str.split(' ');
    console.log(split);
}
let arr = stringToarray(str7);

//- є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
let array = [10,8,-7,55,987,-1011,0,1050,0];
array.forEach(arr => console.log(arr+'')); // callback

//map
 let map = array.map(value => console.log(value+''));

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

function sortNums(array,direction){
    if(direction==='fromMinToMax'){
        array.sort((num1,num2)=>num1-num2);
    }
    if(direction==='fromMaxToMin'){
        array.sort((num1,num2)=>num2-num1);
    }
    console.log(array);
}
sortNums(nums,'fromMinToMax');
sortNums(nums,'fromMaxToMin');

//- є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
//  -- відсортувати його за спаданням за monthDuration
    let sort = coursesAndDurationArray.sort((obj1,obj2) => obj2.monthDuration-obj1.monthDuration);
    console.log(sort);
//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let filter = coursesAndDurationArray.filter(value => value.monthDuration > 5);
console.log(filter);


// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

// описати колоду карт
let cards = [
    {cardSuit:'clubs', value: '7', color:'black'},
    {cardSuit:'spades', value: 'Ace', color:'black'},
    {cardSuit:'heart', value: '6', color:'red'},
    {cardSuit:'heart', value: 'Queen', color:'red'},
    {cardSuit:'tambourine', value: 'King', color:'red'},
    {cardSuit:'clubs', value: '10', color:'black'},
    {cardSuit:'clubs', value: 'King', color:'black'},
    {cardSuit:'spades', value: '6', color:'black'}
]
// - знайти піковий туз
let find = cards.find(item => item.cardSuit==='spades' && item.value ==='Ace');
console.log(find);
// - всі шістки
let filter1 = cards.filter(item => item.value === '6');
console.log(filter1);
// - всі червоні карти
let filter2 = cards.filter(item => item.color === 'red');
console.log(filter2);
// - всі буби
let filter3 = cards.filter(item => item.cardSuit === 'tambourine');
console.log(filter3);
// - всі трефи від 9 та більше
let filter4 = cards.filter(item => item.cardSuit === 'clubs' && +item.value >9 && item.value === 'King'  );  // не розумію як порівняти короля, туз і тд.
console.log(filter4);
