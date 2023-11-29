function linearSearch(arr,target){
    for (let i = 0 ; i<arr.length;i++){
        if(arr[i]===target){
            return i;
        }
    }
    return -1;
}
const arr = [1,2,3,4,5,6,7];
const target = 4;
const index = linearSearch(arr,target)

if(index !== -1){
    console.log(`The value ${target} was found at index ${ index}.`)
}else{
    console.log(`The value ${target} was not found in the array`)
}