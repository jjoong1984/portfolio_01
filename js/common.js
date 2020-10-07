(function($){ 

    $(window).load(function(){ 
        $('.introBox').delay(500).fadeOut(300)
    })

    // var colorCode = ['red', 'blue', 'green', 'yellow', 'lime']
    // var  minCnt = setInterval(minusCount,1000)
    // var k = 5;
    // function minusCount(){ 
    //     k--;
    //     if(k===0) { 
    //         clearInterval(minCnt)
    //         $('.introBox').fadeOut(500)
    //         return false
    //     }
    //     $('.introBox span').text(k+'초').css({
    //         color:colorCode[k]
    //     })
    // }

    $('#jjContainer_Box').load('main.html')

    $('.topmenu_box > .login > a').on('click',function(){ 
        var url = $(this).attr('href')
        $('#jjContainer').remove
        $('#jjContainer_Box').load(url)
        return false
    })

    $('.nav > .depth1 > li > a').on('click',function(){ 
        $(this).parent().addClass('on').siblings().removeClass('on')
        // var url = $(this).attr('href')
        // $('#jjContainer').remove
        // $('#jjContainer_Box').load(url)
        return false
    })
    $('.nav .depth2 > li > a').on('click',function(){ 
        var url = $(this).attr('href')
        $('#jjContainer').remove
        $('#jjContainer_Box').load(url)

        var ww = $(window).width()
        if ( ww <= 767) {
            $('.close_nav').stop().fadeOut(300)
            $('.open_nav').stop().fadeIn(300)
            $('.nav').stop().slideUp(300)
            $('.depth2').slideUp(300)
        }
        return false    
    })

    init();
    var flag = true
    function init(){ 
        var ww = $(window).width()
        if ( ww > 767 && flag ) { 
            $('.nav').show()
            $('.open_nav').hide()
            $('.close_nav').hide()
            $('.depth2').hide().css({ 
                height:'140px'
            })
            $('.nav > .depth1 > li').removeClass('on')
            flag = false

        } else if ( ww <= 767 && !flag ) { 
            $('.open_nav').show()
            $('.nav').hide()
            $('.deco_box').hide()
            $('.depth2').hide().css({ 
                height:'auto'
            })
            $('.nav > .depth1 > li').removeClass('on')
            flag = true
        }
    }
    
    init2();
    function init2(){ 
        var ww = $(window).width()
        if (ww>767) { 
            $('html').addClass('pc').removeClass('mobile')
        } else { 
            $('html').addClass('mobile').removeClass('pc')
        }
    }

    $(window).on('resize', function(){ 
        init()
        init2()
    })

    $('.h1Nav .open_nav').on('click', function(){ 
        $(this).stop().fadeOut(300)
        $(this).nextAll('.close_nav').stop().fadeIn(300)
        $(this).next().stop().slideDown(300)
    })
    $('.h1Nav .close_nav').on('click', function(){ 
        $(this).stop().fadeOut(300)
        $(this).prevAll('.open_nav').stop().fadeIn(300)
        $(this).prev().stop().slideUp(300)
        $('.depth2').slideUp(300)
    })

    $('.depth1 > li').hover(
        function(){ 
            if ( $('html').hasClass('pc') ) { 
               $('.depth2').stop().slideDown(300)
               $('.deco_box').stop().slideDown(300)
            }   
        },
        function(){ 
            if ( $('html').hasClass('pc') ) { 
                $('.depth2').stop().slideUp(300)
                $('.deco_box').stop().slideUp(300)
             }  
        } 
    ) 

    $('.depth1 > li > a').on('click', function(){ 
        if( $('html').hasClass('mobile') ) { 
            $(this).parent().find('.depth2').stop().slideToggle(300)
            $(this).parent().siblings().find('.depth2').stop().slideUp(300)
        }
    })

    // $('.depth1 > li').hover(
    //     function(){ 
    //         var ww = $(window).width()
    //         if ( ww > 767) { 
    //            $('.depth2').stop().slideDown(300)
    //            $('.deco_box').stop().slideDown(300)
    //         } else { 
    //             $(this).find('.depth2').stop().slideDown(300)
    //         }   
    //     },
    //     function(){ 
    //         var ww = $(window).width()
    //         if ( ww > 767) { 
    //            $('.depth2').stop().slideUp(200)
    //            $('.deco_box').stop().slideUp(200)
    //         } else { 
    //             $(this).find('.depth2').stop().slideUp(300)
    //         }   
    //     } 
    // )

    $('.goTop').on('click', function(){ 
        $('html, body').stop().animate({
            scrollTop:0
        }, 500, 'linear')
    })


    $(window).scroll(function(){ 
        var sct = $(this).scrollTop()
        if( sct >= 600) { 
            $('.goTop').stop().animate({
                opacity: 1
            },300).css({
                bottom: '3%'
            })
        } else { 
            $('.goTop').stop().animate({
                opacity: 0,
            },300).css({
                bottom: '-6%'
            })
        }
    })





    





})(jQuery)