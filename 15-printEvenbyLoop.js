// question : print even no. 1-15 using for Loop 

const num = 15

const evenNo = (number) => {
    for(let i = 1 ; i < number ; i++){
        if(i%2==0){
            console.log(i)
        }
    }
}

 evenNo(num)
