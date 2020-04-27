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