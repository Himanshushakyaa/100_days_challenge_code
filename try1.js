// const panels = document.querySelectorAll('.panel')

// panels.forEach(panel =>{
//     panel.addEventListener('click',() => {
//         removeActiveclasses()
//         panel.classList.add('active')
//     })
// })

// function removeActiveclasses(){
//     panels.forEach(panel => {
//         panel.classList.remove('active')
//     })
// }


// function SumArray(arr)
// {
        
//     //code here
// let sum=0;
// for(let i=0;i<arr.length;i++)
// {
// sum+=arr[i]
// }
// for(let i=0;i<arr.length;i++)
// {
// arr[i]=sum-arr[i]
// }
//   return arr  
// }
// const arr = [3,6,4,8,9];




// function count(num){
//   if(num === 1){
//     console.log(num)
//     return
//   }else{
//     console.log(num)
//     return count(num-1)
//   }
// }

// let num = 5;



function f(n){
  if(n ==0 || n==1)
  return 1;
else 
return n*f(n-1);
}
let n =5;
console.log("factorial of "+ n+" is. " + f(n))
