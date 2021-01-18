
// Tabulating Values
  
console.table(["Hello",'World'])

console.table({Foo:'bar',bar:'baz'})

let personArr = [
    {"personId":123,
     "name"    : 'john',
     "city"   : "new york"},
     
    {"personId":223,
    "name"    : 'sohn',
    "city"   : "new york"},
    
    {"personId":323,
     "name"    : 'mohn',
     "city"   : "new york"},
]
// controlling the array info output
console.table(personArr)
console.table(personArr,['name','personId'])

// 5.6 - Counting
 console.count(1)
 console.count(2)
 console.count(1)
 console.count(1)
 console.count('1')
 //  label:string
 console.count(Date)
 console.count(console)
 console.count(console.__proto__)
 console.count(console.constructor.prototype)
 console.count()
 console.count('')
 console.count('')
 console.count(' ')
 console.count('')

// Clearing the console
console.clear()

// Display Objects and XML Interactively

let Obj = {
    name: 'tahid',
    age : 22
}
console.log(Obj)
console.dir(Obj)
console.dirxml(document)
console.dirxml(Obj)
console.log(document)

// Debugging with Assertion

console.assert('one' === 1)