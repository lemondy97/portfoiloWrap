$(function(){


    var i = 0;
    var t = 0;
    $('.UpDownBox').click(function(){
      i++;
      t++;
      if(i > $('.movingBox').length-1){
        i = 0;
      }
      if(t > $('.hiddenText').length-1){
        t = 0;
      }
      $('.movingBox').eq(i).stop().fadeIn();
      $('.movingBox').eq(i-1).stop().fadeOut();

      $('.hiddenText').eq(t).stop().fadeIn(); 
      $('.hiddenText').eq(t-1).stop().fadeOut();        
    });
    
  });