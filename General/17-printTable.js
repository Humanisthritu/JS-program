// print the table of a number input by the user.

const table = (num) => {
    for (let i = 1 ; i < 11 ; i++){
        console.log(`${num} X ${i} = ${num * i}`);
    }
}

table(5)
