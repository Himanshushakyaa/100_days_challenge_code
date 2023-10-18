function quickSort(arr){
    if(arr.length <= 1){
        return arr;
    }
      
    const p = arr[0];
    const left = [];
    const right = [];

    for (let i = 1; i<arr.length; i++){
       if(arr[i] < p){
        left.push(arr[i])
       } else{
        right.push(arr[i])
       }
    }
    return [...quickSort(left),p,...quickSort(right)];
}
 const arr = ["banana","mango","apple","grapes","date"];
 const rest = quickSort(arr)
 console.log(rest)