function linearSearchAllIndices(arr,Value){
    const indices = [];

    for (let i = 0 ; i < arr.length; i++){
        if(arr[i] === Value){
            indices.push(i);
        }
    }
    return indices;
}

const array = [1,2,3,2,4,2,5];
const searchValue = 2;
const result = linearSearchAllIndices(array,searchValue);
if(result.length >0){
    console.log(`The value ${searchValue} was found at indices : ${result.join(', ')}`);
}
else{
    console.log(`The value ${searchValue} was not found in the array.`);
}