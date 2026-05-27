// ATM Withdrawal balance

let user = {
    balance: 10000,
    pin: "Kunal.1234",
}

let deposit = (amount) => {
    user.balance += amount;
}

let withdraw = (amount) => {
    if(user.balance < amount) alert("Insufficient Balance. Transaction failed!");
    user.balance -= amount;
}

let checkBalance = () => {
    let pin = prompt("Enter pin.");
    if(pin == user.pin) {
        console.log(user.balance);
    } else {
        alert("Wrong pin. Unauthorized access denied!");
    }
}

