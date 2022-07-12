type UserId = string | number;
let UserId : UserId;
UserId = 123;
console.log (UserId)
UserId = 'abc';
console.log (UserId)

//tuplas
const user : [string,number] = ['pamela',32]
const [username,age] = user

console.log(username)
console.log(age)