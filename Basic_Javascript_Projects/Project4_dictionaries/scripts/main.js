
const sample = {
    start: "first",
    middle: "second",
    end: 'third',
    extra: 'this will be deleted'
}

function changeWords(current) {
    switch(current) {
        case "Click Me!":
            document.getElementById("dictionary").innerHTML = sample.start;
            break;
        case "first":
            document.getElementById("dictionary").innerHTML = sample.middle;
            break;
        case "second":
            document.getElementById("dictionary").innerHTML = sample.end;
            break;
        case "third":
            document.getElementById("dictionary").innerHTML = sample.start;
            break;
        default:
            break;
    }
};

function deleteKVP() {
    delete sample.extra;
    document.getElementById('extra').innerHTML = sample.extra;
}