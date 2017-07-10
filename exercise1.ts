// let bankAccount = {
//     money: 2000,
//     deposit(value){
//         this.money +=value;
//     }
// };

//transfer to typescript code

class bankAccount{ 
    money: number=2000;
    deposit(value:number){
        this.money +=value;
    }        
};


// let myself = {
//     name: "Asaad",
//     bankAccount: bankAccount,
//     hobbies: ["Violin", "Cooking"]
// }


//transfer to typescript code
let myself: {name: string, bankAccount: bankAccount, hobbies: [string,string]}={
    name: "Asaad",
    bankAccount: new bankAccount(),
    hobbies: ["Violin", "Cooking"]
};

myself.bankAccount.deposit(3000);
console.log(myself);