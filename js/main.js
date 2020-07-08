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
    if (typeof(o) != 'undefined') o.style.visibility = visible ? 'visible' : 'hidden';
    if (typeof(o) == 'undefined') alert("Element with id '" + id + "' not found.");
}



var temperatures = [11.2, 14.4, 13.0, 17.3, 16.9, 18.2, 16.5];
function weatherWidget(){
    const day = document.querySelector('#day').value;
    const temperatureDiv = document.querySelector('#temperature').value;
    temperatureDiv.innerHTML = temperatures[day]+ '&deg;C';
}
