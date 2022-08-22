// - є масив
let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
// for (const simpson of simpsons) {
//   let div = document.createElement('div');
//   div.classList.add('member');
//   div.innerHTML = `${simpson.name} ${simpson.surname} - ${simpson.age} <br> ${simpson.info}`;
//     let img = document.createElement(`img`);
//     img.src = simpson.photo;
//     div.appendChild(img);
//   document.body.appendChild(div);
//   console.log(div);
// }
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
//---------------------------------------------------------------------------------------------------------
//
//
//
// Цикл в циклі
// - Є масив
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
// console.log(coursesArray[3].modules);
//Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png
// for (const coursesArrayElement of coursesArray) {
//     let mainDiv = document.createElement('div');
//     mainDiv.classList.add('main');
//     mainDiv.innerText = `${coursesArrayElement.title}`;
//     document.body.appendChild(mainDiv);
//     mainDiv.style.border = '1px solid black'
//         let div = document.createElement('div');
//         let monthDiv = document.createElement('div');
//         let hourDiv = document.createElement('div');
//         monthDiv.classList.add('target');
//         monthDiv.innerText = `${coursesArrayElement.monthDuration}`;
//         hourDiv.classList.add('target1');
//         hourDiv.innerText = `${coursesArrayElement.hourDuration}`
//         div.classList.add('card');
//         div.style.border = '1px solid red'
//         div.append(monthDiv, hourDiv);
//         mainDiv.appendChild(div);
// }
// for (const coursesArrayElement of coursesArray) {
//     let mainDiv = document.createElement('div');
//     mainDiv.classList.add('main');
//     mainDiv.style.border = '1px black solid';
//     document.body.appendChild(mainDiv);
//     for (const coursesArrayElementKey in coursesArrayElement) {
//         let div = document.createElement('div');
//         div.classList.add('card');
//         div.style.border = '2px red solid';
//         div.innerText = `${coursesArrayElement[coursesArrayElementKey]}`
//         mainDiv.appendChild(div);
//         if(coursesArrayElementKey === coursesArray[3].modules){
//             let ul = document.createElement('ul')
//             div.appendChild(ul);
//             let li = document.createElement('li');
//             ul.appendChild(li);
//         }
//     }
//
//     let ul = document.createElement('ul')
// }
                        //не виходить добавити li  кожен div
// -------------------------------------------------------------------------------------------------------
//
//
// - створити блок,
// let div = document.createElement("div");
// //     - додати йому класи wrap, collapse, alpha, beta
// div.classList.add('wrap');
// div.classList.add('collapse');
// div.classList.add('alpha');
// div.classList.add('beta');
// // - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// div.style.background ='silver';
// div.style.height = '200px';
// div.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
// div.style.color = 'black'
// div.style.textAlign = 'center'
// // - додати цей блок в body.
// document.body.appendChild(div);
// // - клонувати його повністю, та додати клон в body.
// let clone = div.cloneNode(true);
// document.body.appendChild(clone);
//---------------------------------------------------------------------------------------------------------------------
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// let ul = document.getElementsByClassName('menu')[0];
// let array = ['Main','Products','About us','Contacts'];
// for (const string of array) {
//     let li = document.createElement('li')
//     li.innerText = string;
//     ul.appendChild(li);
// }
// Завдання робити через цикли.
//-------------------------------------------------------------------------------------------------------------------------------------
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// // Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// // Завдання робити через цикли.
// for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
//     let div = document.createElement("div");
//     div.innerText = `${coursesAndDurationArrayElement.title} -- ${coursesAndDurationArrayElement.monthDuration}`
//     document.body.appendChild(div);
// }
//---------------------------------------------------------------------------------------------------------------------------------------
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
//     let div = document.createElement("div");
//     div.classList.add('item');
//     let h1 = document.createElement('h1');
//     h1.classList.add('heading');
//     h1.innerText = `${coursesAndDurationArrayElement.title}`
//     let p = document.createElement("p");
//     p.classList.add('description');
//     p.innerText = `${coursesAndDurationArrayElement.monthDuration}`
//     div.append(h1, p);
//     document.body.appendChild(div);
//  }
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//
//     - Створити довільний елемент з id = text.  Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
// let p = document.createElement('p');
// p.setAttribute('id', 'text');
// p.innerText = 'put the button to hide me now';
// document.body.appendChild(p);
// let button = document.createElement('button');
// button.innerText = 'Put the button';
// document.body.appendChild(button);
// let button1 = document.createElement('button');
// button1.innerText = 'Off focus';
// document.body.appendChild(button1);
// button.onclick = function (e) {
//     p.style.color = 'white';
// }
// button1.onclick = function (e) {
//     p.style.color = 'black';
// }
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// let target = document.querySelector('.target');
// let f1 = document.forms.f1;
// f1.onsubmit = function (e){
//     e.preventDefault();
//     if(this.age.value <= 18){
//         document.write('You are younger then 18');
//     }
//     else {
//         document.write('Enter is successful');
//     }
// }
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//
// *** Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

let f1 = document.createElement('form');
document.body.appendChild(f1);
for (let i = 0; i < 3; i++){
    let input = document.createElement("input");
    f1.appendChild(input);
    switch (i){
        case 0:
            input.name = 'label1';
            input.placeholder = 'enter amount of rows';
            break
        case 1:
            input.name = 'label2';
            input.placeholder = 'enter amount of columns';
            break
        case 2:
            input.name = 'label3';
            input.placeholder = 'enter information in table';
            break
    }

}
let button = document.createElement('button');
button.innerText = 'Send information';
f1.onsubmit = function (e){
  e.preventDefault();
    console.log(this.label1.value);
    console.log(this.label2.value);
    console.log(this.label3.value);
    let array = [this.label1.value, this.label2.value, this.label3.value]
    let mainDiv = document.createElement('div');
    mainDiv.classList.add('mainDiv');
    document.body.appendChild(mainDiv);
    for (let i = 0; i < array[0]; i++){
        let div = document.createElement("div");
        div.classList.add('row');
        mainDiv.appendChild(div);
        for( let i = 0; i < array[1]; i++){
            let divInDiv = document.createElement('div')
            divInDiv.classList.add('divInDiv');
            divInDiv.innerText = `${array[2]}`
            div.appendChild(divInDiv);
        }
    }
}
f1.appendChild(button);