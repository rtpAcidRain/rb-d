// Слайдеры

const setSwipers = () => {
  if ($("#product-category").length > 0) {
    const swiper = new Swiper("#product-category .swiper", {
      slidesPerView: "auto",
      pagination: {
        el: "#product-category .swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: "#product-category .swiper-button-next",
        prevEl: "#product-category .swiper-button-prev",
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1366: {
          slidesPerView: 3,
        },
      },
    });
  }

  if ($("#product-category2").length > 0) {
    const swiper = new Swiper("#product-category2 .swiper", {
      slidesPerView: "auto",
      pagination: {
        el: "#product-category2 .swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: "#product-category2 .swiper-button-next",
        prevEl: "#product-category2 .swiper-button-prev",
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
      },
    });
  }
  if ($("#product-category3").length > 0) {
    const swiper = new Swiper("#product-category3 .swiper", {
      slidesPerView: "auto",
      pagination: {
        el: "#product-category3 .swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: "#product-category3 .swiper-button-next",
        prevEl: "#product-category3 .swiper-button-prev",
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
      },
    });
  }
  if ($("#history-swiper").length > 0) {
    const swiper = new Swiper("#history-swiper", {
      slidesPerView: 1,
      effect: "fade",
      pagination: {
        el: "#history-swiper .swiper-pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: "#history-swiper .swiper-button-next",
        prevEl: "#history-swiper .swiper-button-prev",
      },
      breakpoints: {},
    });
  }

  if ($(".partners").length > 0) {
    const swiper = new Swiper(".partners .swiper", {
      slidesPerView: "auto",
    });
  }

  if ($(".ctm-swiper").length > 0) {
    const swiper = new Swiper(".ctm-swiper", {
      slidesPerView: 1,
      effect: "fade",
      autoplay: {
        delay: 5000,
      },
      pagination: {
        el: ".ctm-swiper .swiper-pagination",
        clickable: true,
      },
    });
  }
};
