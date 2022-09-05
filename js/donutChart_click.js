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
    $('.doughnut2').stop().hide();
    $('.doughnut3').stop().hide();
    $('.doughnut4').stop().hide();
    $('.doughnut5').stop().hide();
    $('.doughnut1').stop().show(replay);
    $('.showCss').stop().hide();
    $('.showJquery').stop().hide();
    $('.showJavascript').stop().hide();
    $('.showSass').stop().hide();
    $('.showHtml').stop().show();
    $('.showTextCss').stop().hide();
    $('.showTextJs').stop().hide();
    $('.showTextJq').stop().hide();
    $('.showTextSass').stop().hide();
    $('.showTextHtml').stop().show();


  });
  $('.css').click(function(){
    $('.doughnut1').stop().hide();
    $('.doughnut3').stop().hide();
    $('.doughnut4').stop().hide();
    $('.doughnut5').stop().hide();
    $('.doughnut2').stop().show(replay);
    $('.showHtml').stop().hide();
    $('.showJquery').stop().hide();
    $('.showJavascript').stop().hide();
    $('.showSass').stop().hide();
    $('.showCss').stop().show();
    $('.showTextHtml').stop().hide();
    $('.showTextJs').stop().hide();
    $('.showTextJq').stop().hide();
    $('.showTextSass').stop().hide();
    $('.showTextCss').stop().show();
    


  });
  $('.jquery').click(function(){
    $('.doughnut1').stop().hide();
    $('.doughnut2').stop().hide();
    $('.doughnut4').stop().hide();
    $('.doughnut5').stop().hide();
    $('.doughnut3').stop().show(replay);
    $('.showHtml').stop().hide();
    $('.showCss').stop().hide();
    $('.showJavascript').stop().hide();
    $('.showSass').stop().hide();
    $('.showJquery').stop().show();
    $('.showTextHtml').stop().hide();
    $('.showTextCss').stop().hide();
    $('.showTextJs').stop().hide();
    $('.showTextSass').stop().hide();
    $('.showTextJq').stop().show();


  });
  $('.javascript').click(function(){
    $('.doughnut1').stop().hide();
    $('.doughnut2').stop().hide();
    $('.doughnut3').stop().hide();
    $('.doughnut5').stop().hide();
    $('.doughnut4').stop().show(replay);
    $('.showHtml').stop().hide();
    $('.showCss').stop().hide();
    $('.showJquery').stop().hide();
    $('.showSass').stop().hide();
    $('.showJavascript').stop().show();
    $('.showTextHtml').stop().hide();
    $('.showTextCss').stop().hide();
    $('.showTextJq').stop().hide();
    $('.showTextSass').stop().hide();
    $('.showTextJs').stop().show();

  });

  $('.sass').click(function(){
    $('.doughnut1').stop().hide();
    $('.doughnut2').stop().hide();
    $('.doughnut3').stop().hide();
    $('.doughnut4').stop().hide();
    $('.doughnut5').stop().show(replay);
    $('.showHtml').stop().hide();
    $('.showCss').stop().hide();
    $('.showJquery').stop().hide();
    $('.showJavascript').stop().hide();
    $('.showSass').stop().show();
    $('.showTextHtml').stop().hide();
    $('.showTextCss').stop().hide();
    $('.showTextJq').stop().hide();
    $('.showTextJs').stop().hide();
    $('.showTextSass').stop().show();

  });
    });