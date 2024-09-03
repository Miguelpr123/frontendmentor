$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 4500,
        responsive: {
            0: {
                items: 1,
                dots: true
            },
            640: {
                items: 2,
                dots: true
            },
            768: {
                items: 3
            },
            // 1024: {
            //     items: 4
            // },
            // 1280: {
            //     items: 5
            // },
            // 1536: {
            //     items: 6
            // }
        }
    })
});