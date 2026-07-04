const display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = "Error";
    }
}

function sqrt() {
    try {
        display.value = Math.sqrt(parseFloat(display.value));
    } catch (e) {
        display.value = "Error";
    }
}

function square() {
    try {
        let x = parseFloat(display.value);
        display.value = x * x;
    } catch (e) {
        display.value = "Error";
    }
}

function power() {
    let exponent = prompt("Enter the exponent:");
    if (exponent !== null && exponent !== "") {
        display.value = Math.pow(parseFloat(display.value), parseFloat(exponent));
    }
}

function sin() {
    display.value = Math.sin(parseFloat(display.value) * Math.PI / 180);
}

function cos() {
    display.value = Math.cos(parseFloat(display.value) * Math.PI / 180);
}

function tan() {
    display.value = Math.tan(parseFloat(display.value) * Math.PI / 180);
}

function log() {
    display.value = Math.log10(parseFloat(display.value));
}

function ln() {
    display.value = Math.log(parseFloat(display.value));
}

function appendPi() {
    display.value += Math.PI;
}

document.addEventListener("keydown", function(event) {
    const key = event.key;

    if (!isNaN(key) || "+-*/.%()".includes(key)) {
        display.value += key;
    } else if (key === "Enter") {
        event.preventDefault();
        calculate();
    } else if (key === "Backspace") {
        deleteLast();
    } else if (key === "Escape") {
        clearDisplay();
    }
});
