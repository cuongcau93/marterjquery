$(document).ready(function(){
    $('h1').click(function(){
        alert(alice.getAge())
        //alert(alice.displayGreating())
    })
    $('.cach1').click(function(){
        alert('aaaaa')
    })
})

function Person(name, age){
    this.name = name;
    this.age = age;
}

//cach 1: 
//Person.prototype = {
//    getName : function(){
//        return this.name;
//    },
//    getAge : function(){
//        return this.age;
//    }
//}

//cach 2: dinh nghia lop ma tai day tạo ra các đối tượng
//Person.prototype.getName = function(){
//    return this.name;
//}
//Person.prototype.getAge = function(){
//    return this.age;
//}

//cach3: sử dụng

var alice = new Person('Alice', 93);

//modify class
Person.prototype.getGreeting = function(){
    return 'Hi ' + this.getName() + ' !';
}

alice.displayGreating = function(){
    alert (this.getGreeting());
}