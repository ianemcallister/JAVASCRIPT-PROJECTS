
const GLOBAL_VARIABLE = "testing"; /* Global variable to test scope */

/* Define the error function */
function errorFunction() {
    console.log('This is a global variable:', GLOBAL_VARIABLE);
    function localVariable() {
        const LOCAL_VARIABLE = 'THIS SHOULD NOT COME THROUGH';
    };
    console.log('This is a local variable', LOCAL_VARIABLE); /* This variable is out of scope and should not be available */
}

/* Exectuate the error function */
errorFunction();

/* This collects the current time in hours and prints that to the screen */
function getHours() {
    const currentHours = new Date().getHours();
    document.getElementById('hourPar').innerHTML = currentHours;
    if(currentHours >= 12) { /* Check the time to determine the path to take */
        document.getElementById('emphasis').innerHTML = 'it\'s afternoon';
    } else {
        document.getElementById('emphasis').innerHTML = 'it\'s still morning';
    }
}

