"use strict";
// console.log("Hello World!")
//using "tsc -w --preserveWatchOutput" to auto update nodemon
//count is of "type" number
var count = 5;
count = 10;
// count = "Justin"; //not of "type" number
//Const's type is a literal
var fName = "Abel";
//this makes a variable of "type" any (interchangeable)
var testing; //avoid using "type" any! Can break the code.
testing = 5;
//declaring an object
var student = {
    fname: "Cherron",
    lname: "Simes",
    grade: 12,
};
function toString(student) {
    return JSON.stringify(student);
}
var toStringArrow = function (student) {
    return JSON.stringify(student);
};
// console.log(toString(student))
function add(x, y) {
    var result = x + y;
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
var _a = sendMessage(), statusResult = _a[0], data = _a[1];
if (statusResult == "success")
    console.log(data);
