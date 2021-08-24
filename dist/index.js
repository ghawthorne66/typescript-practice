"use strict";
let id = 5;
let company = 'Greg Hawthorne';
let isPublished = true;
let x = 'Hello';
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'Hello'];
//Tuple
let person = [1, 'Greg', true];
//Tuple Array
let employee;
employee = [
    [1, 'Greg'],
    [2, 'John'],
    [3, 'Doug']
];
//Union
let pid = 22;
pid = '22';
//Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
const user = {
    id: 1,
    name: 'John'
};
//Type Assertion
let cid = 1;
// let customerId = <number>cid
let customerId = cid;
//Functions
function addNum(x, y) {
    return x + y;
}
// console.log(addNum(5, 2))
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'John'
};
user1.age = 5;
const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
//Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const greg = new Person(1, 'Greg');
const mike = new Person(2, 'Mike');
console.log(greg.register());
