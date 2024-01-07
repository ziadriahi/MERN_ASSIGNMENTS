const numbers = [8,2,3,5,6,1,67,12,2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;

console.log(first == second);
//output : False
console.log(first == third);
//output : True
