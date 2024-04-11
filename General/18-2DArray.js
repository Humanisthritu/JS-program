// print all the elements in a 2 d array

/*
1-D array : [12, 13, 67, 12, 32]

2-D array: 
    o (2 x 3) matrix
        Columns (j)
 Rows(i)  12, 13, 14
 Rows(i)  15, 16, 17

*/


let res = ''
for(let i = 0; i < 2; i++){
    res = ''
    for(let j = 0; j < 3; j++){
        res += j + ' ';
    }
    console.log(res)
}



