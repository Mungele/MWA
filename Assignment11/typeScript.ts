class bankAccount {
    money: number;

    deposit(value:number){
        this.money += value;
    }

};

class myself {
    name: string = "Asaad";
    bankAccount: bankAccount = new bankAccount;
    hobbies : string [] = ["Violin","Cooking"]
};

let mySelf = new myself();
mySelf.bankAccount.deposit(3000);
console.log(mySelf);