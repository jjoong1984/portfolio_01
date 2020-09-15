(function($){ 

    $(window).load(function(){ 
        $('.introBox').delay(800).fadeOut(300)
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

    $('.depth1 > li').hover(
        function(){ 
            $('.depth2').stop().slideDown(500)
            $('.deco_box').stop().slideDown(500)
        },
        function(){ 
            $('.depth2').stop().slideUp(300)
            $('.deco_box').stop().slideUp(300)
        }
    )

    $('.goTop').on('click', function(){ 
        $('html, body').stop().animate({
            scrollTop:0
        }, 500, 'linear')
    })


    //sct >= 100 goTop에 on이 붙는다
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