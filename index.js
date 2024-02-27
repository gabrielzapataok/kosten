// Slider services
const swiperServices = new Swiper('.slick-services-home .swiper', {
    loop: true,
    effect: 'coverflow',
    autoplay: true,
    slidesPerView: 2,
    centeredSlides: true,
    coverflowEffect: {
        depth: 500,
        modifier: 1,
        rotate: 0,
        scale: 0.8,
        slideShadows: false,
        stretch: 0,
    },
});


// Slider videos
const swiperHedaer = new Swiper('.header-slider-videos .swiper', {
    loop: true,
    autoplay: {
        delay: 6000, // Intervalo de tiempo en milisegundos
    },
    on: {
        init: function () {
            const videos = document.querySelectorAll('.header-slider-videos video')
            const activeIndex = this.realIndex
            const activeSlide = document.getElementsByClassName('swiper-slide')[activeIndex]
            const activeVideo = activeSlide.getElementsByTagName('video')[0]
            activeVideo.muted = true
            Array.prototype.forEach.call(videos, function (video) {
                video.currentType = 0
                video.addEventListener('ended', function () {
                    this.currentTime = 0;
                    this.play();
                });
            })
            activeVideo.play()
        },
        slideChange: function () {
            const videos = document.querySelectorAll('video')
            const activeIndex = this.realIndex
            const activeSlide = document.getElementsByClassName('swiper-slide')[activeIndex]
            const activeVideo = activeSlide.getElementsByTagName('video')[0]
            activeVideo.muted = true
            Array.prototype.forEach.call(videos, function (video) {
                // video.pause()
                video.currentType = 0
            })
            activeVideo.play()
        }
    }
});


// Gsap clients
$(document).ready(function() {
    // Calcular el ancho de '.container-words-1 .words'
    var containerWidth1 = $('.container-words-1 .words').width();
    var containerWidth2 = $('.container-words-2 .words').width();
    var containerWidth3 = $('.container-logos .logos').width();
    
    var windowWidth = $(window).width();

    gsap.registerPlugin(ScrollTrigger);
    const containerScrollTrigger = document.querySelector(".section-clients")
    const sectionsTimeline = gsap.timeline()
    .fromTo('.container-words-1 .words', { 
        x: 0,
    },{
        x: ( containerWidth1 - windowWidth ) * -1,
    },0)
    .fromTo('.container-words-2 .words', { 
        x: 0,
    },{
        x: containerWidth2 - windowWidth,
    },0)
    .fromTo('.container-logos .logos', { 
        x: 0
    },{
        x: ( containerWidth3 - windowWidth ) * -1,
    },0)
    
    ScrollTrigger.create({
        animation: sectionsTimeline,
        trigger: containerScrollTrigger,
        start: '50% 50%',
        markers: true,
        end: 5000,
        scrub: true,
        pin: true
    })
});


$(document).ready(function() {
    // Enabled tooltip
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
    // Enabled popover
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
});
