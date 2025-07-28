//Section for switching between pages, 
let switchTemperature = document.getElementById("first");
let switchCurrency = document.getElementById("second");
let switchSpeed = document.getElementById("third");

let temperatureSection = document.querySelector(".temperature");
let currencySection = document.querySelector(".currency");
let speedSection = document.querySelector(".speed");

let finalBorder = document.querySelector(".final_border")
finalBorder.style.display = "none";

let finalBorder_01 = document.querySelector(".final_border_01")
finalBorder_01.style.display = "none";

let finalBorder_02 = document.querySelector(".final_border_02")
finalBorder_02.style.display = "none";

//Default page(The first one)
temperatureSection.style.display = "block";
currencySection.style.display = "none";
speedSection.style.display = "none";


//Implementing addEventListener gives opportunity to change pages, when clicking on the button
switchTemperature.addEventListener("click", function () {
    temperatureSection.style.display = "block";
    currencySection.style.display = "none";
    speedSection.style.display = "none";
    finalBorder.style.display = "none";
});

switchCurrency.addEventListener("click", function () {
    temperatureSection.style.display = "none";
    currencySection.style.display = "block";
    speedSection.style.display = "none";
});

switchSpeed.addEventListener("click", function () {
    currencySection.style.display = "none";
    temperatureSection.style.display = "none";
    speedSection.style.display = "block";
});

let currencyInput = document.getElementById("currencyInput");
let buttonCurrency = document.getElementById("button_currency");
let buttonSpeed = document.getElementById("button_speed");

//Temperature section
let input = document.getElementById("myInput");
let button_temperature = document.getElementById("button_temperature");
let celcius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");
let kelvin = document.getElementById("kelvin");

button_temperature.addEventListener("click", function () {
    let inputValue = parseFloat(input.value);
    let selectedUnit = document.querySelector('input[name="degree"]:checked');
    celcius.textContent = "";
    fahrenheit.textContent = "";
    kelvin.textContent = "";
    input.style.border = "";

    if (isNaN(inputValue) || !selectedUnit) {
        input.style.border = "2px solid red";
                return;
    }
//converting degrees and calculating them 
    let degree = selectedUnit.value;
    if (degree === "celcius") {
        finalBorder.style.display = "block";
        let fahrenheitValue = (inputValue * 9 / 5) + 32;
        let kelvinValue = inputValue + 273.15;
        celcius.textContent = `Celcius: ${inputValue.toFixed(2)} `;
        fahrenheit.textContent = `Fahrenheit: ${fahrenheitValue.toFixed(2)} `;
        kelvin.textContent = `Kelvin: ${kelvinValue.toFixed(2)} `;
    } else if (degree === "fahrenheit") {
        finalBorder.style.display = "block";
        let celsiusValue = (inputValue - 32) * 5 / 9;
        let kelvinValue = (inputValue - 32) * 5 / 9 + 273.15;
        celcius.textContent = `Celcius: ${celsiusValue.toFixed(2)} `;
        fahrenheit.textContent = `Fahrenheit: ${inputValue.toFixed(2)} `;
        kelvin.textContent = `Kelvin: ${kelvinValue.toFixed(2)} `;
    } else if (degree === "kelvin") {
        finalBorder.style.display = "block";
        let celsiusValue = inputValue - 273.15;
        let fahrenheitValue = (inputValue - 273.15) * 9 / 5 + 32;
        celcius.textContent = `Celcius: ${celsiusValue.toFixed(2)} `;
        fahrenheit.textContent = `Fahrenheit: ${fahrenheitValue.toFixed(2)} `;
        kelvin.textContent = `Kelvin: ${inputValue.toFixed(2)} `;
    }
});

//Currency section 
document.getElementById("button_currency").addEventListener("click", function () {
    finalBorder_01.style.display = "block";
    let amountInput = document.getElementById("currencyInput");
    let amount = parseFloat(amountInput.value);

    let fromCurrency = document.querySelector('input[name="currency1"]:checked');
    let toCurrency = document.querySelector('input[name="currency2"]:checked');
    let result01 = document.getElementById("result_01");

    result01.textContent = "";
    amountInput.style.border = "";

    if (isNaN(amount) || !fromCurrency || !toCurrency) {
        amountInput.style.border = "2px solid red";
        return;
    }

    let from = fromCurrency.value;
    let to = toCurrency.value;
    let rate = 0;

    //giving a rate for each currency for better making calculations 
    if (from === "hryvnia" && to === "dollar") {
        rate = 0.027;
    } else if (from === "hryvnia" && to === "euro") {
        rate = 0.025;
    } else if (from === "hryvnia" && to === "pound") {
        rate = 0.022;
    } else if (from === "dollar" && to === "hryvnia") {
        rate = 37;
    } else if (from === "dollar" && to === "euro") {
        rate = 0.92;
    } else if (from === "dollar" && to === "pound") {
        rate = 0.79;
    } else if (from === "euro" && to === "hryvnia") {
        rate = 40;
    } else if (from === "euro" && to === "dollar") {
        rate = 1.09;
    } else if (from === "euro" && to === "pound") {
        rate = 0.86;
    } else if (from === "pound" && to === "hryvnia") {
        rate = 47;
    } else if (from === "pound" && to === "dollar") {
        rate = 1.27;
    } else if (from === "pound" && to === "euro") {
        rate = 1.16;
    }
    //calculating and presenting the result 
    let convertedAmount = amount * rate;
    result01.textContent = ` ${amount} ${from.toUpperCase()} is equal to  ${to.toUpperCase()} ${convertedAmount.toFixed(2)}`;
});



//Speed section 
let button_speed_01 = document.getElementById("button_speed");

button_speed_01.addEventListener("click", function () {
    finalBorder_02.style.display = "block";
    let distanceInput = parseFloat(document.getElementById("speedInput_01").value);
    let timeInput = parseFloat(document.getElementById("speedInput_02").value);
    let getDistance = document.getElementById("distance").value;
    let getTime = document.getElementById("time").value;

    if (isNaN(distanceInput) || isNaN(timeInput) ||timeInput === 0) {
        document.getElementById("speedInput_01").style.border = "2px solid red";
        document.getElementById("speedInput_02").style.border = "2px solid red";
        return;
    }
    //by using a switch setting up the distance values
    let distanceM;
    switch (getDistance) {
        case "m":
            distanceM = distanceInput;
            break;
        case "k":
            distanceM = distanceInput * 1000;
            break;
        case "i":
            distanceM = distanceInput * 0.0254;
            break;
        case "mi":
            distanceM = distanceInput * 1609.34;
            break;
        default:
            distanceM = distanceInput;
    }
    //setting up the time 
    let timeS;
    switch (getTime) {
        case "s":
            timeS = timeInput;
            break;
        case "h":
            timeS = timeInput * 3600; 
            break;
        case "min":
            timeS = timeInput * 60; 
            break;
        default:
            timeS = timeInput;
    }
    //calculate it by using a formula
    let speed = distanceM / timeS;
    document.getElementById("result_02").textContent = `${speed.toFixed(2)} m/s`;

});







