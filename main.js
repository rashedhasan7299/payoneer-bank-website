// Display Transaction area when login button is clicked

document.getElementById("btn-login").addEventListener("click", function() {

    if(document.getElementById("email").value === '' || document.getElementById("password").value === '') {
        alert("Enter all fields");
    } else {
        document.getElementById("transaction").style.display = "block";
        document.getElementById("login").style.display = "none";
    }
});

// Deposit Amount

document.getElementById("btn-deposit").addEventListener("click", function() {

    var deposit = document.getElementById("deposit").value;
    var depositAmount = parseFloat(deposit);
    
    var balance = document.getElementById("currentBalance").innerText;
    var balanceAmount = parseFloat(balance);

    var totalBalance = balanceAmount + depositAmount;

    document.getElementById("currentDeposit").innerText = depositAmount;
    document.getElementById("currentBalance").innerText = totalBalance;
    document.getElementById("deposit").value = '';
});

//Withdraw Amount

document.getElementById("btn-withdraw").addEventListener("click", function() {

    var withdraw = document.getElementById("withdraw").value;
    var withdrawAmount = parseFloat(withdraw);
    
    var balance = document.getElementById("currentBalance").innerText;
    var balanceAmount = parseFloat(balance);

    var totalBalance = balanceAmount + -1 * withdrawAmount;

    document.getElementById("currentWithdraw").innerText = withdrawAmount;
    document.getElementById("currentBalance").innerText = totalBalance;
    document.getElementById("withdraw").value = '';
});