//find the factorial 
  
let input = require('prompt-sync')()

let number = parseInt(input(console.log('Enter positive number')))

if(number<0){
    console.log('error! Factorial for negative number does not exist')
}else if(number === 0){
    console.log(`The factorial  of ${number} is 1`)
}else{
    let fact=1;
    for(i=1;i<=number;i++){
        fact *= i
    }
    console.log(`The factorial of ${number} is ${fact}`)
}