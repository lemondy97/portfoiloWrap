$(function() {
              
    $('.doughnut2').hide();
    $('.doughnut3').hide();
    $('.doughnut4').hide();
    $('.doughnut5').hide();

    $('.showCss').hide();
    $('.showJquery').hide();
    $('.showJavascript').hide();
    $('.showSass').hide();

    $('.showTextCss').hide();
    $('.showTextJs').hide();
    $('.showTextJq').hide();
    $('.showTextSass').hide();
      

  $('.html').click(function(){
    $('.doughnut2').stop().fadeOut();
    $('.doughnut3').stop().fadeOut();
    $('.doughnut4').stop().fadeOut();
    $('.doughnut5').stop().fadeOut();
    $('.doughnut1').stop().fadeIn(replay);
    $('.showCss').stop().fadeOut();
    $('.showJquery').stop().fadeOut();
    $('.showJavascript').stop().fadeOut();
    $('.showSass').stop().fadeOut();
    $('.showHtml').stop().fadeIn();
    $('.showTextCss').stop().fadeOut();
    $('.showTextJs').stop().fadeOut();
    $('.showTextJq').stop().fadeOut();
    $('.showTextSass').stop().fadeOut();
    $('.showTextHtml').stop().fadeIn();


  });
  $('.css').click(function(){
    $('.doughnut1').stop().fadeOut();
    $('.doughnut3').stop().fadeOut();
    $('.doughnut4').stop().fadeOut();
    $('.doughnut5').stop().fadeOut();
    $('.doughnut2').stop().fadeIn(replay);
    $('.showHtml').stop().fadeOut();
    $('.showJquery').stop().fadeOut();
    $('.showJavascript').stop().fadeOut();
    $('.showSass').stop().fadeOut();
    $('.showCss').stop().fadeIn();
    $('.showTextHtml').stop().fadeOut();
    $('.showTextJs').stop().fadeOut();
    $('.showTextJq').stop().fadeOut();
    $('.showTextSass').stop().fadeOut();
    $('.showTextCss').stop().fadeIn();
    


  });
  $('.jquery').click(function(){
    $('.doughnut1').stop().fadeOut();
    $('.doughnut2').stop().fadeOut();
    $('.doughnut4').stop().fadeOut();
    $('.doughnut5').stop().fadeOut();
    $('.doughnut3').stop().fadeIn(replay);
    $('.showHtml').stop().fadeOut();
    $('.showCss').stop().fadeOut();
    $('.showJavascript').stop().fadeOut();
    $('.showSass').stop().fadeOut();
    $('.showJquery').stop().fadeIn();
    $('.showTextHtml').stop().fadeOut();
    $('.showTextCss').stop().fadeOut();
    $('.showTextJs').stop().fadeOut();
    $('.showTextSass').stop().fadeOut();
    $('.showTextJq').stop().fadeIn();


  });
  $('.javascript').click(function(){
    $('.doughnut1').stop().fadeOut();
    $('.doughnut2').stop().fadeOut();
    $('.doughnut3').stop().fadeOut();
    $('.doughnut5').stop().fadeOut();
    $('.doughnut4').stop().fadeIn(replay);
    $('.showHtml').stop().fadeOut();
    $('.showCss').stop().fadeOut();
    $('.showJquery').stop().fadeOut();
    $('.showSass').stop().fadeOut();
    $('.showJavascript').stop().fadeIn();
    $('.showTextHtml').stop().fadeOut();
    $('.showTextCss').stop().fadeOut();
    $('.showTextJq').stop().fadeOut();
    $('.showTextSass').stop().fadeOut();
    $('.showTextJs').stop().fadeIn();

  });

  $('.sass').click(function(){
    $('.doughnut1').stop().fadeOut();
    $('.doughnut2').stop().fadeOut();
    $('.doughnut3').stop().fadeOut();
    $('.doughnut4').stop().fadeOut();
    $('.doughnut5').stop().fadeIn(replay);
    $('.showHtml').stop().fadeOut();
    $('.showCss').stop().fadeOut();
    $('.showJquery').stop().fadeOut();
    $('.showJavascript').stop().fadeOut();
    $('.showSass').stop().fadeIn();
    $('.showTextHtml').stop().fadeOut();
    $('.showTextCss').stop().fadeOut();
    $('.showTextJq').stop().fadeOut();
    $('.showTextJs').stop().fadeOut();
    $('.showTextSass').stop().fadeIn();

  });
    });