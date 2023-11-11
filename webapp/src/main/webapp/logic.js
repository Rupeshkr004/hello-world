let countVal = document.getElementById("counterID");

function onIncrement() {
    let previousCountval = countVal.textContent;
    let updatedCountValue = parseInt(previousCountval) + 1;
    if (updatedCountValue > 0) {
        countVal.style.color = "green";
    } else if (updatedCountValue < 0) {
        countVal.style.color = "red";
    } else {
        countVal.style.color = "black";
    }
    countVal.textContent = updatedCountValue;
}


function onDecrement() {
    let currentVal = countVal.textContent;
    let decreaseValue = parseInt(currentVal) - 1;
    if (decreaseValue < 0) {
        countVal.style.color = "red";
    } else if (decreaseValue > 0) {
        countVal.style.color = "green";
    } else {
        countVal.style.color = "black";
    }
    countVal.textContent = decreaseValue;
}

function onReset() {
    countVal.textContent = 0;
    countVal.style.color = "black";
}