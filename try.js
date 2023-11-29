// let prompt = require('prompt-sync')()

// let num1 = parseInt(prompt(console.log('enter the first number'))); 
// let num2 = parseInt(prompt(console.log('enter the second number')));
// let num3 =  parseInt(prompt(console.log('enter the third number')))


// if(num1>num2 && num1 >num3 && num2> num3){
//     console.log(`${num1} is the largest number and ${num3} is smallest`)
// }else if(num1>num2 && num1>num3 && num3>num2){
//     console.log(`${num1} is largest and ${num2} smallest`)
// }else if(num2 >num1 && num2 >num3 && num1 >num3){
//     console.log(`${num2} is largest and ${num3} is smallest`)
// }else if(num2>num1 && num2 > num3 && num3>num1){
//     console.log(`${num2} is largest and ${num1} is smallest`)
// }else if( num3> num1 && num3>num2 && num2> num1){
//     console.log(`${num3} is largest and ${num1} is smallest`)
// }else if(num3>num1 && num3 > num2 && num1>num2){
//     console.log(`${num3} is largest and ${num2} is smallest`)
// }else{
//     console.log('enter valid number')
// }



// let arr = [2,4,5,7,9,2,]

// function largest(arr){
//     if(arr.length ===0){
//         console.log('Array is empty')
//     }
//     return arr.reduce((a,b) => {
//         return (a>b)? a :b ;
//     })
// }
// function smallest(){
//     if(arr.length === 0){
//         console.log('array is empty')
//     }
//     return arr.reduce((a,b) =>{
//         return (a<b ? a :b);
//     })
// }
// console.log('Largest array is ' + largest(arr))
// console.log('smallest array is ' + smallest(arr));




// let num =[ 56,2,6,7,8,9,0,13,43,5,1]

// var largest = num[0];
// var smallest = num[0];


// for(var i = 1; i<num.length;i++ ){
//     if(num[i] > largest){
//         largest = num[i];

//     }else if(num[i]<smallest){
//         smallest = num[i];
//     }
// }
// console.log(largest )
// console.log(smallest)



// let arr = [23,34,45,65,9,12,8,7]

// let odd = [];
// let  even = [];
// for (const num of arr){
//     if(num % 2 == 0){
//         even.push(num)
//     }
// }
// for(const num of arr){
//     if(num % 2 != 0){
//         odd.push(num)
//     }
// }

// let add = odd.concat(even)

// console.log(even)
// console.log(odd)
// console.log(add)



// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
  
//   const lydia = new Person('Lydia', 'Hallie');
//   const sarah =  new Person('Sarah', 'Smith');
  
//   console.log(lydia);
//   console.log(sarah);


function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line
for (var i = 0; i < arr.length; i++) {

  
    for (var j = 0; j < arr[i].length; j++) {
      product = product * arr[i][j];

      // console.log(arr[i])
      console.log(arr[j])
    }
  }
  // Only change code above this line
  return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);



