// header, footer LOAD
$('#header').load('header.html')
$('#footer').load('footer.html')

//===============================================================================
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
    $(this).find('img').animate({'width': '70%'})
})
$('.cust_check_box li').mouseleave(function(){
    $('.cust_check_box img').animate({'width': '60%'})
})
$('.cust_check_text li').click(function(){
    var idx = $(this).index()
    $('.cust_check_text li').removeClass('on')
    $(this).addClass('on')
    $('.cust_part_box li').fadeOut()
    $('.cust_part_box li').eq(idx).fadeIn()
})