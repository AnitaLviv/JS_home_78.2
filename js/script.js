function createPerson (name,age,job ) {
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function(){
        alert ( this.name );
    };
    return o;
}


var person1 = createPerson( "Nicholas" , 29 , "Software Eпgiпeer" );
var person2 = createPerson( "Greg" , 27, "Doctor" );

console.log(person1);
console.log(person2);

