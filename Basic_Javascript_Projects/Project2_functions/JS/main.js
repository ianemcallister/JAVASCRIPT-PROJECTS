
function toggleValue() {
    const element = document.getElementById('emptySpan'); /*gets the element*/
    if(element.innerHTML == 'on'){ /* flips the value */
        element.innerHTML = 'off'
    } else {
        element.innerHTML = 'on'
    }
}

function addValue() {
    const element = document.getElementById('emptySpan'); /*gets the element*/
    element.innerHTML += "and"; /* Adds value to the string */
}