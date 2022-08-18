         //js/mousewheel.js
     $(function(){
     var win_h = $(window).height();
     $('.page').each(function(index){
       $(this).attr("data-index",win_h * index);
     });


     $('.page').on("mousewheel",function(e){
       var pagePos = parseInt($(this).attr("data-index"));
       if(e.originalEvent.wheelDelta >=0 ){
         $("html,body").stop().animate({scrollTop:pagePos - win_h});
         return false;
       } else if (e.originalEvent.wheelDelta < 0) {
         $("html,body").stop().animate({scrollTop:pagePos + win_h});
         return false;
       }
     });
     });
