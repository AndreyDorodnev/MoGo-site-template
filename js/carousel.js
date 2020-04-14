$(document).ready(function(){
    $(".slider1").owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    dots:true,
    navText:[],
    responsive:{
        0:{
            items:1,
            loop:true,
            dots:false,
            nav:true
        },
        // 1024:{
        //     items:1,
        //     dots:true,
        //     nav:true
        // },
    }
});
});
