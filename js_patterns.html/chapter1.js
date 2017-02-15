$(document).ready(function(){
//    setInterval(updateClock,1000)
//    updateClock();
    var clock = new Clock('#clock',-0, 'UTC');
    //var clock2 = new creatClock('#clock2',+300,' UTCC');
    
//    var d = new Date();
//    //console.log(d.getTimezoneOffset()*60*1000);
//    d = new Date((d.getTimezoneOffset() + 420)*60*1000 + d.getTime());
//    console.log(d);
})

//tying Up Loose Ends
//update lock
//function updateClock(){
//    var clock = $('#clock');
//    //clock.text('what ever')
//    var date = new Date();
//    clock.text(formatDigits(date.getHours()) +":"+ formatDigits(date.getMinutes()) +":"+ formatDigits(date.getSeconds()));
//}
//fomat date
//function formatDigits(val){
//    if(val > 10){
//        val = "0" + val;
//    }
//    return val;
//}

//buiding with Objects
//function creatClock(id){
//    var c = new Object(); 
//    c.updateClock = function(){
//        var clock = $(id);
//        var date = new Date();
//        //console.log(this);
//        clock.text(this.formatDigits(date.getHours()) +":"+ this.formatDigits(date.getMinutes()) +":"+ this.formatDigits(date.getSeconds()));
//    }
//    
//    c.formatDigits = function(val){
//          if(val < 10){
//               val = "0" + val;
//           }
//          //console.log(this);
//          return val;  
//    }
//    //console.log(this);
//    setInterval(function(){c.updateClock();}, 1000);
//    c.updateClock();
//    return c;
//}

//constructing a constructor



//3. Scoping for Your Scope: 'this' not 'that'

//4 Reusing Objects
//function Clock(id, offset, label){
//    offset = offset || 0;
//    label = label || '';
//    var d = new Date();
//    this.offset = (offset + d.getTimezoneOffset() + 420)*60*1000;
//    console.log(this.offset);
//    
//    this.updateClock = function(){
//        var date = new Date();
//        date = new Date(this.offset + date.getTime());
//        
//        var clock = $(id);
//        clock.text(this.formatDigits(date.getHours()) +":"+ this.formatDigits(date.getMinutes()) +":"+ this.formatDigits(date.getSeconds()) +" "+ label);
//    }
//    this.formatDigits = function(val){
//          if(val < 10){
//               val = "0" + val;
//           }
//           return val;  
//    }
//    console.log(this);
//    var $that = this
//    setInterval(function(){
//        $that.updateClock();
//    },1000);
//    setInterval(this.updateClock(),1000)
//    this.updateClock();
//}

//5 CREAT Method with the prototype

function Clock(id, offset, label){
    offset = offset || 0;
    label = label || '';
    var a = 10;
    this.a = a;
    var d = new Date();
    var offset = (offset + d.getTimezoneOffset() + 420)*60*1000;
    this.d = new Date(offset + d.getTime());
    this.d.autoClock();
    this.id = id;
    this.label = label;
    var $that = this
    setInterval(function(){
        $that.updateClock();
    },1000);    
//    setInterval(this.updateClock(),1000)
    this.updateClock();
}

Date.prototype.updateSeconds = function(){
    this.setSeconds(this.getSeconds() + 1);
}

Date.prototype.autoClock(isAuto){
    clearInterval();
    if(isAuto){
        var that = this;
        this.clockInterval = setInterval(function(){that.updateSeconds()},1000)
    }
}

Clock.prototype.updateClock = function(){
    var date = this.d;
    date.updateSeconds();
    //date = new Date(this.offset + date.getTime());
    
    var clock = $(this.id);
    clock.text(this.formatDigits(date.getHours()) +":"+ this.formatDigits(date.getMinutes()) +":"+ this.formatDigits(date.getSeconds()) + " " + this.label +" "+ this.a);
}
Clock.prototype.formatDigits = function(val){
      if(val < 10){
           val = "0" + val;
       }
       return val;  
}












