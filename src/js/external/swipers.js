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

  if ($(".history-swiper--v2").length > 0) {
    $(".history-swiper--v2")
      .find(".swiper-slide")
      .each(function () {
        let year = $(this).find(".history__slide__title").text();
        $(".history-swiper--v2__pagination").append(
          `<button class="history_pagination_button"><span>${year}</span></button>`
        );
      });

    const hisBut = $(".history_pagination_button");

    const swiper = new Swiper(".history-swiper--v2", {
      slidesPerView: "auto",
      spaceBetween: 16,
      navigation: {
        nextEl: ".history-swiper--v2 .swiper-button-next",
        prevEl: ".history-swiper--v2 .swiper-button-prev",
      },
      loopAdditionalSlides: 30,
      loop: true,
      breakpoints: {
        768: {
          spaceBetween: 37,
          centeredSlides: true,
          roundLengths: true,
        },
        1366: {
          spaceBetween: $(".history-swiper--v2").hasClass("paraf-slider")
            ? 133
            : 68,
          centeredSlides: true,
          roundLengths: true,
        },
      },
    });

    function setSlide(ind) {
      // swiper.slideTo(ind);
      hisBut.removeClass("active");
      hisBut.eq(ind).addClass("active");
      document
        .querySelector(".history_pagination_button.active")
        .scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
    }

    swiper.on("slideChangeTransitionEnd", function () {
      setSlide(this.realIndex);
    });

    hisBut.each((i, el) => {
      $(el).on("click", () => {
        swiper.slideToLoop(i);
      });
    });

    hisBut.first().addClass("active");
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

  if ($(".link-cards__swiper").length > 0) {
    const swiper = new Swiper(".link-cards__swiper", {
      slidesPerView: "auto",
      spaceBetween: 20,
      pagination: {
        el: ".link-cards__swiper .swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".link-cards__swiper .swiper-button-next",
        prevEl: ".link-cards__swiper .swiper-button-prev",
      },
    });
  }
  if ($(".team-slider").length > 0) {
    const swiper = new Swiper(".team-slider", {
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: ".team-slider .swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".team-slider .swiper-button-next",
        prevEl: ".team-slider .swiper-button-prev",
      },
    });
  }
  if ($(".marketing-promotion").length > 0) {
    const swiper = new Swiper(".marketing-promotion", {
      slidesPerView: "auto",
      spaceBetween: 16,
      navigation: {
        nextEl: ".marketing-promotion-control .swiper-button-next",
        prevEl: ".marketing-promotion-control .swiper-button-prev",
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1366: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
    });
  }
  if ($(".piz-new").length > 0) {
    const swiper = new Swiper(".piz-new .swiper", {
      slidesPerView: "auto",
      spaceBetween: 16,
      pagination: {
        el: ".piz-new .swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".piz-new .swiper-button-next",
        prevEl: ".piz-new .swiper-button-prev",
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1366: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
    });
  }
  if ($(".teams-slider").length > 0) {
    const swiper = new Swiper(".teams-slider", {
      slidesPerView: "auto",
      spaceBetween: 20,
      pagination: {
        el: ".teams-slider .swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".teams-slider .swiper-button-next",
        prevEl: ".teams-slider .swiper-button-prev",
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1366: {
          spaceBetween: 30,
          slidesPerView: 4,
        },
      },
    });
  }

  if ($(".news-side").length > 0 && $(window).width() < 1366) {
    $(".news-single__page").addClass("mobile");
    $(".news-side").addClass("swiper");
    $(".news-side__container").addClass("swiper-wrapper");
    $(".news-side__item").addClass("swiper-slide");
    const controls = `
        <div class="swiper-controls">
          <div class="swiper-button-prev icon-arrow2-left" ></div>
          <div class="swiper-pagination"></div>
          <div class="swiper-button-next icon-arrow2-right"></div>
        </div>
      `;
    $(".news-side").append(controls);

    const swiper = new Swiper(".news-side", {
      slidesPerView: "auto",
      spaceBetween: 16,
      pagination: {
        el: ".news-side .swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".news-side .swiper-button-next",
        prevEl: ".news-side .swiper-button-prev",
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
      },
    });
  }
};
