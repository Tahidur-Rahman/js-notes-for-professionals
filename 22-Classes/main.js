// Classes

// class constructor
class MyClass{
    constructor(option){
        console.log(`Creatiing instance using ${option} option`);
        this.option = option;
    }
}

const foo  = new MyClass('speedy')

console.log(foo.option)

// 22.1 -- class inheritance
class SuperClass{
    constructor(){
        this.logger = console.log;
    }
    log(){
        this.logger(`Hello ${this.name}`);
    }
}

class SubClass extends SuperClass {
    constructor(){
        super();
        this.name = 'subclass';
    }
}

const subClass = new SubClass();

subClass.log( )