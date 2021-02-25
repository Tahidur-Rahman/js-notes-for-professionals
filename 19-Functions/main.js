// Functions

// IIFE
// (function namedIIFE(){
//     throw error;
// })()

(()=>console.log('error'))()

// Binding this

let monitor = {
    threshold : 5,
    check : function(value){
        console.log(this);
        if(value>this.threshold){
            this.display('Value is too high !')
        }
    },
    display(message){
        console.log(message)
    }
}


monitor.check(44)
monitor.check.bind(monitor,44)()


// Short hand bind operator

// console.log(monitor::check(44))

// Variadic functions

function logSomething(){
    console.log(arguments)
}

logSomething('a','b')
console.clear()



