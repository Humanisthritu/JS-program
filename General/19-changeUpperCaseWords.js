// print array of given words to uppercase

/*
    Input:
    ['he', 'sun', 'moon'] 

    Output:
    ['HE', 'SUN', 'MOON']
*/

const upperCaseChange = (arr) => {
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        newArr.push(arr[i].toUpperCase());
    }
    return newArr;
}

let res = upperCaseChange(['he', 'sun', 'moon']);
console.log(res)