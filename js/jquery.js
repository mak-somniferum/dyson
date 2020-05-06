// header, footer LOAD
$('#header').load('header.html')
$('#footer').load('footer.html')

//==================================== main Products

$('.bg_video_wrap video').first().show()
$('.main_pro li').mouseenter(function(){
    var i = $(this).index()
    var mainVideo = $('.bg_video_wrap video')
    mainVideo.get(0).pause()
    mainVideo.get(0).currentTime = 0
    mainVideo.fadeOut()

    mainVideo.eq(i+1).fadeIn()
    mainVideo.eq(i+1).get(0).play()
    
})

//==================================== sub Products

$('.pro_conts .thum_wrap').find('a').click(function(e){
    e.preventDefault()
    var link = $(this).attr('href')
    
    if($(link).hasClass('on')){
        console.log('noway')
    }else{
        $('.pro_info').removeClass('on')
        $(link).addClass('on')
    }
})

$(window).scroll(function(){
    var scrlTop = $(this).scrollTop()

    $('.pro_conts').each(function(idx){
        var contTop = $(this).offset().top

        if(scrlTop>=contTop-200){
            $('.products_map ul li a').removeClass('on')
            $('.products_map ul li').eq(idx).find('a').addClass('on')
        }
    })
})



//==================================== register

$('.regi_bg_img').first().fadeOut(2000)
$('.regi_bg_img').last().fadeIn(2000)

$('.regi_bg_m').animate({'height':'50%'},2000)

$('.regi_prod').animate({'opacity':'1', bottom : '14%'},2000)

$('.regi_txt').animate({'opacity': '1', top : '40%'},2000)
$('.regi_txt_m').animate({'opacity':'1', top : '63%'},2000)

$('.regi_sect2_bg .bg').first().fadeOut(2000)
$('.regi_sect2_bg .bg').last().fadeIn(2000)


$('.regi_go').click(function(e){
    e.preventDefault()

    $('.regi_paper').fadeIn()
})

$('.fin button').click(function(){
    $('.regi_paper').fadeOut(function(){
     $('.fin').css({'display':'none'})
    $('.form').css({'display':'block'})   
    })
    
})

$('.form button').click(function(){
    $('.form').css({'display':'none'})
    $('.fin').css({'display':'block'})
})





//==================================== Customer


//customer
$('.cust_check_box li').mouseenter(function(){
    $(this).find('img').stop().animate({'width': '70%'})
})
$('.cust_check_box li').mouseleave(function(){
    $('.cust_check_box img').stop().animate({'width': '60%'})
})

$('.cust_check_box a').click(function(e){
    e.preventDefault()
    $('.cust_check_box').fadeOut()
    $('.customer_box').fadeIn()
    var idx = $(this).parent().index()
    var url = $(this).attr('href')
    var h = $(url).height()
    $('.cust_check_text a').removeClass('on')
    $('.cust_check_text a').eq(idx).addClass('on')
    $('.cust_part_box li').stop().fadeOut()
    $(url).stop().fadeIn()
})
$('.cust_check_text a').click(function(e){
    e.preventDefault()
    var url = $(this).attr('href')
    $('.cust_check_text a').removeClass('on')
    $(this).addClass('on')
    $('.cust_part_box li').stop().fadeOut()
    $(url).stop().fadeIn()
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

$(".s_arti1 > div > div").click(function(){
    $(".s_arti1 >div > div").removeClass("s_ll")
        $(this).addClass("s_ll")
})



// swiper

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

  
//   


// responsible

