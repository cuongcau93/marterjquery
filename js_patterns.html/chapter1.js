$(document).ready(function(){
//    setInterval(updateClock,1000)
//    updateClock();
    var clock = new com.o2GEEK.Clock('#clock',-0, 'UTC');
    var clock2 = new com.o2GEEK.TextClock('#clock2',-0, 'UTC');

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
//Namespaces
var com = com || {};
    com.o2GEEK = com.o2GEEK || {};
com.o2GEEK.Clock = function(id, offset, label){
    offset = offset || 0;
    label = label || '';
    var a = 10;
    this.a = a;
    var d = new Date();
    var offset = (offset + d.getTimezoneOffset() + 420)*60*1000;
    this.d = new Date(offset + d.getTime());
    this.id = id;
    this.label = label;
    var $that = this;
    this.d.autoClock(true);
    //console.log(Date);
    setInterval(function(){
        $that.updateClock();
    },1000);    
    this.updateClock();
    LiveDate.call(clock,1,2,3);
    //LiveDate.apply(clock,clock, [1,2,3]);
}

function LiveDate(a,b,c){
    //console.log(this,this,a,b,c);
}

Date.__interval = 0;
Date.__aDates = [];

Date.addToInterval = function(date){
    this.__aDates.push(date);
    if(!Date.__interval){
        Date.__interval = setInterval(function(){Date.updateDates()}, 1000)
    }
}
Date.updateDates = function(){
    for(var i=0; i < this.__aDates.length; i++){
        this.__aDates[i].updateSeconds();
    }
}
Date.prototype.updateSeconds = function(){
    this.setSeconds(this.getSeconds() + 1);
}
Date.prototype.autoClock = function(isAuto){
    if(isAuto){
        Date.addToInterval(this)
    }
}

com.o2GEEK.Clock.prototype.Version = '1';

com.o2GEEK.Clock.prototype.updateClock = function(){
    var date = this.d;
    var clock = $(this.id);
    clock.text(this.formatDigits(date.getHours()) +":"+ this.formatDigits(date.getMinutes()) +":"+ this.formatDigits(date.getSeconds()) + " " + this.label +" "+ this.a);
}

com.o2GEEK.Clock.prototype.formatDigits = function(val){
      if(val < 10){
           val = "0" + val;
       }
       return val;  
}

com.o2GEEK.TextClock = function(id, offset, label){
    com.o2GEEK.Clock.apply(this, arguments);
}

com.o2GEEK.TextClock.prototype = createObject(com.o2GEEK.Clock.prototype, com.o2GEEK.TextClock);
//com.o2GEEK.TextClock.prototype.constructor = com.o2GEEK.TextClock;

//create function by polyfill
function createObject(proto, cons){
    function c(){};
    console.log(cons);
    console.log(cons);
    c.prototype = proto;
    c.prototype.constructor = cons;
    console.log(new c());
    return new c();
}











