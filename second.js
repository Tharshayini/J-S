const car={name:"BMW", color:"blue"} //const <objname>={key:value}

const person={
    firstname :"tharsha",
    lastname:"Loges",
    age:25
};

console.log(person.firstname+" is "+person.age);
console.log(person["firstname"] + " is " +person["age"]);


let x = 5n;
//let y= Number(x)/2;
let y= x/2;
console.log(y);

function fibonacci(num) {
	let num1 = 0;
	let num2 = 1;
	let sum;
	let i = 0;
	for (i = 0; i < num; i++) {
		sum = num1 + num2;
		num1 = num2;
		num2 = sum;
	}
	return num2;
}

console.log("Fibonacci of first 2 numbers: " + fibonacci(2));
console.log("Fibonacci of first 5 numbers: " + fibonacci(5));


// 1. String
// 2. Number
// 3. Bigint
// 4. Boolean
// 5. Undefined
// 6. Null
// 7. Symbol
// 8. Object


let num1 = 9.99;

let string = "adfoafghijklmnopqr";

let bool = true;

// const <objname> = {key : value}
const obj1 = {
    "first Name" : "Priyansu",
    "last Name" : "Sekhar",
    "my age" : 21,
    "Phone no" : 43546365
}

console.log(obj1);

const arr = [1,2,34,5,6,23]

const date = new Date("2023-05-15")

console.log(date.toString());

// find the difference between null and undefined values
// try to understand how bigint and exponentiation in js -- examples and practice 

// scoping - global and local

// let name1 = "test"

// {
//     let name2 = "test2"
//     {
//         let name = "Priyansu";
//         console.log(name);
//     }
    
//     console.log(name1);
// }

// console.log(name2);

function sumArr(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum;

}

// fibonacci series function - HW


// console.log(sumArr(arr));



// function ConvertToCelsius(farhenheit) {
//     return (farhenheit - 32) * 5/9
// }

// let value = ConvertToCelsius(88);

// console.log(typeof(value));


const car1 = {
    "color" : "blue",
    "name" : "BMW",
    "mileage" : 100
}

const car2 = {
    "color" : "red",
    "name" : "Audi",
    "mileage" : 200
}

console.log(car1["color"]);
console.log(car1.color);

const newObj = {
    name: "Test",
    "Number" : 5546546,
    obj_child : {
        name2 : this.name,
        class : "std"
    },
    "date" : "12-12-12"
}