var bankAccount = /** @class */ (function () {
    function bankAccount() {
    }
    bankAccount.prototype.deposit = function (value) {
        this.money += value;
    };
    return bankAccount;
}());
;
var myself = /** @class */ (function () {
    function myself() {
        this.name = "Asaad";
        this.bankAccount = new bankAccount;
        this.hobbies = ["Violin", "Cooking"];
    }
    return myself;
}());
;
var mySelf = new myself();
mySelf.bankAccount.deposit(3000);
console.log(mySelf);
