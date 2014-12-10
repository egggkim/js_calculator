var digits = document.getElementsByClassName("digit");
var resultsDisplay = document.getElementById("resultsDisplay");
var operators = document.getElementsByClassName("operator");
var calculate = document.getElementById("calculate");

function each(kollection, fn) {
    for (var i = 0; i < kollection.length; i++) {
        fn(kollection[i]);
    }
}

function insert(elemento) {
    elemento.addEventListener("click", function () {
        console.log(elemento);
        if (elemento.className == "operator"){
            resultsDisplay.value = resultsDisplay.value + " " + elemento.innerHTML + " ";
        }
        else {
            resultsDisplay.value = resultsDisplay.value + elemento.innerHTML;
        }
    })
}

each(digits, insert);

each(operators, insert);

var operations = {
    "+": function (x, y) {
        return x + y;
    },

    "-": function (x, y) {
        return x - y;
    },

    "*": function (x, y) {
        return  x * y;
    },

    "/": function (x, y) {
        return x / y;
    }
};


var equals = calculate.addEventListener("click", function() {
    var expr = resultsDisplay.value.split(" ");
    console.log(expr);
    resultsDisplay.value = operations[expr[1]](Number(expr[0]), Number(expr[2]));


})

