// print half pyramid

/*
    --> half pyramid
    *
    **
    ***
    ****

    rows & columns
    row-- i
    col -- j
    o we need to run two for loops
    
    2. make some relation with i and j
    i=0,  --> 1 star
    i=1, --> 2 star
    i=2 --> 3 star
    rows directly proportional to stars
    
*/

let res;
for(let i = 0; i < 4; i++){
    res = ''
    for(let j = 0; j <= i ; j++){
        res += '*'
    }
    console.log(res);
}


