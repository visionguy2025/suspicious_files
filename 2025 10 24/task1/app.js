// 'use strict';

// for in - objects
// for of - arrays, strings

// let b = ["css", "html", "js", "c#"];
// for(let item of b) {
//     console.log(item);
// };

// let c = {
//     ad: "Lorem",
//     soyad: "Ipsum",
//     age: 27,
// };
// for(let key in c) {
//     console.log(key + ': ', c[key]);
// };

// '1 den 10 a qeder tek reqemlerin cemi';
// function calculateOddsToMax(max){
//     let sum = 0;
//     let number = 0;
//     while(number <= max){
//         if(number % 2 == 1){
//             sum += number;
//         };
//         number += 1;
//     };
//     console.log(`SUM OF ODD VALUES FROM 0 TO ${max}: ${sum}`);
// };
// calculateOddsToMax(10);

// 'object yaradib deyerlerini ekrana yazir';
// const PRODUCT = {
//     'title': 'Borofone FQ3 bluetooth earbuds',
//     'year': '2025',
//     'brand': 'Borofone',
//     'model': 'FQ3',
//     'description': 'Lorem ipsum dolor sit amet.',
//     'rating': '4.9',
//     'votes': '15123',
//     'price': '45',
//     'currency': 'azn',
// };
// function consoleObjectElements(obj){
//     for(let key in obj){
//         console.log(`${key}: ${obj[key]}`);
//     };
// };
// consoleObjectElements(PRODUCT);

// const container = document.querySelector('.container');
// function randomColor() {
//     let newColor = `
//         rgb(
//             ${Math.round(Math.random() * 255)},
//             ${Math.round(Math.random() * 255)},
//             ${Math.round(Math.random() * 255)}
//         )
//     `;
//     return newColor;
// };
// for(var i=0; i<50; i++){
//     let newBox = document.createElement('div');
//     newBox.className = 'box';
//     newBox.style.background = `radial-gradient(#ffffff, #ffffff, ${randomColor()})`;
//     newBox.style.left = Math.round(Math.random() * window.innerWidth) + 'px';
//     newBox.style.top = Math.round(Math.random() * window.innerHeight) + 'px';
//     newBox.style.filter = `drop-shadow(0 0 10px ${randomColor()})`
//     container.appendChild(newBox);
// };
// window.addEventListener('click', function(){
//     let index = 0;
//     while(index < container.childElementCount) {
//         container.children[index].style.left = Math.round(Math.random() * window.innerWidth) + 'px';
//         container.children[index].style.top = Math.round(Math.random() * window.innerHeight) + 'px';
//         index++;
//     };
// });

// REPEAT: datalar, funksiyalar, loop lar, DOM
// RESEARCH: fetch, OOP, sync/async, api
