// header, footer LOAD
$("#header").load("header.html")
$("#footer").load("footer.html")

//==================================== main Products

$(".bg_video_wrap video").first().show()
$(".main_pro li").mouseenter(function () {
  var i = $(this).index()
  var mainVideo = $(".bg_video_wrap video")
  mainVideo.get(0).pause()
  mainVideo.get(0).currentTime = 0
  mainVideo.fadeOut()

  mainVideo.eq(i + 1).fadeIn()
  mainVideo
    .eq(i + 1)
    .get(0)
    .play()
})

//==================================== sub Products

$(".pro_conts .thum_wrap").find("a").click(function (e) {
    e.preventDefault()
    var link = $(this).attr("href")

    if ($(link).hasClass("on")) {
      console.log("noway")
    } else {
      $(link).parents('.pro_conts').find(".pro_info").removeClass("on")
      $(link).addClass("on")
    }
})

$('.products_map ul li a').click(function(e){
  e.preventDefault()
  var link = $(this).attr('href')
  var linkTop = $(link).offset().top
  $('body,html').animate({'scrollTop':linkTop-110})
})

$(window).scroll(function () {
  var scrlTop = $(this).scrollTop()

  $(".pro_conts").each(function (idx) {
    var contTop = $(this).offset().top

    if (scrlTop >= contTop - 200) {
      $(".products_map ul li a").removeClass("on")
      $(".products_map ul li").eq(idx).find("a").addClass("on")
    }
  })
})

//==================================== register

$(window).scroll(function(){

  var scrl=$('.register').offset().top
  // console.log(scrl)
  var secT=$(window).scrollTop()
  // console.log(secT)
  if( secT <= scrl ){
    
$(".regi_bg_img").first().fadeOut(2000)
$(".regi_bg_img").last().fadeIn(2000)

$(".regi_bg_m").animate({ height: "50%" }, 2000)

$(".regi_prod").animate({ opacity: "1", bottom: "23%" }, 2000)

$(".regi_txt").animate({ opacity: "1", top: "40%" }, 2000)
$(".regi_txt_m").animate({ opacity: "1", top: "63%" }, 2000)

$(".regi_sect2_bg .bg").first().fadeOut(2000)
$(".regi_sect2_bg .bg").last().fadeIn(2000)


  }
})




$(".regi_go").click(function (e) {
  e.preventDefault()
  $(".regi_paper").fadeIn()

  $('.regi_paper .close').click(function(e){
    e.preventDefault()
    $('.regi_paper').fadeOut()
  })
})

$(".fin button").click(function () {
  $(".regi_paper").fadeOut(function () {
    $(".fin").css({ display: "none" })
    $(".form").css({ display: "block" })
  })
})

$(".form button").click(function () {
  $(".form").css({ display: "none" })
  $(".fin").css({ display: "block" })
})

//==================================== Customer

//customer
$(".cust_check_box li a").mouseenter(function () {
  $(this).find("img").stop().animate({ width: "65%", height: "85%" })
})
$(".cust_check_box li a").mouseleave(function () {
  $(".cust_check_box img").stop().animate({ width: "60%", height: "80%" })
})

$(".cust_check_box a").click(function (e) {
  e.preventDefault()
  $(".cust_check_box").fadeOut()
  $(".customer_box").fadeIn()
  var idx = $(this).parent().index()
  var url = $(this).attr("href")
  var h = $(url).height()
  $(".cust_check_text a").removeClass("on")
  $(".cust_check_text a").eq(idx).addClass("on")
  $(".cust_part_box li").stop().fadeOut()
  $(url).stop().fadeIn()
})
$(".cust_check_text a").click(function (e) {
  e.preventDefault()
  var url = $(this).attr("href")
  $(".cust_check_text a").removeClass("on")
  $(this).addClass("on")
  $(".cust_part_box li").stop().fadeOut()
  $(url).stop().fadeIn()
})

// promotion      // promotion      // promotion
// promotion      // promotion      // promotion
// promotion      // promotion      // promotion
// promotion      // promotion      // promotion
// promotion      // promotion      // promotion

$(".s_arti1 > div").click(function () {
  $(".s_arti1 > div").removeClass("s_oo")
  $(this).addClass("s_oo")
})

$(".s_arti1 > div > div").click(function () {
  $(".s_arti1 > div > div").removeClass("s_pp")
  $(this).addClass("s_pp")
})

$(".s_arti1 > div > div").click(function () {
  $(".s_arti1 > div > div").removeClass("s_kk")
  $(this).addClass("s_kk")
})

$(".s_arti1 > div > div").click(function () {
  $(".s_arti1 >div > div").removeClass("s_ll")
  $(this).addClass("s_ll")
})

// swiper

var mySwiper1 = new Swiper(".swiper-container-1", {
  effect: "cube",
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  pagination: {
    el: ".swiper-container-1 .swiper-pagination",
  },
})

mySwiper1.on("slideChange", function () {
  var activeidx = mySwiper1.activeIndex
  $(".s_boxson1").removeClass("on")
  $(".s_boxson1").eq(activeidx).addClass("on")
})

var mySwiper2 = new Swiper(".swiper-container-2", {
  effect: "cube",
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  pagination: {
    el: ".swiper-container-2 .swiper-pagination",
  },
})

mySwiper2.on("slideChange", function () {
  var activeidx = mySwiper2.activeIndex
  $(".s_boxson2").removeClass("on")
  $(".s_boxson2").eq(activeidx).addClass("on")
})

var mySwiper3 = new Swiper(".swiper-container-3", {
  effect: "cube",
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  pagination: {
    el: ".swiper-container-3 .swiper-pagination",
  },
})

mySwiper3.on("slideChange", function () {
  var activeidx = mySwiper3.activeIndex
  $(".s_boxson3").siblings().removeClass("on")
  $(".s_boxson3").eq(activeidx).addClass("on")
})

// $(".s_arti .swiper-slide").each(function(idx){
//     var idx = $(this).index()
//     $(".s_boxson1").fadeOut()
//     $(".s_boxson1").eq(idx).fadeIn()
// })

// responsible
