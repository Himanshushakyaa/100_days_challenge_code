function linearSearchByProperty(arr,propertyName,targetValue){
    for(let i = 0;i<arr.length;i++){
        if(arr[i][propertyName] === targetValue){
            return i ;

        }
    }
    return -1
}
 const people = [
    {name:"Himanshu", age:23},
    {name:"shiv", age: 30},
    {name:"parvati", age : 25 }
 ];

//  console.log(people.length)

 const PropertyName = "age";
 const targetValue = 23;

 const result = linearSearchByProperty(people,PropertyName,targetValue)
 if(result !== -1){
    console.log(`Found ${targetValue} in the array at index ${result}`)
 }else{
    console.log(`${targetValue} not found in the array.`);
 }


