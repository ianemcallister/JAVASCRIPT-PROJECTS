
function getReceipt() {
    // Initializes our string so it can be pased to function, growing line by line
    var text1 = '<h3>Your Order:</h3>';
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName('size');
    for (var i = 0; i < sizeArray.length; i++) {
        if(sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1 + selectedSize + "<br>";
        }
    }

    // Assign the sizeTotal based on selection
    if(selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if(selectedSize === 'Small Pizza') {
        sizeTotal = 8;
    } else if(selectedSize === 'Medium Pizza') {
        sizeTotal = 10;
    } else if(selectedSize === 'Large Pizza') {
        sizeTotal = 14;
    } else if(selectedSize === 'Extra Large Pizza') {
        sizeTotal = 16;
    }

    // Incriment the runnignTotal
    runningTotal = sizeTotal;
    console.log(selectedSize + " = $" + sizeTotal + ".00");
    console.log("size text1: " + text1);
    console.log("subtotal: $" + runningTotal + ".00");

    // Run the getToppings function
    getTopping(runningTotal, text1);

    function getTopping(runningTotal, text1) {
        var toppingTotal = 0;
        var selectedTopping = [];
        var toppingArray = document.getElementsByClassName("toppings");

        // Push selected toppings to the array
        for (var j = 0; j < toppingArray.length; j++) {
            if(toppingArray[j].checked) {
                selectedTopping.push(toppingArray[j].value);
                console.log("selected topping item: (" + toppingArray[j].value + ") ");
                text1 = text1 + toppingArray[j].value + "<br>";
            }
        }
        var toppingCount = selectedTopping.length;
        if(toppingCount > 1) {
            toppingTotal = (toppingCount - 1);
        } else {
            toppingTotal = 0;
        }
        runningTotal = (runningTotal + toppingTotal);
        console.log("total selected topping items: " + toppingCount);
        console.log(toppingCount + " topping - 1 free topping = " + "$" + toppingTotal + ".00");
        console.log("topping text1: " + text1);
        console.log("Purchase Total: " + "$" + runningTotal + ".00");
        document.getElementById("showText").innerHTML = text1;
        document.getElementById("TotalPrice").innerHTML = "<h3>Total: <strong>$" + runningTotal + ".00" + "</strong></h3>";
    }
}

// Form phone validation
function validateForm() {
    console.log('running validateForm');
    let x = document.forms['order']['phoneNumber'].value;
    if(x == "") {
        alert('Phone number must be filled out');
        return false;
    }
}