// FUnctional JS

// 20.1 -- Higher Order Function

function iAmCallback(){
    console.log('I am called as a callback !')
}

// HOC 1- it takes a callback function as an argument
function iAmJustFunction(callback){
    callback()
}

// Calling 
iAmJustFunction(iAmCallback)

// HOC 2- it return another function
function iAmJustAnotherFunction(){
    return function iAmReturnedFunction(){
        console.log("I am returned on this HOC !")
    }
}

// Calling
iAmJustAnotherFunction()()

// Identity Monad

function identityMonad(value){
    var monad = Object.create(null);

    // function should return a monad
    monad.bind = function (func,...args){
        return func(value,...args);
    }

    // Whatever func does, we get our monad back
    monad.call = function (func, ...args){
        func(value,...args);
        return identityMonad(value);
    }
    // func doesn't have to know anything about monads
    monad.apply = function (func,...args){
        return identityMonad(func(value,...args))
    }

    // Get the value wrapped in this monad
    monad.value = function(){
        return value;
    }
    return monad
}

var value = 'foo',
    f =  x=> x + ' changed ',
    g =  x=> x + 'again';

identityMonad(value)
        .apply(f)
        .apply(g)
        .bind(alert);

// chapter 21 - Prototypes, Objects

var Human = function(){
    this.canWalk = true;
    this.canSpeak = true;
}

Human.prototype.greet = function(){
    if(this.canSpeak){
        console.log('Hi ! edddd')
    }
}

var Student = function(name,title){
    Human.call(this);
    this.name = name;
    this.title = title;

}

Student.prototype = Object.create(Human.prototype);
Student.prototype.constructor = Student;

Student.prototype.greet = function(){
    if(this.canSpeak){
        console.log('Hi, I am '+ this.name + ', the '+this.title)
    }
}

var Customer = function(name){
    Human.call(this);
    this.name = name;
}

Customer.prototype = Object.create(Human.prototype);
Customer.prototype.constructor = Customer;

var bill = new Student('Billy','Teacher');
var carter = new Customer('carter');
var andy = new Student('Andy','Bill');
var virat = new Customer('Virat');

bill.greet();
carter.greet()
andy.greet()
virat.greet()
