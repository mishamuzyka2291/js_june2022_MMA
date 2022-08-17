// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let arrayOfUsers = [
    new User(1, `Vasya`, `Vasylenko`, `vasylenko1988@gmail.com`, `098543143`),
    new User(2, `Petya`, `Petrenko`, `petyapetrenko@ukr.net`, `0991256778`),
    new User(3, `Olena`, `Melnyk`, `olenka@ukr.net`, `0991546553`),
    new User(4, `Petya`, `Ivanov`, `pivanov@gmail.com`, `0995257878`),
    new User(5, `Sveta`, `Kyk`, `kyk33334@gmail.com`, `0994570069`),
    new User(6, `Mark`, `Antonio`, `markstar@gmail.com`, `0993233312`),
    new User(7, `Pavlo`, `Paramud`, `pp21pavlo@gmail.com`, `0634445656`),
    new User(8, `Oleksiy`, `Mykola`, `mykolaoleksa@gmail.com`, `0639990011`),
    new User(9, `Yulia`, `Banderas`, `banderasyyy@gmail.com`, `0984536699`),
    new User(10, `Zahar`, `Kush`, `kushykzoha@ukr.net`, `0722525656`),
]
// console.log(arrayOfUsers);
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let filter = arrayOfUsers.filter(value => value.id % 2 === 0 );
console.log(filter);
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sort = arrayOfUsers.sort(( value1, value2) =>value2.id-value1.id); //реалізував навпаки по спаданню
console.log(sort);
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client{
    constructor(id, name, surname, email, phone, order) {
        User.apply(this,arguments);
        this.order = order;
    }
}
let arrayOfUsers1 = [
    new Client(1, `Vasya`, `Vasylenko`, `vasylenko1988@gmail.com`, `098543143`,[`cake`, `soda`, `fruits`,`watermelon`]),
    new Client(2, `Petya`, `Petrenko`, `petyapetrenko@ukr.net`, `0991256778`,[]),
    new Client(3, `Olena`, `Melnyk`, `olenka@ukr.net`, `0991546553`,[`water`]),
    new Client(4, `Petya`, `Ivanov`, `pivanov@gmail.com`, `0995257878`,[`computer`]),
    new Client(5, `Sveta`, `Kyk`, `kyk33334@gmail.com`, `0994570069`, [`glue`, `powerbank`, `cards`]),
    new Client(6, `Mark`, `Antonio`, `markstar@gmail.com`, `0993233312`, [`pencil`, `pencil case`,`book`,`biscuit`,`chocolate`,`tea`]),
    new Client(7, `Pavlo`, `Paramud`, `pp21pavlo@gmail.com`, `0634445656`, [`cap`]),
    new Client(8, `Oleksiy`, `Mykola`, `mykolaoleksa@gmail.com`, `0639990011`,[]),
    new Client(9, `Yulia`, `Banderas`, `banderasyyy@gmail.com`, `0984536699`, [`book`,`shampoo`,`skirt`]),
    new Client(10, `Zahar`, `Kush`, `kushykzoha@ukr.net`, `0722525656`,[`phone`,`headphones`]),

]
// console.log(arrayOfUsers1);
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sort1 = arrayOfUsers1.sort((value1, value2) => value1.order.length-value2.order.length);
console.log(sort1);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car(model, developer, age, maxSpeed, engineCapacity){
    this.model = model;
    this.developer = developer;
    this.age = age;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;
    this.drive = function (){console.log(`We are going at ${maxSpeed} per an hour`);}
    this.info = function (){
        for (const argument in this) {
           if (typeof this[argument]!==`function`){console.log(`${argument}-${this[argument]}`);
           }
        }
    }
    this.increaseMaxSpeed = function (newSpeed){this.maxSpeed = newSpeed;}
    this.changeYear = function (newValue){this.age = newValue;}
    this.addDriver = function (driver){this.addDriver = driver;}
}
let car = new Car(`Tesla`,`USA`,2014,300,2.0);
car.drive();
car.info();
car.increaseMaxSpeed(400);
car.changeYear(2020);
car.addDriver({name:`Vasya`, age:31});
console.log(car);


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class NewCar extends Car{
    constructor(model, developer, age, maxSpeed, engineCapacity) {
        super(model, developer, age, maxSpeed, engineCapacity);
    }
}
let newCar = new NewCar(`Ford`,`USA`, `2019`, 220, 3.0);
newCar.drive();
newCar.info();
newCar.increaseMaxSpeed(240);
newCar.changeYear(2022);
newCar.addDriver({name:`Petya`, age: 22});
console.log(newCar);

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Popelushka{
    constructor(name, age, sizeOfLeg) {
        this.name = name;
        this.age = age;
        this.sizeOfLeg = sizeOfLeg;
    }
}

class Prince{
    constructor(name, age, lostShoe) {
        this.name = name;
        this.age = age;
        this.lostShoe = lostShoe;
    }
}
let arrayOfPopelushka = [
    new Popelushka(`Anna`,22, 36),
    new Popelushka(`Marta`,18, 37),
    new Popelushka(`Ira`,26, 39),
    new Popelushka(`Vika`,18, 35),
    new Popelushka(`Sasha`,25, 40),
    new Popelushka(`Maria`,29, 39),
    new Popelushka(`Ulana`,21, 38),
    new Popelushka(`Yulia`,22, 37),
    new Popelushka(`Tania`,18, 38),
    new Popelushka(`Sofia`,23, 40),
]
let prince = new Prince(`Mark`, 25, 35);
for (const popelushka of arrayOfPopelushka) {
    if(prince.lostShoe === popelushka.sizeOfLeg){
        console.log(`${popelushka.name} needs to be with ${prince.name}`)
    }
}
let find = arrayOfPopelushka.find(item => item.sizeOfLeg === prince.lostShoe);
console.log(find);