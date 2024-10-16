"use strict";

// объявления переменных

let myName = 'Dima'; // changeble 

let number = 5;

const leftBorderWidth = 1; // not changeble
// const leftBorderWidth = 10;

number = 10;

console.log(number);

console.log(myName);

console.log(leftBorderWidth);

// const obj = {
//     a: 50
// };

// obj.a = 10;

// console.log(obj);

var name = 'Bakinec'; //dont't use 'var' !!!

// snake_case
// UPPER_SNAKE_CASE
// Kebab-case 
// PascalCase - используется для названия классов




// let myName2 = "Bart";

// let myName3 = `Bakinec`;

// let obj = {
//     dog: 'puppy',
//     cat: 'citty'
// };

// massives
// let arr = [1, 'string', false];

// arr[0] = 2;

// work with console

// console.log(myName);


// console.log(4/0);

// let answer = confirm('do you have 18');
// console.log(answer);

// let answer = prompt('do you have 18');
// console.log(answer);

// let answers = [],
//     questions = [
//         'what is your name?',
//         'what is your second name?',
//         'how old are you?'
//     ];

//цикл с пост условием

// let i = 0;

// do{
// console.log(questions[i]);
// i++;
// } while (i < questions.length);


// цикл с пред условием

// let y = 0;
// while (y < questions.length){
//     answers[y] = prompt(questions[y], '');
//     y++;
// }
// console.log(answers);

// answers[0] = prompt('what is your name?');
// answers[1] = prompt('what is your second name?');
// answers[2] = prompt('how old are you?');

// for (let i = 0; i < questions.length; i++){
//     answers[i] = prompt(questions[i], '');
// }

// document.write(answers);

// console.log(answers);

// for (let i = 0; i < 10; i++) {
// console.log(i);
// };

//цикл с пост условием

// let i = 0;

// do{
// console.log(i);
// i++;
// } while (i < 10);

// // цикл с пред условием

// let i = 0;

// while (i < 10){
//     console.log(i);
//     i++;
// }

// let age = prompt('how old are you?');

// if (age < 18){
// alert('you cant come!')
// } else if (age > 100){
// alert('go home daddy');
// } 
// else {
//     alert('you can come in!')
// }



// switch case

// switch (age){
//     case 18:
//         alert('you cant come!');
//         break;
//     case 100:
//         alert('go home daddy');
//     default:
//         alert('unknown...');

// }

// function

// function humanSayHello(user) {
//     console.log('Hello ' + user + '!');
// }

// humanSayHello('Dima');


// function calc(a, b){
//     console.log(a + b);
// }

// calc(33, 66); 

// function myFirstApp(name, age, num) {
//     alert(`Hello, my name is ${name} this is my first app and i am ${age}`);
//     alert('Square of num ' + num + ' = ' + num*num);

//     function showSkills() {
//         let skills = ['html', 'css', 'js']
//         for (let i = 0; i < skills.length; i++)
//         console.log('My skills is: ', skills[i]);
//     }

//     function checkAge(age){
//         age = prompt('what is your age');
//         if (age > 18) {
//             console.log('have a good ride');
//         } else console.log('its your better time kid');

//     }

   

//     showSkills();
//     checkAge();
   

// }

// myFirstApp('Dima', 44, 55);

// const arr = [5, 5, 5];

// тип данных "ОБЪЕКТ"

const obj = {
    name: 'John',
    age: 25,
    isMarried: false
};

console.log(obj.name);
console.log(obj['name']);

const obj1 = {
    Anna: 500,
    'Alice': 800
};

const arrObj1 = {
    '0': 'a',
    1: 'b',
    2: 'c'
}

// console.log(arrObj1[0]);
arrObj1.b = '1234';

console.log(arrObj1['b']);
console.log(arrObj1[1]);
 

const arrObj2 = {
0: 1,
1: 2,
2: 3
};
 

// massives

let arr = ['pic1.png', 'orange.jpg', 'apple.bmp', 6, [], {}];

console.log(arr[2], arr[1], arr[0]);

const b = 'b';

