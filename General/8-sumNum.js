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

// sum = 0
// for(let i = 1 ; i < 11 ; i++ ){
 
//   sum = sum + i
 
// }

// console.log(sum)


