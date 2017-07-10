// var person = {_firstname:""};

// Object.defineProperty(person, "firstname", {
//     get: function(){
//         return this._firstname;
//     },
//     set: function(value){
//         this._firstname = value.toUpperCase();
//     },
//     enumerable: true,
//     configurable: true
// })

// person._firstname = "Asaad";
// console.log(person._firstname);

//Transfer to typescript
class person{
    _firstname: string = "";
    enumerable: boolean = true;
    configurable: boolean = true;
    get firstname(){
        return this._firstname;
    }
    set firstname(value: string){
        this._firstname = value.toUpperCase();
    }    
}

let p = new person();
console.log(p.firstname);
p.firstname="Asaad";
console.log(p.firstname);