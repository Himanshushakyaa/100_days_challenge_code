function linearSearch(arr,searchValue){
    for(let i =0;i<arr.length;i++){
        if(arr[i] === searchValue){
            return i;
        }
    }
    return -1;
}
 const arr = [1,2,3,4,5];
 const searchValue = 3;
 const index = linearSearch(arr,searchValue)
 console.log(index)