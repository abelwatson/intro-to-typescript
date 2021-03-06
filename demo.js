
//Basic Class
class Animal {
    //Class Properties
    //Constructor Function
    constructor(name, legs){
        this.name = name
        this.legs = legs
    }
    //Methods
    speak() {
        console.log(this.name)
    }
}

// Class Inheritance
class Tiger extends Animal {
    #password = 52
    constructor(name, legs, isDanger){
        super(name, legs)
        this.isDanger = isDanger
    }
    //getters
    get password (){
        return this.#password
    }
    set password(n){
        if (typeof n === "number")
            this.#password = n
    }
}

let tiger = new Tiger("bengal", 4, true)
console.log(tiger)
tiger.password = "Hello"
console.log(tiger.password)

    //Create an instance of a class
let dog = new Animal("Golden Retriever", 4)
let cat = new Animal("Calico", 4)

// console.log(dog, cat)
cat.speak()








let numbers = [1, 2, 4]
class Template {
    constructor(n){
        this.value = n
    }
}

let tNumbers = numbers.map(n => new Template(n))
// console.log(tNumbers)