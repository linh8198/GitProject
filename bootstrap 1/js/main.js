$(window).scrool(function(){
    var oTop= $('.section-2').offset().top-window.innerHeight;
    if($(window).scroolTop()>oTop){
        $('.navbar').addClass('stiky')
    } else{
        $('.navbar').removeClass('stiky')

    }
})