         //js/side.js
     $(function(){

     $('.wrap_af').hide();
     $(".fa-bars").click(function(){
       $("#side").animate({left:'0'},500);
       $(this).fadeOut();
       $('.wrap_af').fadeIn();
     });


     $(".fa-chevron-left").click(function(){
       $("#side").animate({left:'-310'},500);
       $(".fa-bars").fadeIn();
       $('.wrap_af').fadeOut();
     });



     });
