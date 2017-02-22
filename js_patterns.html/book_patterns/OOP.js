$(document).ready(function(){
    //PRIVATE variable
    var a = new Restaurant();
    a.use_restroom();
    
    
})

//PRIVATE variable
function Restaurant(){
    // Bien private variable no chi dung duoc object nay
    var myPrivateVar;
    var private_stuff = function(){
        myPrivateVar = 'I can set this here'
        console.log(myPrivateVar);
    } 
    
    this.use_restroom = function(){ // use_restroom is visible to all
        private_stuff();
    }
    
    this.buy_food = function(){ // buy_food is visible to all
        private_stuff();
    }
}