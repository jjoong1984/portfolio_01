(function($){ 

    $(window).load(function(){ 
        $('.introBox').delay(1200).fadeOut(500)
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


    





})(jQuery)