$(document).ready(function(){

    /* перевод картинки svg в код */
    $('.icon img, img.icon').each(function(){
        var $img = $(this);
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');
        $.get(imgURL, function(data) {
            var $svg = $(data).find('svg');
            if(typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass+' replaced-svg');
            }
            $svg = $svg.removeAttr('xmlns:a');
            if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
            }
            $img.replaceWith($svg);
        }, 'xml');
    });
    /* end перевод картинки svg в код */


    $('.h_search_toggler').click(function () {
        $(this).toggleClass('open');
        return false;
    });

    $('.h_menu_toggler').click(function () {
        $(this).toggleClass('act');
        $(this).next().toggleClass('open');
        return false;
    });


    $('.dropdown_toggler').click(function () {
        $(this).toggleClass('act');
        $(this).next().toggleClass('open');
        return false;
    });

    $(document).on('click', function(e) {
        if (!$(e.target).closest(".h_menu_nav.open").length) {
            $(".h_menu_nav.open").removeClass('open');
            $('.h_menu_toggler').removeClass('act');
        }else if (!$(e.target).closest(".dropdown_menu.open").length) {
            $(".dropdown_menu.open").removeClass('open');
            $('.dropdown_toggler').removeClass('act');
        }
        e.stopPropagation();
    });



    if($('.cards_slider > div').length > 3){
        $('.cards_slider').slick({
            slidesToShow:3,
            slidesToScroll: 1,
            dots: true,
            arrows: true,
            infinite: false,
            responsive: [

                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    }else if($(window).innerWidth() < 767 && $('.cards_slider > div').length > 1){
        $('.cards_slider').slick({
            autoplay: false,
            dots: true,
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false
        });
    }else if($(window).innerWidth() < 991 && $('.cards_slider > div').length > 2){
        $('.cards_slider').slick({
            autoplay: false,
            dots: true,
            arrows: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: false
        });
    }



    /*

        $('.main_menu .arrow').click(function(){
            $(this).next().slideToggle();
            $(this).toggleClass('act');
        });

        $(".main_slider").slick({
            infinite: true,
            arrows: false,
            dots: true,
            fade: true,
            //autoplay: true,
            //speed: 3000,
            //autoplaySpeed: 3000,
            slidesToShow: 1,
            slidesToScroll: 1
        });

        $('.ms_prev').click(function(){
            $('.main_slider').slick('slickPrev');
        })

        $('.ms_next').click(function(){
            $('.main_slider').slick('slickNext');
        })


        $(function () {
            $('input, textarea').each(function () {
                $(this).blur(function(){
                    if(!this.value){
                        $(this).removeClass('hide_label');
                    }
                    else{
                        $(this).addClass('hide_label');
                    }
                });
                if ( !this.value ) {
                    $(this).removeClass('hide_label');
                }
                else{
                    $(this).addClass('hide_label');
                }
            });
        });


        $('.product_slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            fade: true,
            asNavFor: '.product_slider_nav'
        });
        $('.product_slider_nav').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            asNavFor: '.product_slider',
            dots: false,
            focusOnSelect: true,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 2
                    }
                }
            ]
        });


        $(window).resize(function(){
            var header_height = $('header').outerHeight();
            $('header').next().css({'margin-top': header_height+'px'});
        });
        $(window).resize();

        */


});





