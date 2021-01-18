// // Datatypes in JS

// // Typeof
// console.log(typeof {})
// console.log(typeof [])
// console.log(typeof null)
// console.log(typeof /aa/gi)
// console.log(typeof Error())

console.log([] instanceof Object)
console.log([] instanceof Array)

// Getting Object type by Constructor name
console.log(Object.prototype.toString.call("string"))
console.log(Object.prototype.toString.call(3))
console.log(Object.prototype.toString.call(true))
console.log(Object.prototype.toString.call({}))
console.log(Object.prototype.toString.call(()=>{}))
console.log(Object.prototype.toString.call(new Date(2021,10,22)))
console.log(Object.prototype.toString.call(/aa/gi))
console.log(Object.prototype.toString.call([]))
console.log(Object.prototype.toString.call(null))
console.log(Object.prototype.toString.call(undefined))
console.log(Object.prototype.toString.call(Error()))