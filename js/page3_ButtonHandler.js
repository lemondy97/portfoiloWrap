$(function(){

    let slideIndex = 1;
    let slides = $('.movingBox');
    let dots = $('.dot2');

    var n = 0;
    var i = 0;
    var t = 0;
    var d;


    $('.UpDownBox').click(function(){
      i++;
      t++;
      n++;
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
      
      if (n > slides.length) {slideIndex = 1}    
      if (n < 1) {slideIndex = slides.length}
      for (d = 0; d < dots.length; d++) {
        dots[d].className = dots[d].className.replace(" active2", "");
      } 
      dots[slideIndex-1].className += " active2";

      
    });
    
    
    

    
    
  });