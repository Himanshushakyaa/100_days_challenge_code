let n =5;
function factorial(n){
    let ans =1;
    if(n===0) 
    return 1;
for(let i=2;i<=n; i++)
ans=ans*i;
return ans;
}
console.log(factorial(n));

// by using recursion

function factorial1 (n) {
    if (n == 0 || n==1){
        return 1
    }else{
        return n*factorial1(n-1);

    }
}

const number =5
const result = factorial1(number);
console.log(`The factorial of ${number} is:${result}`);