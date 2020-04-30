// Display Trasaction area when login button is clicked

document.getElementById("btn-login").addEventListener("click", function() {
    document.getElementById("transaction").style.display = "block";
    document.getElementById("login").style.display = "none";
});

// Deposit Amount

document.getElementById("btn-deposit").addEventListener("click", function() {
    var deposit = parseFloat(document.getElementById("deposit").value);
    var balance = parseFloat(document.getElementById("currentBalance").value);
    console.log(balance);
    document.getElementById("currentDeposit").innerText = deposit;
    var totalBalance = balance + deposit;
    document.getElementById("currentBalance").innerText = totalBalance;
});