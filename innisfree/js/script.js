$(function(){
  $(window).scroll(function(){
    var pos=$(document).scrollTop();
    if(pos>500){
      $(".top").fadeIn(200);
    }else{
      $(".top").fadeOut(200);
    }
  });
  $(".top").click(function(){
  $("html, body").animate({scrollTop:0},200);
  });
});
