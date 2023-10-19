//Modify the linear search function to return the index of the first occurrence of the search


function linearSearch(arr,target){
    for(let i = 0; i< arr.length;i++){
        if(arr[i] == target){
            return i;
        }
    }
    return -1;

}
const arr = [1,2,3,4,5];
const targetValue = 3;
const result = linearSearch(arr,targetValue);

if(result !== -1){
    console.log(`Found ${targetValue} at index ${result}`)
}else{
    console.log(`${targetValue} not found in the array`)
}