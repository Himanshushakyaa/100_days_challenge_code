function linearSearch2D(arr,target){
    for ( let row = 0; row < arr.length;row++){
        for(let col = 0 ;col <arr[row].length;col++){
         if(arr[row][col] === target){
            return  {row,col};
         }
        }
    }
    return null;
}
const twoDArray = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
];

const targetValue = 7;
const result = linearSearch2D(twoDArray,targetValue);
if(result!== null){
    console.log(`Found ${targetValue} at row ${result.row} column ${result.col}`);

}else{
    console.log(`${targetValue} not found in the 2D array.`);
}



