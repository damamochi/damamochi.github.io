$(document).ready(function(){
  $("#top-btn").click(function(){
    $("html,body").animate({
      "scrollTop":0},
      "slow");
  });
  $(".login").click(function(){
    var id = $(this).attr("href");
    var position = $(id).offset().top;
    $("html,body").animate({
      "scrollTop":position},
      "slow");
  });
});
