//Implementation of a binary search function in JavaScript:

function binarysearch(arr,searchValue){
    let left = 0;
    let right = arr.length -1;
    
    while (left <= right){
        const  mid = Math.floor((left +right)/2);
        // console.log(mid)
        if(arr[mid] === searchValue){
            return mid;
        }else if(arr[mid]< searchValue){
            left =mid+1;
        }else{
            right = mid -1;
        }

    }
    return -1;
}
const arr = [1,2,3,5,6,7]
const searchValue = 5;
const binary = binarysearch(arr,searchValue);
console.log(binary)