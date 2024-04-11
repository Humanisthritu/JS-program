/*
Question:
---------
Write a function called capitalizeFirst. 
Given an array of strings, capitalize the first letter of 
each string in the array.
*/

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']

const capitalizeFirst= (arr) => {
    let newArr = [];
    for(let i = 0; i< arr.length; i++) {
        let word = arr[i]; //banana
        let capitalizeWord = word.charAt(0).toUpperCase() + word.slice(1); // B + anana = Banana
        newArr.push(capitalizeWord);
    }
    return newArr;
}

const res = capitalizeFirst(['car','taco','banana']);
console.log(res);
