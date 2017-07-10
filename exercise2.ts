// function Car(name){
//     this.name = name;
//     this.acceleration = 0;
//     this.honk = function(){
//         console.log(`${this.name} is saying: Toooooooooot!`);
//     };
//     this.accelerate = function(speed){
//         this.acceleration = this.acceleration + speed;
//     };
// }

// Transfer to typescript
class Car{       
    constructor(private name:string, public acceleration: number = 0){}
    honk() {
        console.log(`${this.name} is saying: Toooooooooot!`);
    };
    accelerate(speed : number) {
        this.acceleration = this.acceleration + speed;
    };
}


let car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(60);
console.log(car.acceleration);

