var audio = new Audio('./assets/audio/trash-sound.mp3');
window.addEventListener("load", (event) => {

    var isFloadingAnimationRunning1 = false;
    var isFloadingAnimationRunning2 = false;

    var timeout_1, timeout_2, timeout_3, timeout_4, timeout_5, timeout_7, timeout_8, timeout_9, timeout_10, timeout_11,timeout_12,ms_timer_1,ms_timer_2;

    var timeouts1 = [timeout_1, timeout_2, timeout_3, timeout_4, timeout_5];
    var timeouts2 = [timeout_7, timeout_8, timeout_9, timeout_10, timeout_11,timeout_12];

    function clearTimeouts1() {
        for (var i = 0; i < timeouts1.length; i++) {
            clearTimeout(timeouts1[i]);
        }
        clearInterval(ms_timer_1)
    }
    function clearTimeouts2() {
        for (var i = 0; i < timeouts2.length; i++) {
            clearTimeout(timeouts2[i]);
        }
        clearInterval(ms_timer_2)
    }


    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        effect: "fade",
        autoplay: false,
        speed: 400,
        allowTouchMove: false,
        initialSlide: 0,
        keyboard: {
        enabled: true,
        },
        parallax:true,
        on: {
        init: function () {
           $(".bottom-toolbar").show();
        },
        setTransition: function (swiper) {
            $(".modal-container").hide();
            $(".modal-overlay").hide();
        },
        slideChange: function (swiper) {
            if(swiper.activeIndex === 4 && swiper.previousIndex === 3){
                audio.play();
            }
        },
        },
    });

    var nested_swiper_options = {
        slidesPerView: 1,
        spaceBetween: 0,
        effect: "fade",
        autoplay: false,
        speed: 400,
        allowTouchMove: false,
        initialSlide: 0,
        keyboard: {
            enabled: false,
        }
    }

    var nested_swiper_1 = new Swiper(".nested-swiper-1", {
        ...nested_swiper_options
    });
    var nested_swiper_2 = new Swiper(".nested-swiper-2", {
        ...nested_swiper_options
    });
    var nested_swiper_3 = new Swiper(".nested-swiper-3", {
        ...nested_swiper_options
    });

    $(document).on("change","#font-toggle", function(){
        if($(this).prop("checked")){
            $(".custom-font-text").each(function(){
                $(this).css("font-style","italic");
            });
        }
        else{
            $(".custom-font-text").each(function(){
                $(this).css("font-style","normal");
            });
        }
    });

    $(document).on("change","#font-toggle-2", function(){
        if($(this).prop("checked")){
            $(".custom-font-text-2").each(function(){
                $(this).css("font-style","italic");
            });
        }
        else{
            $(".custom-font-text-2").each(function(){
                $(this).css("font-style","normal");
            });
        }
    });

    $(document).on("change","#font-toggle-3", function(){
        if($(this).prop("checked")){
            $(".inbox-inter").hide();
            $(".inbox-outfit").fadeIn();
        }
        else{
            $(".inbox-outfit").hide();
            $(".inbox-inter").fadeIn();
        }
    });

    $( function() {
        $( "#fw-slider-1" ).slider({
            value: 400,
            step: 1,
            max: 900,
            min: 400,
            slide: function( event, ui ) {
                $(".custom-font-text").each(function(){
                    $(this).css("font-weight",ui.value);    
                });
            }
        });
        $( "#lh-slider-1" ).slider({
            value: 1.15,
            step: 0.05,
            max: 2,
            min: 0.75,
            slide: function( event, ui ) {
                $(".custom-font-text").each(function(){
                    $(this).css("line-height",ui.value);    
                });
            }
        });
        $( "#fw-slider-2" ).slider({
            value: 400,
            step: 1,
            max: 900,
            min: 400,
            slide: function( event, ui ) {
                $(".custom-font-text-2").each(function(){
                    $(this).css("font-weight",ui.value);    
                });
            }
        });
        $( "#lh-slider-2" ).slider({
            value: 1.15,
            step: 0.05,
            max: 2,
            min: 0.75,
            slide: function( event, ui ) {
                $(".custom-font-text-2").each(function(){
                    $(this).css("line-height",ui.value);    
                });
            }
        });
    });

    $(document).on("change","#font-family-toggle", function(){
        if($(this).prop("checked")){
            nested_swiper_1.slideTo(1);
            nested_swiper_2.slideTo(1);
            nested_swiper_3.slideTo(1);
        }
        else{
            nested_swiper_1.slideTo(0);
            nested_swiper_2.slideTo(0);
            nested_swiper_3.slideTo(0);
        }
    });
    var sysfont_swiper_options = {
        slidesPerView: 1,
        spaceBetween: 0,
        effect: "fade",
        autoplay: false,
        speed: 400,
        allowTouchMove: false,
        initialSlide: 0,
        autoHeight: true,
        keyboard: {
            enabled: false,
        }
    }
    var sysfont_swiper_1 = new Swiper(".sysfont-swiper-1", {
        ...sysfont_swiper_options
    });
    var sysfont_swiper_2 = new Swiper(".sysfont-swiper-2", {
        ...sysfont_swiper_options
    });
    var sysfont_swiper_3 = new Swiper(".sysfont-swiper-3", {
        ...sysfont_swiper_options
    });

    $(document).on("change","input[name='sys-font-list']", function(){
        $(".switch-font-bottom").removeClass(function(index, className) {
            return (className.match(/\bactive-font-\S+/g) || []).join(' ');
        });
        $(".switch-font-bottom").addClass("active-"+$(this).val());
        $(".sysfont-prof").hide();
        $(".prof-"+$(this).val()).fadeIn();
        switch ($(this).val()) {
            case "font-mac":
                sysfont_swiper_1.slideTo(0); sysfont_swiper_2.slideTo(0); sysfont_swiper_3.slideTo(0);
                break;
            case "font-windows":
                sysfont_swiper_1.slideTo(1); sysfont_swiper_2.slideTo(1); sysfont_swiper_3.slideTo(1);
                break;
            case "font-linux":
                sysfont_swiper_1.slideTo(2); sysfont_swiper_2.slideTo(2); sysfont_swiper_3.slideTo(2);
                break;
            case "font-android":
                sysfont_swiper_1.slideTo(3); sysfont_swiper_2.slideTo(3); sysfont_swiper_3.slideTo(3);
                break;
            default:
                sysfont_swiper_1.slideTo(0); sysfont_swiper_2.slideTo(0); sysfont_swiper_3.slideTo(0);
          }
    });
    $(document).on("change","input[name='sys-font-list-2']", function(){
        $(".switch-font-top-2").removeClass(function(index, className) {
            return (className.match(/\bactive-font-\S+/g) || []).join(' ');
        });
        $(".switch-font-top-2").addClass("active-"+$(this).val());
        $(".inbox-img").hide();
        $(".inbox-"+$(this).val()).fadeIn();
    });


$(document).on("change","input[name='social-platform']", function(){
    $(".social-platform-top").removeClass(function(index, className) {
        return (className.match(/\bactive-pf-\S+/g) || []).join(' ');
    });
    $(".social-platform-top").addClass("active-"+$(this).val());
    $(".social-platform-top").addClass("active-pf-"+$(this).val());
    $(".pf-img").hide();
    $("#"+$(this).val()+"-img").fadeIn();
});

$(document).on("click",".watch-video-btn", function(){
    $(".modal-overlay").fadeIn(100);
    $(".modal-container").fadeIn(150);
});
$(document).on("click",".modal-close-btn", function(){
    $(".modal-container").fadeOut(100);
    $(".modal-overlay").fadeOut(150);
});
$(document).on("click",".modal-overlay", function(){
    $(".modal-container").fadeOut(100);
    $(".modal-overlay").fadeOut(150);
});
    
});