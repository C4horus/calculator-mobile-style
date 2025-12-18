function press(num) {
    document.getElementById("display").value += num;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculate() {
    try {
        let result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;
    } catch {
        alert("Invalid Input!");
    }
}
