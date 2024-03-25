// Question: sum of 1st 10 numbers
  
 
const num = 10

const sumRes = ( number) => {
  let sum = 0;
  for(let i = 0; i <= number; i++ ){
    sum = sum + i
  }
  return sum;
}

let res = sumRes(num)
console.log(res);



