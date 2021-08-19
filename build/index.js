"use strict";
// console.log("Hello World!")
//using "tsc -w --preserveWatchOutput" to auto update nodemon
//count is of "type" number
let count = 5;
count = 10;
// count = "Justin"; //not of "type" number
//Const's type is a literal
const fName = "Abel";
//this makes a variable of "type" any (interchangeable)
let testing; //avoid using "type" any(blank)! Can break the code.
testing = 5;
//declaring an object
let student = {
    fname: "Cherron",
    lname: "Simes",
    grade: 12,
};
let student2 = {
    fname: "Jane",
    lname: "Adam",
    grade: 23,
};
function toString(student) {
    return JSON.stringify(student);
}
const toStringArrow = (student2) => {
    return JSON.stringify(student2);
};
console.log(toStringArrow(student2));
function add(x, y) {
    let result = x + y;
    return result;
}
//Tuple(JavaScript Tuples)
function sendMessage() {
    return ["success", {
            fname: "Cherron",
            lname: "Simes",
            grade: 12
        }];
}
const [statusResult, data] = sendMessage();
if (statusResult == "success")
    console.log(data);
