const obj = {
    firstName: "Anshika",
    lastName: "Agarwal"
}

console.log(obj.firstName);
console.log(obj.lastName);

// Object destructuring

const {firstName , lastName} = obj;

console.log(firstName);
console.log(lastName);

let a , b, rest;

[a , b, ...rest] = [50, 60, 78, 89];

console.log(rest);