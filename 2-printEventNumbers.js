//Write a JS code to print Even numbers in given array

let arr = [13,23,12,45,22,48,66,100]


const evenNumber = (evenArr) =>{
   for(let i = 0 ; i<evenArr.length ; i++ ){
        if(evenArr[i]%2==0){
             console.log(evenArr[i])
        }
    }
 
}

 evenNumber(arr);



