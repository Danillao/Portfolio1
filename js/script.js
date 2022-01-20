$(document).ready(function(){
  $(window).scroll(function(){
    if(this.scrollY > 20){
      $('.navbar').addClass("sticky")
    } else {
      $('.navbar').removeClass("sticky")
    }
  });

//  if($('.menu-btn').click()){
//    $('.menu').addClass("active");
//  } else {
//    $('.menu').removeClass("active");
//  }
});