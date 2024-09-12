

function add(x) { document.getElementById("math").innerHTML = x + 1; }

function subtract(x) { document.getElementById("math").innerHTML = x -1; }

function multiply(x) { document.getElementById("math").innerHTML = x * 2; }

function remainder(x) { document.getElementById("math").innerHTML = x % 2; }

function multipleOps(x) { document.getElementById("math").innerHTML = (x * 3) / 2; }

function negate(x) { document.getElementById("math").innerHTML = -x; }

function incriment(x) { document.getElementById("math").innerHTML = ++x; }

function decrement(x) { document.getElementById("math").innerHTML = --x; }

function random(x) { document.getElementById("math").innerHTML = Math.floor(Math.random() * 10); }