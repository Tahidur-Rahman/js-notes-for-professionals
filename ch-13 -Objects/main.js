let obj = { name: "Tahid", age: 22, profession: "Front-end-developer" ,social:['facebook','linkedin','github']};

// SHallow clonning

// 1. Object.Assign

console.log(Object.assign({},obj))

// Object rest
let {...clone} = obj;
console.log(clone)

Object.freeze(obj)

obj.age = 23;
obj.home = 'kolagoan'
obj.newProperty = true;
// obj.home = 'kola';
// Object.defineProperty(obj,'age',{
//     writable:true,
// })
// Cannot be redifined
delete obj.profession;
console.log(obj)
obj.social.push('gmail')
console.log(obj)


let cloneObj = JSON.parse(JSON.stringify(obj))

console.log(cloneObj)
console.log(Object.assign(cloneObj))


let obj1 = {a:1},
    obj2 = {b:2},
    obj3 = {c:3};

let totalObj = Object.assign(obj1,obj2,obj3);

console.log(totalObj)
console.log(obj1)

console.clear()




// Section 13:14 == Read-Only-Property

 
let person = {name : 'john',surName : "doe"}

Object.defineProperty(person,'fullName',{
    get:function(){
        return this.name + ' ' + this.surName
    },
    set:function(){
        [this.name,this.surName] = value.split(' ')
    }
})
console.log(person.fullName)
person.surName = 'Hill'
console.log(person.fullName)

  console.log(obj1)

//   Methods of retriving data from object

// for in loop

for (let key in obj1){
    console.log(key)
}
for (let key in obj1){
    console.log(obj1[key])
}

// Object.keys()

console.log(Object.keys(obj1))

// GetOwnPropertyNames()

console.log(Object.getOwnPropertyNames(obj1))


console.clear()



// Section 13:14 == Read-Only-Property

let obj11 = {}

Object.defineProperty(obj11,'foo',{value:'original',writable:false})

console.log(obj11)

obj11.foo = 'changed'

console.log(obj11)

// Section 13:14 == Non-Enumerable-Property

// It prevents property from looping

Object.defineProperty(obj11,'foo',{value:'original',enumerable:false})

// description of  a property
console.log(Object.getOwnPropertyDescriptor(obj11,'foo'))

// getter  and setter
 
let obj12 = {}
Object.defineProperty(obj12,'prop',{
    get :function(){
        console.log('get done !')
    },
    set: function(){
        console.log('set done !')
    }
})

console.log(obj12.prop)

obj12.prop = 'haha '

console.log(Object.entries(obj1))
console.log(Object.values(obj1))