// 100vh
const setDocHeight = () => {
  const doc = document.documentElement;
  doc.style.setProperty("--doc-height", `${window.innerHeight}px`);
};

// Мобильное меню
const setBurgerMenu = () => {
  $(".menu-button").on("click", function (e) {
    e.preventDefault();
    $(".header").toggleClass("opened");
  });
};

//

const loadScript = (url, callback) => {
  var head = document.head;
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = url;

  script.onreadystatechange = callback;
  script.onload = callback;

  head.appendChild(script);
};

// Инициализация скриптов
window.addEventListener("DOMContentLoaded", () => {
  setDocHeight();
  setModalsClose("#formSuccess");
  $(window).on("resize", function () {
    setDocHeight();
  });
  setHeaderAnim();
  openDroplist();
  setForms();
  if ($(".swiper").length > 0 || $(".news-side").length > 0) {
    loadScript("https://rb-d.ru/bitrix/templates/rbd/js/swiper.js", setSwipers);
  }
  setPartners();
  setAnchors();
  setBurgerMenu();
  setModal();
  if ($(".first-title").length > 0) {
    $(".first-title").addClass("showed");
  }
  if ($(".hystory__open-more").length > 0) {
    $(".hystory__open-more").on("click", function (e) {
      e.preventDefault();
      $(this).parent(".history__slide__text").toggleClass("opened");
    });
  }

  if ($(".report__text").length > 0) {
    if ($(window).width() < 769) {
      $(".report__text").each(function () {
        if ($(this).find("span").height() > 70) {
          $(this).addClass("hidden-text ");
          $(this)
            .find(".hystory__open-more")
            .on("click", () => {
              $(this).toggleClass("opened");
            });
        }
      });
    }
  }

  if ($(".report__image-elem-scale").length > 0) {
    $(".report__image-elem-scale").each(function () {
      const $img = $(this).find("img");

      $img.on("click", function () {
        $("body").append(
          '<div class="report__image-modal"><div class="report__image-modal__container"></div></div>'
        );
        let oBig = $(".report__image-modal");
        let oBigCon = oBig.find(".report__image-modal__container");

        oBigCon.append(`<a href="#" class="close-img">
        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none">
          <path d="M18 6L6 18" stroke="#162148" stroke-linecap="square" stroke-linejoin="round"/>
          <path d="M6 6L18 18" stroke="#162148" stroke-linecap="square" stroke-linejoin="round"/>
          </svg></a>`);

        oBigCon.append($(this).clone(true).off());

        const closeThis = (e) => {
          e.preventDefault();
          oBig.removeClass("active");
          setTimeout(function () {
            oBig.remove();
          }, 150);
        };

        oBigCon.on("click", function (e) {
          e.stopPropagation();
        });

        oBig.on("click", (e) => closeThis(e));

        $(".report__image-modal__container .close-img").on("click", (e) =>
          closeThis(e)
        );

        setTimeout(function () {
          oBig.addClass("active");
        }, 150);
      });
    });
  }

  if ($(".partner--v2-container").length > 0) {
    let end = false;
    $(window).on("scroll", function () {
      if (
        $(window).scrollTop() + $(window).outerHeight() >=
          $(".partner--v2-container").offset().top &&
        !end
      ) {
        $(".partner--v2-container").removeClass("stop");
        setTimeout(() => {
          $(".partner--v2-container").removeClass(
            "partner--v2-container--transition"
          );
          end = true;
        }, 1600);
      }
    });
  }

  $(".seo-block").each(function () {
    if ($(this).find(".seo-block__text").text().split("\n").length > 9) {
      $(this).addClass("seo-block__hidden");
      $(this)
        .find(".seo-block__more")
        .on("click", () => {
          $(this).removeClass("seo-block__hidden");
        });
    }
  });

  $(".bread-crumbs").each((_, el) => {
    if ($(el).children(".bread-crumb").length > 3) {
      $(el).addClass("small-v");
      $(el)
        .children(".bread-crumb:nth-child(1)")
        .after('<li class="bread-crumb"><span>...</span></li>');
    }
  });
});
