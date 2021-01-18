// // Chapter : 7 : Strings

//   // 7.1 : Basic info & String Concatenation
//   console.log(typeof String(true))
//   console.log(typeof (3).toString())
  
//   console.log(String.fromCharCode(104,101,108,108,111))

//   //String Concatenation

//   console.log(('Hello').concat(' ','World',' ','!'))

// //   String.raw - escape the escape sequence
// console.log(String.raw`a\\\\b`)
// console.log(`a\\\\b`)

// // 7.2 : Reverse String

// console.log('????. '.split('').reverse().join('') === ' .????')

// // Using Spread operator
 
// function reverseString(str){
//     return [...String(str)].reverse().join('')
// }

// console.log(reverseString('HEllo'))
// console.log(reverseString(2345))
// console.log(reverseString([1,2,3]))

// // Custom reverse FUnction

// function reverse(str) {
//     let strRev = '';
//     for(let i = str.length; i>= 0 ;i--){
//         strRev += str[i];
//     }
//     console.log(strRev);
// }

// reverse('reverse')

// 7.3 : Comparing Strings LExicographically

