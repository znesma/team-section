/*global console ,$*/

$(function () {
    
    "use strict";
    
    $('.box').hover(function () {
   
        $(this).find('span').eq(0).animate({
       
            height: '100%'
            
        }, 1000);
        
    
    }, function () {
    
        $(this).find('span').eq(0).animate({
       
            height: '0'
        }, 1000);

    });
  
});