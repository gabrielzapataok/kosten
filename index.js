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
    autoplay: true,
    on: {
        init: function () {
            const videos = document.querySelectorAll('video')
            const activeIndex = this.realIndex
            const activeSlide = document.getElementsByClassName('swiper-slide')[activeIndex]
            const activeVideo = activeSlide.getElementsByTagName('video')[0]
            activeVideo.muted = true
            Array.prototype.forEach.call(videos, function (video) {
                video.pause
                video.currentType = 0
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
                video.pause
                video.currentType = 0
            })
            activeVideo.play()
        }
    }
});

// Slider services
// const sectionClientsWords = new Swiper('.section-clients .swiper', {
//     loop: true,
//     autoplay: {
//         delay: 0, // El tiempo de espera entre slides en milisegundos
//         disableOnInteraction: false, // Para que el autoplay no se detenga al interactuar con el carousel
//     },
//     speed: 10000,
//     effect: 'linear',
//     virtual: {
//         enabled: true,
//     },
    
// });



// Gsap
gsap.registerPlugin(ScrollTrigger);
const containerScrollTrigger = document.querySelector(".section-clients")
const sectionsTimeline = gsap.timeline()
.from('.container-words-1 .words', { 
    xPercent: -100,
},0)
.from('.container-words-2 .words', { 
    xPercent: 100,
},0)
.to('.container-logos .logos', { 
    x: "-200px"
},0)

ScrollTrigger.create({
    animation: sectionsTimeline,
    trigger: containerScrollTrigger,
    start: '50% 50%',
    markers: true,
    end: 8000,
    scrub: true,
    pin: true
})