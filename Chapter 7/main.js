// 7.3 : Comparing Strings LExicographically

// LocaleCompare
console.log('a'.localeCompare('b'))
console.log('b'.localeCompare('a'))
console.log('b'.localeCompare('b'))

console.log('a'>'b')
console.log('b'>'a')
console.log('b'>'b')

// useCase - sorting something alphabetically

let arr = ['banana','mango','apple'];
arr.sort((a,b)=>a.localeCompare(b));
console.table(arr)

// Accessing character in string
console.log("string".charAt(1))
console.log("string"[1])
console.log("string".charCodeAt(1))

// Escaping QUoates
console.log("fdsdf'")
console.log("fdsdf\'") //not escaped
console.log("fdsdf\"") //not escaped
console.log('fdsdf\"') //not escaped
console.log('fdsdf\"') //not escaped
console.log('<h1 class="heading">heading</h1>')
console.log("<h1 class=\"heading\">heading</h1>") //escaped ""
console.log("<h1 class=\"heading\">heading &#34;</h1>") //escaped ""
console.log(`<h1 class=\"heading\">heading</h1>`) //escaped ""

// 7.6 -- word counter

function wordCount(val) {
  let wom = val.match(/\S+/g);
  return {
    charactersNoSpaces: val.replace(/\s+/g, "").length,
    characters: val.length,
    words: wom ? wom.length : 0,
    lines: val.split(/\r*\n/).length,
  };
}


console.table(
  wordCount(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati harum eligendi,\n nam nobis optio deleniti illum ullam recusandae adipisci provident voluptate est eum quos beatae minima consequuntur nesciunt reprehenderit pariatur?"
  )
);

// Trim Whitespace

console.log('->'+'    fsdf dsf sdf   '.trim()+'<-') //full trim
console.log('->'+'    fsdf dsf sdf   '.trimStart()+'<-') //Start trim
console.log('->'+'    fsdf dsf sdf   '.trimEnd()+'<-') //End trim
console.log('->'+'    fsdf dsf sdf   '.trim()+'<-') //full trim
console.log('->'+'    fsdf dsf sdf   '.trimLeft()+'<-') //Start trim
console.log('->'+'    fsdf dsf sdf   '.trimRight()+'<-') //End trim

// 7.8 -- splitting array

console.log('1 2 3 4 5 6 '.split(' '))
console.log('1 2 3 4 5 6 '.split(' ').join('--'))

// 7.9 -- string are unicode
 console.table('some 😎 ✖✖'.split('').map(a=>a.charCodeAt()))

//  Detetcting a string 

console.log(typeof 'sdfs')

let str = new String('sdf');
console.log(typeof str) //object
console.log(str instanceof String) //true
console.log(str.substring(0,2))

// SLice 
console.log('dfsdf'.slice(0,3))
console.log('😥'.charCodeAt(0))
console.log('😥'.codePointAt())

// String to number
console.log((12).toString(16)) //c
console.log(parseInt((12).toString(16),16)) //12
  
// String find and replace function
console.log('sdfsd'.indexOf('f'))
console.log('sdfsdff'.indexOf('f',6))
console.log('sdfsdf'.lastIndexOf('f'))
console.log('sdfsdf'.includes('f'))
console.log('sdfsdf'.includes('0'))
console.log('sdfsdf'.replace('d','ddd'))
console.log('sdfsdf'.replaceAll('d','ddd')) 
console.log('sdfsdf'.toUpperCase()) 
console.log('SSfsdf'.toLowerCase()) 


// repeating 
console.log('dar'.repeat(3))
console.log('dar'.repeat(0))
console.log('dar'.repeat(1))
console.log('dar'.repeat(-1))
