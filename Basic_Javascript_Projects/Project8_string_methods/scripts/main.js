
function formatText() {
    /* Demonstrate concat() at work */
    document.getElementById('concat').innerHTML = "This is".concat(' a concatenated', " sentence.");
    
    /* Demonstrate slice() at work */
    const longSentence = "This is the longer version of the sentance, but this is the shorter version";
    document.getElementById('slice').innerHTML = longSentence.slice(48, longSentence.length);

    /* Demonstrates toString() at work */
    document.getElementById('toString').innerHTML = "this is a sentance with numbers turned into a string: " + (2314).toString();

    /* Demonstrates toPrecision() at work */
    document.getElementById('toPrecision').innerHTML = "this number has been narrowed in prcision: " + (12.4091823712).toPrecision(2);

}