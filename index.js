// Slider services
const swiperServices = new Swiper('.slick-services-home .swiper', {
    loop: true,
    effect: 'coverflow',
    autoplay: {
        delay: 4500, // Intervalo de tiempo en milisegundos
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
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


const swiperClients = new Swiper('.clients.swiper', {
    loop: true,
    autoplay: {
        delay: 4000, // Intervalo de tiempo en milisegundos
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 'auto', // Muestra la cantidad de slides que quepan en el contenedor
    spaceBetween: 100,
    centeredSlides: true,
});


// Slider videos
const swiperHedaer = new Swiper('.header-slider-videos .swiper', {
    loop: true,
    speed: 1000,
    // effect: 'fade',
    autoplay: {
        delay: 6500, // Intervalo de tiempo en milisegundos
    },
    on: {
        transitionEnd: function () {
            var currentSlide = this.slides[this.activeIndex]
            var h1Element = currentSlide.querySelector('h1')
            setTimeout(function () {
              $(h1Element).fadeIn()
            }, 500)
        },
        init: function () {

            var currentSlide = this.slides[this.activeIndex]
            var h1Element = currentSlide.querySelector('h1')
            setTimeout(function () {
              $(h1Element).fadeIn()
            }, 500)

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
// $(document).ready(function () {
//     // Calcular el ancho de '.container-words-1 .words'
//     var containerWidth1 = $('.container-words-1 .words').width();
//     var containerWidth2 = $('.container-words-2 .words').width();
//     var containerWidth3 = $('.container-logos .logos').width();

//     var windowWidth = $(window).width();

//     gsap.registerPlugin(ScrollTrigger);
//     const containerScrollTrigger = document.querySelector(".section-clients")
//     const sectionsTimeline = gsap.timeline()
//         .fromTo('.container-words-1 .words', {
//             x: 0,
//         }, {
//             x: (containerWidth1 - windowWidth) * -1,
//         }, 0)
//         .fromTo('.container-words-2 .words', {
//             x: 0,
//         }, {
//             x: containerWidth2 - windowWidth,
//         }, 0)
//         .fromTo('.container-logos .logos', {
//             x: 0
//         }, {
//             x: (containerWidth3 - windowWidth) * -1,
//         }, 0)

//     ScrollTrigger.create({
//         animation: sectionsTimeline,
//         trigger: containerScrollTrigger,
//         start: '100px 100%',
//         markers: false,
//         end: '200px 0%',
//         scrub: true,
//         pin: false,
//         ease: "none",
//     })
// });


$(document).ready(function () {
    // Enabled tooltip
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
    // Enabled popover
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
});



$(document).ready(function () {
    gsap.set('.profile', {
        opacity: 0,
        y: 60,
    })
    ScrollTrigger.batch('.profile', {
        start: 'top 100%',
        onEnter: batch => {
            console.log("onEnter");
            gsap.to(batch, {
                opacity: 1,
                y: 0,
                stagger: 0.5
            });
        }
    })
});







$(document).ready(function () {
    $(".executive-team").hide();
    $("#executive-team").click(function () {
        $("#executive-team").addClass("selected");
        $("#advisory-board").removeClass("selected");
        $(".executive-team").fadeOut(function () {
            $(".advisory-board").fadeIn()
        });
    });
    $("#advisory-board").click(function () {
        $("#executive-team").removeClass("selected"); // Cambiado de addClass a removeClass
        $("#advisory-board").addClass("selected"); // Cambiado de removeClass a addClass
        $(".advisory-board").fadeOut(function () {
            $(".executive-team").fadeIn();
        }
        );
    });
});



// Parallax animation
$(document).ready(function () {
    const img = $('.basic-content-header .main-image img')
    img.css("height", "140%")

    const parallaxTimeLine = gsap.timeline()
    parallaxTimeLine.from(img, {
        duration: 1,
        ease: "none",
        yPercent: "-=40",
    });
    ScrollTrigger.create({
        animation: parallaxTimeLine,
        trigger: img,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
    })
})


// Menu
$(document).ready(function () {
    const open = $('#open-menu')
    const close = $('#close-menu')
    const containerMenu = $('.menu')
    close.hide()
    open.show()
    open.click(function () {
        open.hide()
        close.show()
        containerMenu.addClass("opened")
    });
    close.click(function () {
        close.hide()
        open.show()
        containerMenu.removeClass("opened")
    });
});

// Read more
$(document).ready(function() {

    const readMore = $('.btn-read-more')
    const readLess = $('.btn-read-less')
    const extraText = $('.extra-text') 

    readLess.hide()
    extraText.hide()

    readMore.click(function() {
        console.log("readMore");
        extraText.show()
        readMore.hide()
        readLess.show()
    })
    readLess.click(function() {
        console.log("readLess");
        extraText.hide()
        readMore.show()
        readLess.hide()
    })
})