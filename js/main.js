setInterval(() => {
    setTimeout(() => {
        
        $('.main-slider').addClass('trans')
    }, 2000)
    setTimeout(() => {
        $('.main-slider').addClass('trans2')
    }, 5000)
    setTimeout(() => {
        $('.main-slider').addClass('trans3')
    }, 8000)
    setTimeout(() => {
        $('.main-slider').addClass('trans4')
    }, 12000)
    setTimeout(() => {
        $('.main-slider').addClass('trans5')
    }, 15000)
    $('.main-slider').removeClass('trans')
    $('.main-slider').removeClass('trans2')
    $('.main-slider').removeClass('trans3')
    $('.main-slider').removeClass('trans4')
    $('.main-slider').removeClass('trans5')
}, 17000)

$('.circle1').click(() => {
    $('.main-slider').addClass('trans5')
    $('.main-slider').removeClass('trans')
    $('.main-slider').removeClass('trans2')
    $('.main-slider').removeClass('trans3')
    $('.main-slider').removeClass('trans4')
})


$('.circle2').click(() => {
    $('.main-slider').addClass('trans')
    $('.main-slider').removeClass('trans5')
    $('.main-slider').removeClass('trans2')
    $('.main-slider').removeClass('trans3')
    $('.main-slider').removeClass('trans4')
})
$('.circle3').click(() => {
    $('.main-slider').addClass('trans2')
    $('.main-slider').removeClass('trans5')
    $('.main-slider').removeClass('trans')
    $('.main-slider').removeClass('trans3')
    $('.main-slider').removeClass('trans4')
})
$('.circle4').click(() => {
    $('.main-slider').addClass('trans3')
    $('.main-slider').removeClass('trans5')
    $('.main-slider').removeClass('trans')
    $('.main-slider').removeClass('trans2')
    $('.main-slider').removeClass('trans4')
})
$('.circle5').click(() => {
    $('.main-slider').addClass('trans4')
    $('.main-slider').removeClass('trans5')
    $('.main-slider').removeClass('trans')
    $('.main-slider').removeClass('trans3')
    $('.main-slider').removeClass('trans2')
})


//$(window).scroll(function(){
//    var 높이 = $(window).scrollTop();
//    console.log(높이);
//     if(높이 < 100){
//         $('.main-container').addClass('trans6')
//        $('.main-container').removeClass('trans7')
//        $('.main-container').removeClass('trans8')
//        $('.main-container').removeClass('trans9')
//        $('.main-container').removeClass('trans10')
//        $('.main-container').removeClass('trans11')
//        $('.main-container').removeClass('trans12')
//        
//        
//    }
//    if(높이 >=100 && 높이 <200){
//        $('.main-container').addClass('trans7')
//        $('.main-container').removeClass('trans6')
//        $('.main-container').removeClass('trans8')
//        $('.main-container').removeClass('trans9')
//        $('.main-container').removeClass('trans10')
//        $('.main-container').removeClass('trans11')
//        $('.main-container').removeClass('trans12')
//    }
//   
//    if(높이 >= 200 && 높이 <300){
//        $('.main-container').addClass('trans8')
//        $('.main-container').removeClass('trans6')
//        $('.main-container').removeClass('trans7')
//        $('.main-container').removeClass('trans9')
//        $('.main-container').removeClass('trans10')
//        $('.main-container').removeClass('trans11')
//        $('.main-container').removeClass('trans12')
//        
//    }
//    if(높이 >= 300 && 높이 < 400){
//        $('.main-container').addClass('trans9')        
//        $('.main-container').removeClass('trans6')
//        $('.main-container').removeClass('trans7')
//        $('.main-container').removeClass('trans8')
//        $('.main-container').removeClass('trans10')
//        $('.main-container').removeClass('trans11')
//        $('.main-container').removeClass('trans12')
//        
//    }
//      if(높이 >= 400 && 높이 < 500){
//        $('.main-container').addClass('trans10')        
//        $('.main-container').removeClass('trans6')
//        $('.main-container').removeClass('trans7')
//        $('.main-container').removeClass('trans8')
//        $('.main-container').removeClass('trans9')
//        $('.main-container').removeClass('trans11')
//        $('.main-container').removeClass('trans12')
//        
//    }
//      if(높이 >= 500 && 높이 <600){
//        $('.main-container').addClass('trans11')        
//        $('.main-container').removeClass('trans6')
//        $('.main-container').removeClass('trans7')
//        $('.main-container').removeClass('trans8')
//        $('.main-container').removeClass('trans9')
//        $('.main-container').removeClass('trans10')
//        $('.main-container').removeClass('trans12')
//        
//    }
//    
//    if(높이 >= 600 && 높이 <700){
//        $('.main-container').addClass('trans12')        
//        $('.main-container').removeClass('trans6')
//        $('.main-container').removeClass('trans7')
//        $('.main-container').removeClass('trans8')
//        $('.main-container').removeClass('trans9')
//        $('.main-container').removeClass('trans10')
//        $('.main-container').removeClass('trans11')
//        
//    }
//});



//$(window).scroll(function(){
//    var 높이 = $(window).scrollTop();
//    console.log(높이);
//     if(높이 < 100){
//        $('.main-slider1').addClass('trans6')
//        $('.main-slider1').removeClass('trans7')
//        $('.main-slider1').removeClass('trans8')
//        $('.main-slider1').removeClass('trans9')
//        $('.main-slider1').removeClass('trans10')
//        $('.main-slider1').removeClass('trans11')
//        $('.main-slider1').removeClass('trans12')
//        $('.main-slider1').removeClass('trans13')
//        $('.main-slider1').removeClass('trans14')
//        
//        
//    }
//    if(높이 >=100 && 높이 <200){
//        $('.main-slider1').addClass('trans7')
//        $('.main-slider1').removeClass('trans6')
//        $('.main-slider1').removeClass('trans8')
//        $('.main-slider1').removeClass('trans9')
//        $('.main-slider1').removeClass('trans10')
//        $('.main-slider1').removeClass('trans11')
//        $('.main-slider1').removeClass('trans12')
//        $('.main-slider1').removeClass('trans13')
//        $('.main-slider1').removeClass('trans14')
//    }
//   
//    if(높이 >= 200 && 높이 <300){
//        $('.main-slider1').addClass('trans8')
//        $('.main-slider1').removeClass('trans6')
//        $('.main-slider1').removeClass('trans7')
//        $('.main-slider1').removeClass('trans9')
//        $('.main-slider1').removeClass('trans10')
//        $('.main-slider1').removeClass('trans11')
//        $('.main-slider1').removeClass('trans12')
//        $('.main-slider1').removeClass('trans13')
//        $('.main-slider1').removeClass('trans14')
//        
//    }
//    if(높이 >= 300 && 높이 <400){
//        $('.main-slider1').addClass('trans9')        
//        $('.main-slider1').removeClass('trans6')
//        $('.main-slider1').removeClass('trans7')
//        $('.main-slider1').removeClass('trans8')
//        $('.main-slider1').removeClass('trans10')
//        $('.main-slider1').removeClass('trans11')
//        $('.main-slider1').removeClass('trans12')
//        $('.main-slider1').removeClass('trans13')
//        $('.main-slider1').removeClass('trans14')
//        
//    }
//      if(높이 >= 400 && 높이 <500){
//        $('.main-slider1').addClass('trans10')        
//        $('.main-slider1').removeClass('trans6')
//        $('.main-slider1').removeClass('trans7')
//        $('.main-slider1').removeClass('trans8')
//        $('.main-slider1').removeClass('trans9')
//        $('.main-slider1').removeClass('trans11')
//        $('.main-slider1').removeClass('trans12')
//        $('.main-slider1').removeClass('trans13')
//        $('.main-slider1').removeClass('trans14')
//        
//    }
//      if(높이 >= 500 && 높이 <600){
//        $('.main-slider1').addClass('trans11')        
//        $('.main-slider1').removeClass('trans6')
//        $('.main-slider1').removeClass('trans7')
//        $('.main-slider1').removeClass('trans8')
//        $('.main-slider1').removeClass('trans9')
//        $('.main-slider1').removeClass('trans10')
//        $('.main-slider1').removeClass('trans12')
//        $('.main-slider1').removeClass('trans13')
//        $('.main-slider1').removeClass('trans14')
//        
//    }
//    
//    if(높이 >= 600 && 높이 <700){
//        $('.main-slider1').addClass('trans12')        
//        $('.main-slider1').removeClass('trans6')
//        $('.main-slider1').removeClass('trans7')
//        $('.main-slider1').removeClass('trans8')
//        $('.main-slider1').removeClass('trans9')
//        $('.main-slider1').removeClass('trans10')
//        $('.main-slider1').removeClass('trans11')
//        $('.main-slider1').removeClass('trans13')
//        $('.main-slider1').removeClass('trans14')
//        
//    }
//    if(높이 >= 700 && 높이 <800){
//        $('.main-slider1').addClass('trans13')        
//        $('.main-slider1').removeClass('trans6')
//        $('.main-slider1').removeClass('trans7')
//        $('.main-slider1').removeClass('trans8')
//        $('.main-slider1').removeClass('trans9')
//        $('.main-slider1').removeClass('trans10')
//        $('.main-slider1').removeClass('trans11')
//        $('.main-slider1').removeClass('trans12')
//        $('.main-slider1').removeClass('trans14')
//        
//    }
//    if(높이 >= 800 && 높이 <900){
//        $('.main-slider1').addClass('trans14')        
//        $('.main-slider1').removeClass('trans6')
//        $('.main-slider1').removeClass('trans7')
//        $('.main-slider1').removeClass('trans8')
//        $('.main-slider1').removeClass('trans9')
//        $('.main-slider1').removeClass('trans10')
//        $('.main-slider1').removeClass('trans11')
//        $('.main-slider1').removeClass('trans12')
//        $('.main-slider1').removeClass('trans13')
//        
//        
//    }
//});



//$(window).scroll(function(){
//    var 높이 = $(window).scrollTop();
//    console.log(높이);
//    
//})