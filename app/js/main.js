$(function () {
    const heroHeight = $(".hero").outerHeight();

    $(window).scroll(function () {
        if ($(window).scrollTop() >= heroHeight + headerHeight) {
            $(".header").addClass("header--fixed");
        } else {
            $(".header").removeClass("header--fixed");
        }
    });

    const headerHeight = $(".menu").outerHeight();
    $("").on(
        "click",
        function (event) {
            event.preventDefault();
            const scrollAnchor = $(this).attr("href");
            let scrollPoint = $(scrollAnchor).offset().top + headerHeight;
            $("body,html").animate({ scrollTop: scrollPoint }, 1200);
        }
    );

    $(".menu__link").on("click", function () {
        $(".menu__link").removeClass("menu__link--active");
        $(this).addClass("menu__link--active");
    });

    $(".category__btn").on("click", function () {
        $(".category__btn").removeClass("category__btn--active");
        $(this).addClass("category__btn--active");
    });

    $(".reviews__slider").slick({
        dots: true,
        arrows: true,
    });

    var mixer = mixitup(".category__content");
});