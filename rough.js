


const num = 5 

const fact = (number) => {
    let facto = 1
    for(let i = number; i > 0 ; i-- ){
       facto = facto * i
    }
    return facto
}

let res = fact(num)
console.log(res)