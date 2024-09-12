
/* This function collects the height value from the input and determins results accordingly*/
function Ride_Function() {
    var Height, Can_Ride;
    Height = document.getElementById("Height").value;
    Can_Ride = (Height < 52) ? "You are too short" : "You are tall enough"; /* Checks value against the standard */
    document.getElementById("Ride").innerHTML = Can_Ride + " to ride this ride";
}

/* Constructor Function to define object instances */
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Model = Make;
    this.Vehicle_Make = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_color = Color;
}

/* Defining instance values */
const Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
const Emily = new Vehicle("Jeep", "Trail HAkw", 2019, "White and Black");
const Erik = new Vehicle('Ford', "Pinto", 1971, "Mustard");

/* Running combination function */
function myFunction() {
    document.getElementById('Keywords_and_Constroctors').innerHTML = 'Erik drives a ' + Erik.Vehicle_color + "-colorded " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year + ".";
}

/* This is a series of nested functions */
function nestedFunction() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() { Starting_point += 1; }
        Plus_one();
        return Starting_point;
    }
}