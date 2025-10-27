// -------------------------------------------------------
// const emp1 = {
//     name: 'Abc',
//     age: 25,
//     salaray: 5000
// };
// const emp2 = {
//     name: 'Elnur',
//     age: 32,
//     salary: 6000
// };
// console.log(emp1, emp2);
// -------------------------------------------------------
// let a = new Object;
// console.log(a.toString);
// -------------------------------------------------------
// function Employee() {
//     this.name = 'Perviz';
//     this.age = 25;
//     this.salary = 5000;
// };
// let employee = new Employee();
// console.log(employee);
// -------------------------------------------------------
// function Employee(name, age, salary) {
//     this.name = name;
//     this.age = age;
//     this.salary = salary;
//     this.showInfo = function() {
//         console.log(this.name + " " + this.age + " " + this.salary)
//     };
// };
// let emp1 = new Employee('Perviz', 25, 5000);
// console.log(emp1);
// emp1.showInfo();
// let emp2 = new Employee('Elnur', 32, 6000);
// console.log(emp2);
// emp2.showInfo();
// console.log(emp2.toString());
// Employee.prototype.showName = function() {
//     console.log(this.name);
// };
// emp1.showName();
// emp2.showName();
// Employee.prototype.toString = function() {
//     console.log(this.age);
// };
// emp1.toString();
// console.log(emp1);
// -------------------------------------------------------
// class Employee {
//     constructor(name, age, salary) {
//         this.name = name;
//         this.age = age;
//         this.salary = salary;
//     }
//     showInfo = function() {
//         console.log(this.name + " " + this.age + " " + this.salary)
//     };
// };
// let emp1 = new Employee('Perviz', 25, 5000);
// console.log(emp1);
// emp1.showInfo();
// let emp2 = new Employee('Elnur', 32, 6000);
// console.log(emp2);
// emp2.showInfo();
// console.log(emp2.toString());
// Employee.prototype.showName = function() {
//     console.log(this.name);
// };
// emp1.showName();
// emp2.showName();
// Employee.prototype.toString = function() {
//     console.log(this.age);
// };
// emp1.toString();
// console.log(emp1);
// -------------------------------------------------------
const output = document.querySelector(".output");
const symbol = document.querySelector(".operation__inputs > span");
const input1 = document.querySelector(".operation__inputs > input:first-of-type");
const input2 = document.querySelector(".operation__inputs > input:last-of-type");
const btn_sum = document.getElementById("btn_sum");
const btn_sub = document.getElementById("btn_sub");
const btn_multiply = document.getElementById("btn_multiply");
const btn_compare = document.getElementById("btn_compare");

let log = [];
localStorage.getItem("log") ? log = JSON.parse(localStorage.getItem("log")) : log = [];
log.forEach(
    (element, index) => {
        output.innerHTML += `<div style="overflow-x: hidden; width: 100%; background-color: #444444;">${element}</div>`;
    }
);

function randomColor() {
    const newRandomColor = `
        rgb(
            ${Math.round(Math.random() * 255)},
            ${Math.round(Math.random() * 255)},
            ${Math.round(Math.random() * 255)}
        )
    `;
    return newRandomColor;
};

function Calculate(value1=0, value2=0) {
    this.value1 = value1;
    this.value2 = value2;

    this.showSum = () => {
        return this.value1 + this.value2;
    };
    this.showSub = () => {
        return this.value1 - this.value2;
    };
    this.showMultiply = () => {
        return this.value1 * this.value2;
    };
    this.showCompare = () => {
        if(this.value1 > this.value2) {
            return ">";
        } else if(this.value1 < this.value2) {
            return "<";
        } else {
            return "=";
        };
    };
};

btn_sum.addEventListener("click", () => {
    let newCalculation = new Calculate(Number(input1.value), Number(input2.value));
    symbol.innerText = "+";
    let newData = document.createElement('div');
    newData.style.width = '100%';
    newData.style.overflow = 'hidden';
    newData.style.backgroundColor = randomColor();
    let current_operation = `${input1.value} + ${input2.value} = ${newCalculation.showSum()}`;
    newData.innerText = current_operation;
    output.appendChild(newData);
    input1.value = "";
    input2.value = "";
    log.push(current_operation);
    localStorage.setItem("log", JSON.stringify(log));
});
btn_sub.addEventListener("click", () => {
    let newCalculation = new Calculate(Number(input1.value), Number(input2.value));
    symbol.innerText = "-";
    let newData = document.createElement('div');
    newData.style.width = '100%';
    newData.style.overflow = 'hidden';
    newData.style.backgroundColor = randomColor();
    let current_operation = `${input1.value} - ${input2.value} = ${newCalculation.showSub()}`;
    newData.innerText = current_operation;
    output.appendChild(newData);
    input1.value = "";
    input2.value = "";
    log.push(current_operation);
    localStorage.setItem("log", JSON.stringify(log));
});
btn_multiply.addEventListener("click", () => {
    let newCalculation = new Calculate(Number(input1.value), Number(input2.value));
    symbol.innerText = "*";
    let newData = document.createElement('div');
    newData.style.width = '100%';
    newData.style.overflow = 'hidden';
    newData.style.backgroundColor = randomColor();
    let current_operation = `${input1.value} * ${input2.value} = ${newCalculation.showMultiply()}`;
    newData.innerText = current_operation;
    output.appendChild(newData);
    input1.value = "";
    input2.value = "";
    log.push(current_operation);
    localStorage.setItem("log", JSON.stringify(log));
});
btn_compare.addEventListener("click", () => {
    let newCalculation = new Calculate(Number(input1.value), Number(input2.value));
    symbol.innerText = newCalculation.showCompare();
    let newData = document.createElement('div');
    newData.style.width = '100%';
    newData.style.overflow = 'hidden';
    newData.style.backgroundColor = randomColor();
    let current_operation = `${input1.value} ${newCalculation.showCompare()} ${input2.value}`;
    newData.innerText = current_operation;
    output.appendChild(newData);
    input1.value = "";
    input2.value = "";
    log.push(current_operation);
    localStorage.setItem("log", JSON.stringify(log));
});
// -------------------------------------------------------
