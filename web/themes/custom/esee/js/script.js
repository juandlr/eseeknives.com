(function ($) {
  $(function () {
    // ----------------- carousel
    $('.carousel').slick({
      prevArrow: '<svg class="text-black h-9 w-auto slick-prev slick-arrow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" /></svg>',
      nextArrow: '<svg class="text-black h-9 w-auto slick-next slick-arrow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>',
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            slidesMargin: 10,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });

    // --------------------------------------------------------- mobile menu
    const $menuMobile = $('.menu-mobile');
    $('#toggleMenu').click(function () {
      $menuMobile.toggle();
      if ($menuMobile.is(':visible')) {
        $('#toggleMenu i').removeClass('fa-bars').addClass('fa-times');  // 'X' icon
      } else {
        $('#toggleMenu i').removeClass('fa-times').addClass('fa-bars');  // 'Menu' icon
      }
    });

    $menuMobile.find('> ul > .menu-item').click(() => {
      $(this).find('> .hidden').toggle();
    });

    // ----------------------------------------------------- Facets accordion
    $('.block-facets h2').click(function () {
      let currentBlock = $(this).closest('.block-facets');
      let checkboxDiv = currentBlock.find('.facets-widget-checkbox');
      let chevron = $(this).find('i');

      checkboxDiv.slideToggle();

      if (chevron.hasClass('fa-chevron-down')) {
        chevron.removeClass('fa-chevron-down');
        chevron.addClass('fa-chevron-up');
      } else {
        chevron.removeClass('fa-chevron-up');
        chevron.addClass('fa-chevron-down');
      }
    });

    // ------------------- filters accordion
    $('.accordion-header').click(function () {
      let currentBlock = $(this).closest('.block');
      let filterForm = currentBlock.find('form');
      let chevron = $(this).find('i:last');

      filterForm.slideToggle();

      if (chevron.hasClass('fa-chevron-down')) {
        chevron.removeClass('fa-chevron-down');
        chevron.addClass('fa-chevron-up');
      } else {
        chevron.removeClass('fa-chevron-up');
        chevron.addClass('fa-chevron-down');
      }
    });

  });
})(jQuery);
