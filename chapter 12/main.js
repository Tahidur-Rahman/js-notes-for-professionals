// chapter 12

// 12.1 -- COnverty array like objects to array
let parent = document.querySelector('#parent');
let desiredOpt = document.querySelector('option[value="desired"]')
let domList = parent.children;
console.log(parent,desiredOpt,domList)
// domList.forEach(a=>console.log('d'))
// domList is array_like object not array

// make array from array-like object

// #1 --es6 convention
let array = Array.from(domList); // es6 convention
console.log(array)
array.forEach(a=>console.log(a))

// #2 -- for of
let arr = [];
for(let a of domList){
    arr.push(a)
}
console.log(arr)
// #3 spread syntax
console.log([...domList])+

// #4 - object.values
console.log(Object.values(domList))

// #5 - object.keys
console.log(Object.keys(domList).map(a=>domList[a]))

// #6 -- array.prototype.slice in <= es5

let arr1 = Array.prototype.slice.call(domList);
console.log(arr1)
console.log([].slice.call(domList)) //shorter -version

// 12.2 --reducing values

let arr2 = [1,2,3,4];
console.log(arr2.reduce((a,b)=>a+b))
console.log(arr2.reduce((a,b)=>a+b,100))//2nd parameter

// Flatten arrays
let arr3 = [
  { key: "one", value: 1 },
  { key: "two", value: 2 },
  { key: "three", value: 3 },
];

// <= es5
let obj =  arr3.reduce((obj, current) => {
    obj[current.key] = current.value;
    return obj;
  }, {})

// >= es6
let object = arr3.reduce((obj,current)=>
    Object.assign(obj,{
        [current.key]:current.value
    }),{})
  console.log(object)

// >=es7

console.log(arr3.reduce((a,b)=>({...a,[b.key]:b.value}))) //spread

// Map using reduce
console.log([2,0,-1,11,-11].reduce((a,b)=>a<b?a:b))


// 12.5 -- Sorting arrays 
let strArray = ["Banana", "Orange", "Apple", "Mango"],
    numArray = [11,2,-11,4,5,22,1,3,-22],
    dateArray = [new Date(200,1,3),new Date(1200,1,3),new Date(2200,1,3)]
console.log(numArray.sort());
console.log(strArray.sort()
)
console.log(strArray.sort((a,b)=>a.length-b.length))
console.log(strArray.sort((a,b)=>b.length-a.length))
console.log(numArray.sort((a,b)=>a-b))

// Sorting array by even and odd 
console.log(numArray.sort((a,b)=> (a&1) - (b&1)|| a-b))

console.log(dateArray.sort((a,b)=>b-a))



// Array methodes
console.log(numArray.keys())
console.log(numArray.some(a=>a==2))
console.log(numArray.some(a=>a==222))
console.log(numArray.every(a=>a==222))
console.log(numArray.every(a=>typeof a=='number'))

// 
//12.7 Destructuring an array

const [,second,...last] = numArray;

console.log(last);

// filter
// filter the same
let uniqueArray = ['a',1,'a',1].filter((val,index,array)=>array.indexOf(val) === index)

console.log(uniqueArray)
// ES6- easy set function for remove duplicating
console.log([...new Set(['a',1,'a',1,22,22,,22,,,undefined])])

const numArray2 = numArray.reverse();
console.log(numArray2.reverse())

// deepReverse
let deepArray = [[1,2,2],[12,2],[1,[2,[2,3,[4,6]]]]];
function deepReverse(arr){
  arr.reverse().forEach(a=>{
    if(Array.isArray(a)){
      deepReverse(a)
    }
  })
  return arr
}

console.table(deepReverse(deepArray))
// // how do we add all the numbers ?

// function deepAdder(arr){
//   arr.reduce((a,b)=>{
//     if(!Array.isArray(b)){
//       return b;
//     }else{
//     a + deepAdder(a)
//     }
//   })
// }
// console.log(deepAdder(deepArray))

 let arrr = [11,2,-11,4,5,22,1,3,-22];

//  Cloning of array
let arrr2 = Array.from(arrr),
    arrr3 = [...arrr],
    arrr4 =Array.of(arrr);

console.log(arrr2,arrr3,arrr4);
// 
let arrExt = ['added','new'];

arrr.push(arrExt)
console.table(arrr)

arrr.push(...arrExt)
console.table(arrr)

arrr.push.apply(arrr,arrExt)
console.table(arrr)

console.clear()