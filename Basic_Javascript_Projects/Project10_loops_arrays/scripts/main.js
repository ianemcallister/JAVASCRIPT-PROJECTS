
/* While Loop Function */
function callWhile() {
    let i = 0; /* set the counter */
    let newString = ""; /* init the return string */
    while(i < 10) { /* loop until i = 10; */
        newString += i; /* add a character on each pass */
        i++ /* incirment the counter */
    };
    document.getElementById('whileLoop').innerHTML = newString; /* write the results */
};

/* for Loop Function */
function callFor() {
    let newString = ""; /* init the return string */
    for(let i = 0; i < 10; i++) {
        newString += i;
    }
    document.getElementById('forLoop').innerHTML = newString; /* write the results */
};

/* Array function */
function arrayFn() {
    let newArray = ['test', 'dog', 'cat']; /* init an array value sequence */
    document.getElementById('arrayElement').innerHTML = newArray; /* write the array */
}


function constFn() {
    const oldValue = document.getElementById('Constant').innerHTML; /* get the current value */
    const newValue = oldValue + "and then..."; /* add to the string each time */
    document.getElementById('Constant').innerHTML = newValue; /* write the value out */
}