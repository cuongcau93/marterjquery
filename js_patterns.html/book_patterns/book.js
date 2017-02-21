$(document).ready(function(){
    var theHobbit = new Book('978-0261103283', 'The Hobbit', 'J. R. R.Tolkien');
    if(theHobbit.checkIsbn() == true){
        theHobbit.display();
    }
})

var Book = function(isbn, title, author){
    if(!this.checkIsbn(isbn))
        try{
            throw new Error('Book: invalid ISBN.');
        }catch(err)
            {
                alert(err);
            }
    this.isbn = isbn;
    this.title = title || 'No title specified';
    this.author = author || 'No author specified';
}

Book.prototype = {
    checkIsbn: function(isbn){
        if(isbn == undefined || typeof isbn != 'string'){
            return false;
        }
        
        isbn = isbn.replace(/-/gim,""); //remove dashes.
        
        if(isbn.length != 10 && isbn.length != 13){
            return false;
        }
        
        var sum = 0;
        
        if(isbn.length === 10){ // 10 digit ISBN (chu so)
            if(!isbn.match("\\d{10}")) 
            { // Ensure characters 1-9 are digits. 
                return false;
            }
            for(var i = 0; i<9; i++){
                sum += isbn.charAt(i) * (10 - i);
            }
            var checksum;
            checksum = sum % 11;
            if(checksum === 10)
                checksum = 'X';
            if(isbn.charAt(9) != checksum){
                return false;
            }
        }
        else{ // 13 digit ISBN
//            if(!isbn.match(\^\d{12}\)){ //Ensure characters 1->12 are digits
//                return false;   
//            }
            
            for(var i = 0; i < 12; i++){
                sum += isbn.charAt(i) * ((i % 2 === 0) ? 1 : 3);
            }
            
            var checksum
            checksum = sum % 10;
            if (isbn.charAt(12) != checksum){
                return false;
            }    
        }
        
        return true; // All test passed;
    },
    
    display: function(){
        console.log(Error);
        alert('aaa');
    }
}