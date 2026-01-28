function checkNumber(number) {

    if (number > 0) {
        alert("Positive Number");
    } 
    else if (number < 0) {
        alert("Negative Number");
    } 
    else {
        alert("Zero");
    }
}

// This function gets input and passes it as argument
function handleClick() {
    let value = document.getElementById("num").value;

    if (value === "") {
        alert("Please enter a number");
        return;
    }

    checkNumber(Number(value)); // Passing argument
}
