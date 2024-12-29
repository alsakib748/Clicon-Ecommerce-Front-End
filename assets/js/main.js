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

$(document).ready(function(){

    $(".computer-accessories .nav-link").click(function(){
            
        $(".computer-accessories .nav-link").removeClass("active");
        $(this).addClass("active");
    
    });

});

// todo: computer accessories product filter (isotope.js)

$(document).ready(function(){

    var $grid = $('.computer-accessories-product-items').isotope({
    // options
    });
    
    $('.computer-accessories-products-menu').on( 'click', 'li', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });
    
});


$(document).ready(function(){

    $("#user-access").click(function(){
        // $("#user-login-form").toggleClass("d-none");
        $("#user-login-form").fadeToggle("slow").toggleClass("d-none");
    });

});

$(document).ready(function(){

    $("#user-cart").click(function(){

        $("#user-shopping-cart").toggleClass("d-none");

    });

});

$(document).ready(function(){

    document.addEventListener( 'DOMContentLoaded', function () {
        var main = new Splide( '#main-slider', {
          type      : 'fade',
          rewind    : true,
          pagination: false,
          arrows    : false,
        } );
      
      
        var thumbnails = new Splide( '#thumbnail-slider', {
          fixedWidth  : 96,
          fixedHeight : 96,
          gap         : 5,
          rewind      : true,
          pagination  : false,
          cover       : true,
          isNavigation: true,
          breakpoints : {
            600: {
              fixedWidth : 60,
              fixedHeight: 44,
            },
          },
        } );
      
      
        main.sync( thumbnails );
        main.mount();
        thumbnails.mount();
      });

});

$(document).ready(function(){

    $("#add-to-card-qty #minus").click(function(){

        var qty =  $("#qty-value").val();
        
        if(qty > 1){
            qty--;
            $("#qty-value").val(qty);
        }

    });

    $("#add-to-card-qty #plus").click(function(){

        var qty =  $("#qty-value").val();
    
        qty++;
        $("#qty-value").val(qty);

    });

});

/**todo:*******************************************Shop Page JS**************************************************/
/**todo:*******************************************Shop Page JS**************************************************/
/**todo:*******************************************Shop Page JS**************************************************/

$(document).ready(function(){

    const rangeInput = document.querySelectorAll(".range-input input"),
  priceInput = document.querySelectorAll(".price-input input"),
  range = document.querySelector(".slider .progress");
let priceGap = 50;

priceInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minPrice = parseInt(priceInput[0].value),
      maxPrice = parseInt(priceInput[1].value);

    if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
      if (e.target.className === "input-min") {
        rangeInput[0].value = minPrice;
        range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
      } else {
        rangeInput[1].value = maxPrice;
        range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
      }
    }
  });
});

rangeInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minVal = parseInt(rangeInput[0].value),
      maxVal = parseInt(rangeInput[1].value);

    if (maxVal - minVal < priceGap) {
      if (e.target.className === "range-min") {
        rangeInput[0].value = maxVal - priceGap;
      } else {
        rangeInput[1].value = minVal + priceGap;
      }
    } else {
      priceInput[0].value = minVal;
      priceInput[1].value = maxVal;
      range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
      range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
    }
  });
});


});


$(document).ready(function () {
  const activeFilter = $('#active-filter');

  // Function to create a filter item
  function createFilterItem(text, isRadio) {
    if (isRadio) {
      // Remove existing radio button filter items
      activeFilter.find('.filter-item.radio').remove();
    }

    const filterItem = $('<div>', { class: 'filter-item d-flex align-items-center justify-content-start gap-2' });
    if (isRadio) {
      filterItem.addClass('radio');
    }
    const filterText = $('<span>', { class: 'name' }).text(text);
    const closeIcon = $('<span>', { id: 'close-icon' }).html(`
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path d="M9.375 2.625L2.625 9.375" stroke="#929FA5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9.375 9.375L2.625 2.625" stroke="#929FA5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `);

    closeIcon.on('click', function () {
      filterItem.remove();
    });

    filterItem.append(filterText).append(closeIcon);
    activeFilter.append(filterItem);
  }

  // Event listener for radio buttons and checkboxes
  $('.category-item').on('change', function () {
    const label = $(this).next('label');
    if ($(this).is(':checked')) {
      createFilterItem(label.text(), $(this).attr('type') === 'radio');
    } else {
      // Remove the filter item if the checkbox is unchecked
      activeFilter.find('.filter-item').each(function () {
        if ($(this).find('.name').text() === label.text()) {
          $(this).remove();
        }
      });
    }
  });
});

$(document).ready(function () {
  const activeFilter = $('#active-filter');

  // Function to create a filter item
  function createFilterItem(text) {
    const filterItem = $('<div>', { class: 'filter-item d-flex align-items-center justify-content-start gap-2' });
    const filterText = $('<span>', { class: 'name' }).text(text);
    const closeIcon = $('<span>', { id: 'close-icon' }).html(`
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path d="M9.375 2.625L2.625 9.375" stroke="#929FA5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9.375 9.375L2.625 2.625" stroke="#929FA5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `);

    closeIcon.on('click', function () {
      filterItem.remove();
    });

    filterItem.append(filterText).append(closeIcon);
    activeFilter.append(filterItem);
  }

  // Event listener for radio buttons and checkboxes
  $('.popular-brands-item').on('change', function () {
    const label = $(this).next('label');
    if ($(this).is(':checked')) {
      createFilterItem(label.text());
    } else {
      // Remove the filter item if the checkbox is unchecked
      activeFilter.find('.filter-item').each(function () {
        if ($(this).find('.name').text() === label.text()) {
          $(this).remove();
        }
      });
    }
  });
});

$(document).ready(function () {

  $('.remove-btn').on('click', function () {

    $(this).closest('.row').remove();

  });

});

$(document).ready(function() {
  // Event listener for minus button
  $(".shopping-card-item .minus").click(function() {
    var $row = $(this).closest('.shopping-card-item');
    var $qtyInput = $row.find('.qty');
    var qty = parseInt($qtyInput.val());

    if (qty > 1) {
      qty--;
      $qtyInput.val(qty);
    }
  });

  // Event listener for plus button
  $(".shopping-card-item .plus").click(function() {
    var $row = $(this).closest('.shopping-card-item');
    var $qtyInput = $row.find('.qty');
    var qty = parseInt($qtyInput.val());

    qty++;
    $qtyInput.val(qty);
  });
});

// $(document).ready(function(){

//     $("#question").click(function(){
//         $(this).closest(".question-div").find("#question").toggleClass("active");
//     });

// });

$(document).ready(function(){

  $(".question").click(function(){
      $(this).toggleClass("active");

      $(this).find('.icon i')
      .toggleClass('fa-plus fa-minus text-secondary text-white');
  });


});