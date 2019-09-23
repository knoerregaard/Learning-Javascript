/*
 * Subject: Callback pattern
 * Explore the callback pattern
 * 
 * 1. define two functions
 *    a) a function that can sum two numbers together, but 
 *       wrapped up in a setTimeout() to simulate a two second delay
 *    b) a function that calls the first functions and writes 
 *       the sum when ready.
 * 2. test your work
 */




getSum(2, 2, (result)=>{
    console.log(result);
});

function getSum(a, b, callback){
    setTimeout(() => {
        callback(a+b)
    }, 2000);
}

