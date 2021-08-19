// console.log("Hello World!")
//using "tsc -w --preserveWatchOutput" to auto update nodemon


//count is of "type" number
let count = 5;
count = 10;
// count = "Justin"; //not of "type" number

//Const's type is a literal
const fName = "Abel";

//this makes a variable of "type" any (interchangeable)
let testing: number; //avoid using "type" any(blank)! Can break the code.
testing = 5;
// testing = "People"

//declaring a pattern
type Student = {
    fname: string
    lname: string
    grade: number
}

//declaring an object
let student: Student = {
    fname: "Cherron",
    lname: "Simes",
    grade: 12,
}

let student2 = {
    fname: "Jane",
    lname: "Adam",
    grade: 23,
}

function toString(student: Student): string {
    return JSON.stringify(student)
}

const toStringArrow = (student2: Student): string => {
    return JSON.stringify(student2)
}


console.log(toStringArrow(student2))



function add(x: number, y: number): number {
    let result = x + y
    return result
}

// Any & Void

//Union "|" is an "or" symbol
type Status = "success" | "failure"
type ServerResponse = Student | Error

//Tuple(JavaScript Tuples)
function sendMessage(): [success:Status, response: ServerResponse ] {
    return ["success", {
        fname: "Cherron",
        lname: "Simes",
        grade: 12
    }]
}

const [statusResult, data] = sendMessage()
if (statusResult == "success")
    console.log(data)