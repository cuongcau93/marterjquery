$(document).ready(function(){
    //PRIVATE variable
    var a = new Restaurant();
    a.use_restroom();  
    a.name;
    a.age();
    var b = new myMain();
    a.age = function(){
        this.bb = 'cuong';
        console.log(this.bb);
    }
    a.age();
    
    var emp = [], i;
    for (i = 0; i < 3; i++) {
        emp[i] = new Employee();
        console.log("employee count is "+ emp[i].getCount());
    }
})
function Employee() {
    this.getCount = function(){
        return this.count; 
    };      
    this.count += 1;
}
Employee.count = 3;




Restaurant.count = 1;

//PRIVATE variable
function Restaurant(){
    // Bien private variable no chi dung duoc object nay
    var myPrivateVar;
    
    //public properties
    this.name = 'cuong';
    var private_stuff = function(){
        myPrivateVar = 'I can set this here'
        console.log(myPrivateVar);
    } 
    
    //function privileged 
    //Nó được  hiện thị tất cả
    // Được gọi từ function cha
    this.use_restroom = function(){ // use_restroom is visible to all
        private_stuff();
    }
    
    this.buy_food = function(){ // buy_food is visible to all
        private_stuff();
    }
    
    
    
    return private_stuff();
}

Restaurant.prototype.age = function(){
    this.ag = 18;
    console.log(this.ag);
}

function myMain(){
    console.log("main");
    myHelper();
    // myHelper is function private
    function myHelper(){
        console.log("Utility");
    }
}

