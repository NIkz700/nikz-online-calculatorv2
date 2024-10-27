function appendValue(value) {
    const display = document.getElementById("display");
    // If the display shows 'I LOVE YOU ?��', reset it
    if (display.value === "I LOVE YOU ?��") {
        display.value = "";
    }
    display.value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function showResult() {
    // Set the display to "I LOVE YOU ?��" regardless of input
    document.getElementById("display").value = "I LOVE YOU 🥺";
}
