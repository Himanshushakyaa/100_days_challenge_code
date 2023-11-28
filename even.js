function isEven(number){
    return number%2 ===0
} 
const num11=11
const num22=7
console .log(`${num11} is even  ? ${isEven(num11)}`)
console.log(`${num22} is even ? ${isEven(num22)}`)



// find even and odd number 


const num1 = 17;
const num2 = 12;
const num3 = 19;
 
if(num1>num2 && num1>num3  && num2>num3){
    console.log(`${num1} is largest and ${num2} is smallest`)
}else if(num1>num2 && num1>num3 && num3>num2){
    console.log(`${num1} is larget and ${num3} is smallest`)
}else if(num2>num3 && num2>num3 && num1>num3){
    console.log(`${num2} is largest and ${num1} is smallest`)
}else if(num2>num3 && num2>num3 && num3>num1){
    console.log(`${num2} is largest ${num3} is smallest`)
}else if(num3>num1 && num3>num2 && num2>num1){
    console.log(`${num3} is largest ${num1} is smallest`)
}else if(num3>num1 && num3>num2 && num1>num2){
    console.log(`${num3} is largest ${num2} is smallest`)
}else{
    console.log('enter invalid number')
}






