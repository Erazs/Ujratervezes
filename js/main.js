//console.log("Hello this is a console message!");

function calcAmount() {

    let price = 1200;
    let amountInput = document.querySelector("input[name='amount-input']");
    let amountNumber = parseInt(amountInput.value);
    amountNumber = isNaN(amountNumber) ? 0 : amountNumber;
    showSumPrice(price, amountNumber);

    // alert("Payable: £ " + amount);
}

function showSumPrice(price = 1000, amountNumber = 1) {
    let showAmount = document.querySelector("span.show-amount");
    if (amountNumber > 10) {
        alert("Max 10");
    } else if (amountNumber < 1) {
        alert("Min 1");
    } else {
        let amount = amountNumber * price;
        showAmount.innerHTML = amount;
    }
}

function checkPersonalOrderData() {
    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const phone = document.querySelector("#phone").value.trim();
    const address = document.querySelector("#address").value.trim();
    const comment = document.querySelector("#comment").value.trim();
    //   const extra = parseInt(document.querySelector('[name=extra] : checked').value, 10);
    //   const sauce = parseInt(document.querySelector('#sauce').value, 10);
    //   const quantity = parseInt(document.querySelector('#quantity').value, 10);
    if (!name) {
        alert("Please give a name!");
    }
    else if (!email || !(email.indexOf('@') > 0) || !(email.indexOf('.') > 0)) {
        alert("Invalid email address!");
    }
    else if (!phone) {
        alert("Don't forget your phone number");
    }
    else if (isNaN(phone)) {
        alert("phone NUMBER");
    }
    else if (address.length < 10) {
        alert("Check the address Pleas!");
    }
    else if (!comment.indexOf("<") > 0 || !comment.indexOf(">") > 0) {
        alert("Cann not use theses simboles here < >");
    }

    else {
        calcAmount();
    }

}

function setVisible(id, visible) {
    var o = document.getElementById(id);
    if (typeof (o) != 'undefined') o.style.visibility = visible ? 'visible' : 'hidden';
    if (typeof (o) == 'undefined') alert("Element with id '" + id + "' not found.");
}



var temperatures = [-11.2, 14.4, 13.0, 17.3, 16.9, 18.2, 16.5];
var temperaturesUpperLimits = [0, 15, 20, 25, 50];
var offers = [
    " Hot Chocolate",
    " Green Tea",
    " Carrot Cake",
    " Ice Cream",
    " Limonade"

];

let day = document.querySelector('#day-input').value;
let temperatureDiv = document.querySelector('#temperatureDisplay');
let offersDiv = document.querySelector('#offersDisplay');
let tempType = "&deg;C";

function displayOffer() {
    for (let i = 0; i < temperaturesUpperLimits.length; i++) {

        if (temperatures[day] <= temperaturesUpperLimits[i]) {
            //      temperatureDiv.innerHTML += '<br><div id="offersDisplay">' + ":  " + offers[i] + '</div>';
            offersDiv.innerHTML = "Todays : " + offers[i] + day;

            break;
        }
        //   temperatureDiv.innerHTML = temperatures[day] + "  " + tempType;
    }
}


function weatherWidget() {

    // temperatureDiv.innerHTML = temperatures[day] + "  " + tempType;
    /* 
    for (let i = 0; i < temperaturesUpperLimits.length; i++) {
        if (temperatures[day] <= temperaturesUpperLimits[i]) {
            temperatureDiv.innerHTML += '<br><div class="offer">' + ":  " + offers[i] + '</div>';
            break;
        }
    }
  */

    //displayOffer();

    if (document.querySelector('#degreaseC').checked == true) {
        displayOffer();
        displayMinMaxAvgInC();
        displayDegreesInC();
        /*   
           tempType = "&deg;C";
   
           minTemp.innerHTML = minTemperature() + " " + tempType;
           avgTemp.innerHTML = avgTemperature() + " " + tempType;
           maxTemp.innerHTML = maxTemperature() + " " + tempType;
         */
        // temperatureDiv.innerHTML = temperatures[day] + "  " + tempType;

    } else if (document.querySelector('#degreaseF').checked == true) {

        displayOffer();
        // tempType = "&deg;F";
        displayMinMaxAvgInF();
        displayDegreesInF();

        //   minTemp.innerHTML = (9* minTemperature()+ (32*5))/5 + " " + tempType;
        // avgTemp.innerHTML = (9* avgTemperature()+ (32*5))/5 + " " + tempType;
        // maxTemp.innerHTML = (9* maxTemperature()+ (32*5))/5 + " " + tempType;
        // temperatureDiv.innerHTML = (9* temperatures[day] +(32*5))/5 + "  " + tempType;
    }

    else {

        displayOffer();
        displayMinMaxAvgInC();
        displayDegreesInC();

        //    minTemp.innerHTML = minTemperature() + " " + tempType;
        //   avgTemp.innerHTML = avgTemperature() + " " + tempType;
        //    maxTemp.innerHTML = maxTemperature() + " " + tempType;

    }

    //  temperatureDiv.innerHTML = temperatures[day]+ '&deg;C ' + tempType;

    //   minTemp.innerHTML = minTemperature() + "" + tempType;
    // avgTemp.innerHTML = avgTemperature() + "" + tempType;
    //  maxTemp.innerHTML = maxTemperature() + "" + tempType;
}
function displayDegreesInC() {
    tempType = "&deg;C";
    temperatureDiv.innerHTML = temperatures[day] + " " + tempType;
}

function displayDegreesInF() {
    tempType = "&deg;F";
    temperatureDiv.innerHTML = (9 * temperatures[day] + (32 * 5)) / 5 + " " + tempType;
}
function displayMinMaxAvgInF() {
    tempType = "&deg;F";
    minTemp.innerHTML = (9 * minTemperature() + (32 * 5)) / 5 + " " + tempType;
    avgTemp.innerHTML = (9 * avgTemperature() + (32 * 5)) / 5 + " " + tempType;
    maxTemp.innerHTML = (9 * maxTemperature() + (32 * 5)) / 5 + " " + tempType;
}

function displayMinMaxAvgInC() {
    tempType = "&deg;C";
    minTemp.innerHTML = minTemperature() + "" + tempType;
    avgTemp.innerHTML = avgTemperature() + "" + tempType;
    maxTemp.innerHTML = maxTemperature() + "" + tempType;
}

function minTemperature() {
    let min = temperatures.length != 0 ? temperatures[0] : 0;
    for (let i = 0; i < temperatures.length; i++) {
        if (temperatures[i] < min) {
            min = temperatures[i];
        }
    }
    return min;
}

function maxTemperature() {
    let max = temperatures.length != 0 ? temperatures[0] : 0;
    for (let i = 0; i < temperatures.length; i++) {
        if (temperatures[i] > max) {
            max = temperatures[i];
        }
    }
    return max;
}

function avgTemperature() {
    let avg = 0;
    for (let i = 0; i < temperatures.length; i++) {
        avg += temperatures[i];
    }
    return temperatures.length != 0 ? avg / temperatures.length : 0;
}

