// header, footer LOAD
$('#header').load('header.html')
$('#footer').load('footer.html')

//customer
$('.check_box li').click(function(){
    $('.check_box').fadeOut()
    $('.customer_box').fadeIn()
    var idx = $(this).index()
    $('.check_text li').removeClass('on')
    $('.check_text li').eq(idx).addClass('on')
    $('.part_box li').fadeOut()
    $('.part_box li').eq(idx).fadeIn()
})
$('.check_text li').click(function(){
    var idx = $(this).index()
    $('.check_text li').removeClass('on')
    $(this).addClass('on')
    $('.part_box li').fadeOut()
    $('.part_box li').eq(idx).fadeIn()
})





// promotion      // promotion      // promotion
// promotion      // promotion      // promotion
// promotion      // promotion      // promotion


$(".s_arti1 > div").click(function(){
    $(".s_arti1 > div").removeClass("s_oo")
        $(this).addClass("s_oo")
})

$(".s_arti1 > div > div").click(function(){
    $(".s_arti1 > div > div").removeClass("s_pp")
        $(this).addClass("s_pp")
})


$(".s_arti1 > div > div").click(function(){
    $(".s_arti1 > div > div").removeClass("s_kk")
        $(this).addClass("s_kk")
})


var swiper = new Swiper('.s_arti .swiper-container', {
    effect: 'cube',
    grabCursor: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    pagination: {
      el: '.s_arti .swiper-pagination',
    },
  });