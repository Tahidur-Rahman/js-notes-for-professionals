// chapter 10 : Comparison Operators

// 0,'' - is false '0'-is true 
console.log('' == 0)
console.log('0' == 0)
console.log('' == '0')
console.log('' != '0')
console.log(!!'')
console.log(!!0)
console.log(!!'0')
console.log(+'0')

// there is a mess because of implicit type conversion
// to avoid this, follow 2 way :
  // 1/ compare same types 
    console.log('0' == '')
    console.log(!!'0' == !!'')
  // 2/ use Strict equality/unequility
  console.log('0' === '')

// 10.2 - NaN - global Object
console.log(typeof undefined)
console.log(Object.is(NaN,NaN))

console.log(Object.is(NaN,true))
console.log(Object.is(+0, 0))
console.log(typeof NaN)

// 10.3 -- short-circuiting

// to provide a default value
// to prevent fallbacks

let obj1 = null;
let obj2 = {name:'tahid'};

console.log(obj1 || {})
console.log(obj2 || {})

// 10.4 : NULL and Undefined

console.log('hello' && 1)
console.log(0 && 1)
console.log(+'' && 1)