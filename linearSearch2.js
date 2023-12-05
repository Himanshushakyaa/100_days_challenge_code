//Modify the linear search function to return the index of the last occurrence of the search


function linearSearchLastOccurrence(arr, target) 
{
    let lastIndex = -1;
    
    for (let i = 0; i < arr.length; i++) 
    {
      if (arr[i] === target) {
        lastIndex = i; 
      }
    }
    
    return lastIndex; 
}
  
  // Example usage:
  const array = [1, 2, 3, 2, 4, 5, 2];
  const targetValue = 2;
  const result = linearSearchLastOccurrence(array, targetValue);
  
  if (result !== -1) {
    console.log(`Last occurrence of ${targetValue} at index ${result}`);
  } else {
    console.log(`${targetValue} not found in the array.`);
  }
  