// header, footer LOAD
$('#header').load('header.html')
$('#footer').load('footer.html')

//==================================== register

$('.regi_bg_img').first().fadeOut(2000)
$('.regi_bg_img').last().fadeIn(2000)

$('.regi_bg_m').animate({'height':'50%'},2000)


//==================================== register end


//customer
$('.cust_check_box li').click(function(){
    $('.cust_check_box').fadeOut()
    $('.customer_box').fadeIn()
    var idx = $(this).index()
    $('.cust_check_text li').removeClass('on')
    $('.cust_check_text li').eq(idx).addClass('on')
    $('.cust_part_box li').fadeOut()
    $('.cust_part_box li').eq(idx).fadeIn()
})
$('.cust_check_box li').mouseenter(function(){
    $(this).find('img').stop().animate({'width': '70%'})
})
$('.cust_check_box li').mouseleave(function(){
    $('.cust_check_box img').stop().animate({'width': '60%'})
})
$('.cust_check_text li').click(function(){
    var idx = $(this).index()
    $('.cust_check_text li').removeClass('on')
    $(this).addClass('on')
    $('.cust_part_box li').fadeOut()
    $('.cust_part_box li').eq(idx).fadeIn()
})

$(window).resize(function(){
    
    if($(window).width()>1200){
        $('.cust_part_box').height(2020)
    }else if($(window).width()>960){
        $('.cust_part_box').height(2580)
    }else if($(window).width()>720){
        $('.cust_part_box').height(3420)
    }else{
        $('.cust_part_box').height(4820)
    }
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
//===============================responseible

windowReposive()
$(window).resize(function(){
    windowReposive()
})
function windowReposive(){
    var windowWidth=$(window).width()

    if(windowWidth >= 1200){
        
        $('.regi_txt').animate({'opacity': '1', top : '40%'},2000)
        $('.regi_prod').animate({bottom : '5%'},2000)


    }else if(windowWidth <= 1200){
        
        $('.regi_txt').animate({'opacity': '1', top : '75%'},2000)
        $('.regi_prod').animate({bottom : '10%'},2000)


    }
    else if(windowWidth <= 768){
        
        $('.regi_txt').animate({'opacity': '1', top : '75%'},2000)
        $('.regi_prod').animate({bottom : '-10%'},2000)


    }
}
