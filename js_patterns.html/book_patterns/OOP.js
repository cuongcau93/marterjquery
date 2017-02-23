$(document).ready(function(){
    //PRIVATE variable
    // var a = new Restaurant();
    // a.use_restroom();  
    // a.name;
    // a.age();
    // var b = new myMain();
    // a.age = function(){
    //     this.bb = 'cuong';
    //     console.log(this.bb);
    // }
    // a.age();
    
    var call = new Food('Na', -2);
    // var emp = [], i;
    // for (i = 0; i < 3; i++) {
    //     emp[i] = new Employee();
    //     console.log("employee count is "+ emp[i].getCount());
    // }
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

//Dung ham call để gán giá trị cho hàm khởi tạo

function Product(name, price) {
  this.name = name;
  this.price = price;
  console.log(name + ' ' + price)
}
function Food(name, price) {
  Product.apply(this,[name, price]);
  this.category = 'food';
}
function Toy(name, price) {
  Product.call(this, name, price);
  this.category = 'toy';
}

//dùng hàm call để gọi hàm vô danh
(function(name){
    console.log(name)
}).apply(this, ['Nguyen Manh Cường']);
//Call là hàm đơn giản, dễ hiểu nhất trong bộ 3 khó nhằn này. Mục tiêu của nó chỉ là mình thực hiện lời gọi hàm như thông thường, nhưng 
//điều khác biệt ở đây so với những lời gọi hàm thông thường là 
//mình có thể xác định ngữ cảnh bên trong hàm được gọi (thay vì mặc định là caller hiện hành).
//Dùng để thay đổi biến this