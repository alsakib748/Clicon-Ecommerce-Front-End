// todo: top banner close button
$(document).ready(function(){

    $('.top-banner-close-btn').click(function(){

        $(".top-banner-section").addClass("d-none");

    });

});

$(document).ready(function() {
    $('#language-title').click(function() {
        $('#language-menu').toggleClass("d-none");
    });
});

$(document).ready(function() {
    $('#currency-title').click(function() {
        $('#currency-menu').toggleClass("d-none");
    });
});

$(document).ready(function() {
    $("#all-categories-arrow").attr('class', 'bi bi-chevron-down');

    $('#all-categories').click(function() {
        $("#all-categories-arrow").toggleClass('bi-chevron-down bi-chevron-up');
    });
});

$(document).ready(function() {
    $('#all-categories').click(function() {
        $('#all-categories-menu').toggleClass("d-none");
    });
});


$(document).ready(function() {
    $('#nav-item-menu').hover(function() {
        $('#all-categories-menu-item').toggleClass("d-none");
    });
});

$(document).ready(function(){

    var swiper = new Swiper("#main-slider", {
        slidesPerView: 1,
        spaceBetween: 30,
        grabCursor: true,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });

});    

// todo: category swiper js 
$(document).ready(function(){
    var swiper = new Swiper("#category-swiper", {
        slidesPerView: 6,
        slidesPerGroup: 1,
        spaceBetween: 50,
        // freeMode: true,
        loop: true,
        grabCursor: true,
        clickable: true,
        navigation: {
            nextEl: ".custom-category-swiper-button-next",
            prevEl: ".custom-category-swiper-button-prev",
        },
        breakpoints: {
            300: {
                slidesPerView: 1,
                spaceBetween: 5,
            },
            425: {
                slidesPerView: 2,
                spaceBetween: 5,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 10,
            },
        },
    });
});

// todo: featured product filter (isotope.js)

$(document).ready(function(){

    var $grid = $('.product-items').isotope({
    // options
    });
    
    $('.products-menu').on( 'click', 'li', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });
    
});

$(document).ready(function(){

    $(".featured-product .nav-link").click(function(){

        $(".featured-product .nav-link").removeClass("active");
        $(this).addClass("active");

    });

});