//Modify the binary search function to return the index of the first occurrence of the search
//value, or -1 if the value is not found.

function binarySearchFirstOccurrence(arr,target){
    let left = 0;
    let right = arr.length-1;
    let result = -1;

    while(left <= right){
        const mid = Math.floor((left+right)/2);
        const midValue = arr[mid];

        if(midValue === target ){
            result = mid;
            right = mid -1;
        }else if(midValue < target){
            left = mid+1;
        }else{
            right = mid-1;
        }
    }
    return result;
}

const sortedArray = [1,3,4,5,6,6,6,7,8];
const target = 6;
result = binarySearchFirstOccurrence(sortedArray,target);

if(result !== -1){
    console.log(`found the first occurrence of ${target} at index ${result}`)

}else{
    console.log(`${target} not found in the array.`)

}