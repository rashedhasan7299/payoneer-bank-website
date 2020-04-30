// Display Transaction area when login button is clicked

document.getElementById("btn-login").addEventListener("click", function() {

    if(document.getElementById("email").value === '' || document.getElementById("password").value === '') {
        showAlert(".login-alert");

    } else {
        document.getElementById("transaction").style.display = "block";
        document.getElementById("login").style.display = "none";
    }
});

// Deposit Amount

document.getElementById("btn-deposit").addEventListener("click", function() {

    var deposit = document.getElementById("deposit").value;
    var depositAmount = parseFloat(deposit);
    
    var balanceAmount = GetCurrentBalance();

    var totalBalance = balanceAmount + depositAmount;

    document.getElementById("currentDeposit").innerText = depositAmount;
    document.getElementById("currentBalance").innerText = totalBalance;
    clearFields("deposit");
});

//Withdraw Amount

document.getElementById("btn-withdraw").addEventListener("click", function() {

    var withdraw = document.getElementById("withdraw").value;
    var withdrawAmount = parseFloat(withdraw);
    
    var balanceAmount = GetCurrentBalance();

    if(withdrawAmount>balanceAmount) {
        showAlert(".insufficient-alert");
        clearFields("withdraw");
    } else {
        var totalBalance = balanceAmount + -1 * withdrawAmount;

        document.getElementById("currentWithdraw").innerText = withdrawAmount;
        document.getElementById("currentBalance").innerText = totalBalance;
        clearFields("withdraw");
    }
});
//Get CurrentBalance
function GetCurrentBalance() {
    var balance = document.getElementById("currentBalance").innerText;
    var balanceAmount = parseFloat(balance);
    return balanceAmount;
}

//Clear Input Fields
function clearFields(id) {
    document.getElementById(id).value = '';
}

//Show ALert

function showAlert (id) {
    setTimeout(function()
        { 
            document.querySelector(id).style.display = "none"; 
        }, 2000);
        document.querySelector(id).style.display = "block";
}