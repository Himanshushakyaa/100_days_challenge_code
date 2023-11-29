function linearSearchLargest(arr){
    if(arr.length === 0 ){
        return -1;

    }
    let largestIndex = 0;
    for(let i =0 ;i <arr.length; i++){
        if(arr[i]>arr[largestIndex]){
            largestIndex = i;
        }
    }
    return largestIndex;

}
const array = [12,5,43,7,24,62,95];
const largestIndex = linearSearchLargest(array);
if(largestIndex !== -1){
    console.log(`The largest element is ${array[largestIndex]} at index ${largestIndex}`)

}else{
    console.log(` The largest number in not found`)
}