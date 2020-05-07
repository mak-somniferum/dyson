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

//==================================== register

$(".regi_bg_img").first().fadeOut(2000)
$(".regi_bg_img").last().fadeIn(2000)

$(".regi_bg_m").animate({ height: "50%" }, 2000)

$(".regi_prod").animate({ opacity: "1", bottom: "14%" }, 2000)

$(".regi_txt").animate({ opacity: "1", top: "40%" }, 2000)
$(".regi_txt_m").animate({ opacity: "1", top: "63%" }, 2000)

$(".regi_sect2_bg .bg").first().fadeOut(2000)
$(".regi_sect2_bg .bg").last().fadeIn(2000)

$(".regi_go").click(function (e) {
  e.preventDefault()

  $(".regi_paper").fadeIn()
})

$(".fin button").click(function () {
  $(".regi_paper").fadeOut()
})

$(".form button").click(function () {
  $(".form").css({ opacity: "0" })
  $(".fin").css({ display: "block" })
})

//==================================== Customer

//customer
$(".cust_check_box li").mouseenter(function () {
  $(this).find("img").stop().animate({ width: "70%" })
})
$(".cust_check_box li").mouseleave(function () {
  $(".cust_check_box img").stop().animate({ width: "60%" })
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
  $(".cust_part_box").stop().animate({ height: 0 })
  $(url).parent().stop().animate({ height: h })
})
$(".cust_check_text a").click(function (e) {
  e.preventDefault()
  var url = $(this).attr("href")
  var h = $(url).height()
  $(".cust_check_text a").removeClass("on")
  $(this).addClass("on")
  $(".cust_part_box li").stop().fadeOut()
  $(url).stop().fadeIn()
  $(".cust_part_box").stop().animate({ height: 0 })
  $(url).parent().stop().animate({ height: h })
})

$(window).resize(function () {
  // if(w > 1200){
  //     $('.cust_part_box').stop().animate({height: h})
  // }else if(w > 960){
  //     $('.cust_part_box').stop().animate({height: h})
  // }else if(w > 720){
  //     $('.cust_part_box').stop().animate({height: h})
  // }else{
  //     $('.cust_part_box').stop().animate({height: h})
  // }

  $(".cust_part_box li").css({ height: "auto" })
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
  $(".s_boxson1").siblings().removeClass("on")
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
  $(".s_boxson1").siblings().removeClass("on")
  $(".s_boxson1").eq(activeidx).addClass("on")
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
  $(".s_boxson1").siblings().removeClass("on")
  $(".s_boxson1").eq(activeidx).addClass("on")
})

// $(".s_arti .swiper-slide").each(function(idx){
//     var idx = $(this).index()
//     $(".s_boxson1").fadeOut()
//     $(".s_boxson1").eq(idx).fadeIn()
// })

// responsible
