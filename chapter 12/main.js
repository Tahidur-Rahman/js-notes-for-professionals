// // chapter 12

// // 12.1 -- COnverty array like objects to array
// let parent = document.querySelector('#parent');
// let desiredOpt = document.querySelector('option[value="desired"]')
// let domList = parent.children;
// console.log(parent,desiredOpt,domList)
// // domList.forEach(a=>console.log('d'))
// // domList is array_like object not array

// // make array from array-like object

// // #1 --es6 convention
// let array = Array.from(domList); // es6 convention
// console.log(array)
// array.forEach(a=>console.log(a))

// // #2 -- for of
// let array = [];
// for(let a of domList){
//     array.push(a)
// }
// console.log(array)

// // #3 spread syntax
// console.log([...domList])

// // #4 - object.values
// console.log(Object.values(domList))

// // #5 - object.keys
// console.log(Object.keys(domList).map(a=>domList[a]))

// // #6 -- array.prototype.slice in <= es5

// let array = Array.prototype.slice.call(domList);
// console.log(array)
// console.log([].slice.call(domList)) //shorter -version

// // 12.2 --reducing values

// let array = [1,2,3,4];
// console.log(array.reduce((a,b)=>a+b))
// console.log(array.reduce((a,b)=>a+b,100))//2nd parameter

// // Flatten arrays
// let array = [
//   { key: "one", value: 1 },
//   { key: "two", value: 2 },
//   { key: "three", value: 3 },
// ];

// // <= es5
// let obj =  array.reduce((obj, current) => {
//     obj[current.key] = current.value;
//     return obj;
//   }, {})

// // >= es6
// let object = array.reduce((obj,current)=>
//     Object.assign(obj,{
//         [current.key]:current.value
//     }),{})
//   console.log(object)

// // >=es7

// console.log(array.reduce((a,b)=>({...a,[b.key]:b.value}))) //spread

// // Map using reduce
// console.log([2,0,-1,11,-11].reduce((a,b)=>a<b?a:b))


// 12.5 -- Sorting arrays 
