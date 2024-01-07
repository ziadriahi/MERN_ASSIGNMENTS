const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const{name: otherName} = employee;
console.log(name);
//Uncaught ReferenceError : name is not defined
console.log(otherName);
//output: Elon