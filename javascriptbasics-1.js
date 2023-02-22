// //  Node.js allows you to run JavaScript programs from the terminal.
//  Ctrl + K and Ctrl + C to Comment Lines
//  Ctrl + K and Ctrl + U to Uncomment Lines

//  Printing
// console.log("Hello world!")

//  single line comment

/** Multiline comment
 * 
 */

//  Variable Declarations
// const a = 10        //  const is short for constant. Cannot be reassigned.
// let b = 250         //  new way of declaring variables. Can be reassigned.
// var c = 3000        //  same as let.

//  typeof()
// console.log(typeof(c))  //  prints number (the type of the variable)

//  Primitive data types in JavaScript
/** 1. Undefined    (If a variable hasn't been assigned to a value, it is undefined)
 *  2. Boolean      (true or false)
 *  3. BigInt       (represent whole numbers larger than 2^53)
 *  4. Number       (includes integers, floats, big decimal, etc.)
 *      Operations that we can do on numbers:
 *      -   Basic Arithmetic
 *      -   Modulo
 *  5. String       (can be denoted by a single or double quotes)
 *      Operations that we can do on strings:
 *      -   String concatenation
 *      -   .length to get the length of the string
 *      -   charAt(), returns the character at a specific index
 *      -   .toUpperCase(), converts a string to uppercase
 *      -   .toLowerCase(), converts a string to lowercase
 *      -   .split(), takes a delimiter (where to split the string) and splits the string into an Array of strings
 *  6. null (represents an absence of any value; it is intentional)
 *  7. Symbol
 */

//  The following evaluates to false
// console.log(Boolean(0))
// console.log(Boolean(""))
// console.log(Boolean(null))

//  The following evaluates to true
// console.log(Boolean(-1))
// console.log(Boolean("Hello"))
// console.log(Boolean(1))

//  Complex data types
/** 1. Objects
 *  -   Collection of related data. Consists of key-value pairs. Keys are called properties or fields
 *  
 *  2. Arrays
 *  -   Denoted by square brackets. You can push and pop to append and delete an element from the array.
 */

// const person = {
//     name: "Rainier",
//     age: "21",
//     retired: false,

//     career: {
//         position: "Engineer",
//         yearsEmployed: 25
//     },

//     interests: ['Computers', 'Dogs']
// }

//  To access an object attribute or property use the dot notation.
// console.log(person.name)
// console.log(person.career.yearsEmployed)

// console.log(person)

//  Another way to access an attribute of an object is the following:
// console.log(person["career"])

//  To add an attribute to an existing object:
// person.employeeID = 12345

// console.log(person)

//  To delete a property:
// delete person.employeeID

// console.log(person)

//  You can have nested arrays and a nested object inside an array
// const numbers = [1, 2, 3, 4, 5]
// const mixed = [1, 2, "Rainier", true, [1, 4, 5], {property: 1234}]

// console.log(numbers)

/* ==================================================================== */
//  functions are a set of instructions that can be repeatedly called

//  Usual way to declare a function
// function add(x, y) {    //  Parameters are optional, obv
//     return x + y
// }

// console.log(add(5, 2))

//  An example of an arrow function
// const add = (x, y) => {
//     return x + y
// }

// console.log(add(5, 2))

//  You can add a function to an object
// const person = {
//     name: "Rainier",
//     age: 23,
//     greeting: function() {
//         console.log("Hello, my name is " + this.name)
//     }
// }

// person.greeting()
// const numbers = [1, 2, 3, 4, 5]
// console.log(numbers.pop())

//  The difference with using the function keyword and the arrow function with const is that functions declared using the function keyword are 'hoisted'
//  to the top of the code file.

/* ==================================================================== */
//  Equality
//  Double equal vs triple equal sign
/** 1. Double equal (==) is an abstract comparator. Does type conversion before checking for equality.
 *  2. Triple equal (===) is a strict comparator.
 */

// console.log(0 == "0")   //  Evaluates to true
// console.log(0 === "0")  //  Evaluates to false

// console.log(new String("hello") === new String("hello"))    //  Not the same, evaluates to false because objects have an identity.
// console.log("hello" === "hello")    //  Evaluates to true

/* ==================================================================== */
//  Control flows
//  If-else and if-else if-else

// if(Boolean(1)) {
//     console.log("It is true")
// } 
// else {
//     console.log("It is false")
// }

//  Switch statements
// const str = "CMSC 100"
// switch(str) {
//     case 'CMSC 127' :   console.log("File Processing and Database Systems"); break 
//     case 'CMSC 23' :    console.log("Mobile Computing"); break
//     case 'CMSC 100':    console.log("Web Programming"); break
//     default: console.log("Object-Oriented Programming");
// }

//  Loops
//  while, for, do-while, foreach

//  Example of while
// let n = 0
// while (n < 5) {
//     console.log("Print this")
//     n++
// }

//  Example of do-while
// do {
//     console.log("Print this")
//     n++
// } while(n < 5)

//  Example of for-loop
// const myArray = ["one", "two", "three", "four", "five"]
// for(let a = 0; a < myArray.length; a++) {
//     console.log(myArray[a])
// }

//  The parameter of the forEach function is a callback function
// const iterator = (element, index) => {
//     console.log(index + ":" + element)
// }

// myArray.forEach(iterator)
/* ==================================================================== */
//  Scope of a variable
//  globally scoped variables, declared at the root of the file
//  Block-scoped variables are scoped within the nearest enclosing curly braces
//  Function-scoped variables are scoped within the nearest enclosing function
// const a = 10    //  Block-scoped    
// let b = 250     //  Block-scoped
// var c = 3000      

// function printSomething() {
//     let d = "CMSC 100"  //  let, when defined within a function scope, is limited to that scope
//     console.log(d)
// }

// printSomething()

// function functionScoped() {
//     const myArray = [1, 2, 3, 4, 5]
//     for(var a = 0; a < myArray.length; a++) {
//         console.log(a + ":" + myArray[a])
//     }
//     console.log(a)
// }

// functionScoped()