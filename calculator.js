let display = document.getElementById("display");

let arr = [];

function press(value) {

    arr.push(value);

    display.value = display.value + value;

}


function clearDisplay() {

    arr = [];

    display.value = "";

}


function calculate() {

    let first = "";

    let second = "";

    let operator = "";

   
    for (let i = 0; i < arr.length; i++) {

        if (
            arr[i] == "+" ||
            arr[i] == "-" ||
            arr[i] == "*" ||
            arr[i] == "/"
        ) {

            operator = arr[i];

        }

        else if (operator == "") {

            first = first + arr[i];

        }

        else {

            second = second + arr[i];

        }

    }

   
    first = parseInt(first);

    second = parseInt(second);

    let answer;

    if (operator == "+") {

        answer = first + second;

    }

    else if (operator == "-") {

        answer = first - second;

    }

    else if (operator == "*") {

        answer = first * second;

    }

    else if (operator == "/") {

        answer = first / second;

    }

    display.value = answer;

}