
//$("#drop-btn").click(function(){
//  $("#cate-menu").toggle();
//});

$(document).ready(function(){
  $("#drop-btn").click(function(){
    $("#cate-menu").slideToggle("fast");
  });
});

var swiper = new Swiper('.swiper-container', {
              direction: 'vertical',
              pagination: {
                  el: '.swiper-pagination',
                  clickable: true,
              },
          });
