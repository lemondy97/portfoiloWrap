   //js/dot.js

   $(function(){

     var dot = $("#dot ul li");
     var contents = $("#page_wrap >.page");

     dot.click(function(e){
       e.preventDefault();
       var target = $(this);
       var index = target.index();
       var section = contents.eq(index);
       var offset = section.offset().top;

       console.log(index);

       $("html,body").animate({scrollTop:offset},600);
     });


     $(window).scroll(function(){

     var wScroll = $(this).scrollTop();

       if(wScroll >= contents.eq(0).offset().top){
         dot.css({"background":"rgba(255,255,255,0.1)"});
         dot.find("a").css({"background":"rgba(255,255,255,0.5)"});
         dot.removeClass("active");
         dot.eq(0).addClass("active");
         dot.eq(0).find("a").css({"background":"#0cdaff"});
       }
   
       if(wScroll >= contents.eq(1).offset().top){
         dot.css({"background":"rgba(255,255,255,0.75)"});
         dot.find("a").css({"background":"rgba(0,0,0,0.5)"});
         dot.removeClass("active");
         dot.eq(1).addClass("active");
         dot.eq(1).find("a").css({"background":"#0cdaff"});
       }

       if(wScroll >= contents.eq(2).offset().top){
         dot.removeClass("active");
         dot.find("a").css({"background":"rgba(0,0,0,0.5)"});
         dot.eq(2).addClass("active");
         dot.eq(2).find("a").css({"background":"#0cdaff"});
       }
   
       if(wScroll >= contents.eq(3).offset().top){
         dot.removeClass("active");
         dot.find("a").css({"background":"rgba(0,0,0,0.5)"});
         dot.eq(3).addClass("active");
         dot.eq(3).find("a").css({"background":"#0cdaff"});
       }
   
   
     });


     return false;

     });
