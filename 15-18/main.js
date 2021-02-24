  
// Bitwise Operator

//Bitwise & operator

// easily find the odd
  if(1 & 1){console.log('odd')}
  if(3 & 1){console.log('odd')}else{console.log('even')}
  if(2 & 1){console.log('odd')}else{console.log('even')}

// Bitwise not 

// it flips the number
console.log(~11) // 
console.log((2))
console.clear()

// Chapter 17 : Constructors

function Cat(name){
    this.name = name;
    this.sound = 'Meow'
}

let cat = new Cat('Tom');

console.log(cat)
console.log(cat.sound,cat.name)
console.log(cat.__proto__)
Cat.prototype.speak = function(){ console.log(this.sound)}

console.log(cat)
console.log(cat.speak())

console.log(cat.constructor)

