const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const {password: hashedPassword} = person;
console.log(password);
//output : 12345
console.log(hashedPassword);
//output: undefined