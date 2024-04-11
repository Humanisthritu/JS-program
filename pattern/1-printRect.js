/*
print the pattern

****
****
****


*/

let res = ''
for(let i=0; i < 3; i++){
    res = ''
    for(let j = 0; j < 4; j++){
        res += '*'
    }
    console.log(res)
}

// i=0, j=0 --> res = *
// i=0, j=1 --> res += * --> res = **
// i=0, j=2 --> res += * --> res = ***
// i=0, j=3 --> res += * --> res = ****

// ****

// res = ''
// i=1, j=0 --> res = *
// i=1, j=1 --> res = **
