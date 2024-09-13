

function colorFn() {
    let Color_Output;
    let Colors = document.getElementById('colorInput').value;
    let Color_String = ' is a great color!'; 
    switch(Colors) {
        case "Red":
            Color_Output = "Red" + Color_String;
            break;
        case "Yellow":
            Color_Output = "Yellow" + Color_String;
            break;
        case "Green":
            Color_Output = "Green" + Color_String;
            break;
        case "Blue":
            Color_Output = "Blue" + Color_String;
            break;
        case "Pink":
            Color_Output = "Pink" + Color_String;
            break;
        case "Purple":
            Color_Output = "Purple" + Color_String;
            break;
        default: 
            Color_Output = "Please enter a color exatly as written on the above list";
    }
    document.getElementById('Output').innerHTML = Color_Output;
}