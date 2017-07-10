// var baseObject = {
//     width: 0,
//     length: 0
// };

// var rectangle = Object.create(baseObject);

// rectangle.width = 5;
// rectangle.length = 2;

// rectangle.calcSize = function(){
//     return this.width * this.length;
// };

// console.log(rectangle.calcSize());

class BaseObject{   
    constructor(public width: number = 0, public length: number = 0){}
}
class Rectangle extends BaseObject{    
    calcSize(){
        return this.width * this.length;
    }
}

console.log(new Rectangle(5,2).calcSize());
