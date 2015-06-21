$(function() {
//            binding on and binding off 
//            takes event and function
        // MOUSE EVENT 

    $("#boxTarget").on("mouseover mouseleave", boxcolor);
    $("#boxTarget").on("click", function(evt) {
        $("#boxTarget").off("mouseover mouseleave", boxcolor);
        $("#boxTarget").html("<p>You shut off the hover effect!</p>");
        $("#boxTarget").removeClass("boxColor");
    });   
    
    // offset property of any DOM ELEMENT 
    $(document).on('click','.search', function(event) {
        event.preventDefault();
        var target = "#" + this.getAttribute('data-target');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 2000);
    });
    
    //HOVER 
    $("div.subContent").hover(highlight) ;  
    $("div.subContent").click(function(){
        $(this).css("border", "2px solid red");
    }); 
    
    // KEY PRESS EVENT 
    $("#textEntry").keypress(function(evt){
       $("#keyPress").text(String.fromCharCode(evt.charCode)); 
    });
    
    //SLIDE DOWN AND SLIDETOGGLE
    $("#slideDown").click(function(){
        if ($("#slider").is(":hidden")){
            $("#slider").slideDown('slow','swing');
        } else{
            $("#slider").slideToggle(); 
        }    
    });
    
    // FADE OUT 
    $("#effect").click(function(){
        $("#slider").fadeOut('slow') ; 
    });
    

    
    
    
   /* // key event
    $("#textEntry").on("keypress", function(evt) {
        $("#keyPress").text(String.fromCharCode(evt.charCode));
    });*/
});
//        function slider() { 
//            
//            }
//        }
function boxcolor(){
    $(this).toggleClass("boxColor");
}
function highlight(){
     $(this).toggleClass("highlighted");     
}