// header, footer LOAD
$('#header').load('header.html')
$('#footer').load('footer.html')

//==================================== register

$('.regi_bg_img').first().fadeOut(2000)
$('.regi_bg_img').last().fadeIn(2000)

$('.regi_bg_m').animate({'height':'50%'},2000)


//==================================== register end


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