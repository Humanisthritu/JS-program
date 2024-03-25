//Question :Write a JS code to demonstrate Async loop

const asyncLoop = () => {
    for(let i = 0; i<10 ; i++ ){
        setTimeout(()=>{
        console.log(i)
        },5000)
    }
    
}

asyncLoop()


