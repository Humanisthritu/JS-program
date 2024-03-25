// question: write the factorial of a number

/* 
    Factorial of 5= 5*4*3*2*1
    o Fatorial of 0 = 1
*/



const fact = (number) => {
    let product = 1;
    for(let i = number; i > 0; i--){
        // console.log(i)
        product = product * i;
    }
    return product
}

let res = fact(5)
console.log(res)


