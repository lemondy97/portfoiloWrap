$(function(){

    var i = 0;



    $('.UpDownBox').click(function(){
      i++;

      if(i > $('.movingBox').length-1){
        i = 0;
      }

      $('.movingBox').eq(i).stop().fadeIn();
      $('.movingBox').eq(i-1).stop().fadeOut();

      $('.hiddenText').eq(i).stop().fadeIn(); 
      $('.hiddenText').eq(i-1).stop().fadeOut();

      $('.dot2').eq(i).addClass('active2');
      $('.dot2').eq(i-1).removeClass('active2');

      
    });
        
  });