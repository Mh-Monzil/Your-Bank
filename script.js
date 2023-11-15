//login button event handler
const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", () => {
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";
})

//deposit button event handler
const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click", () => {
    const depositNumber = inputAmountNumber("depositAmount")

    spanUpdate("currentDeposit", depositNumber)
    spanUpdate("currentBalance", depositNumber)

    document.getElementById("depositAmount").value = "";
})

function spanUpdate(id,depositNumber){
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = currentNumber + depositNumber;
    document.getElementById(id).innerText = totalAmount;
}

function inputAmountNumber(id){
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}

const withdrawBtn = document.getElementById("withdraw");
withdrawBtn.addEventListener("click", () => {
    const withdrawNumber = inputAmountNumber("withdrawAmount");

    spanUpdate("currentWithdraw",withdrawNumber);
    spanUpdate("currentBalance", -1 * withdrawNumber);


    document.getElementById("withdrawAmount").value = "";
})
