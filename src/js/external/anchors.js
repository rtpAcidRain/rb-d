// Якорные ссылки
const setAnchors = () => {
  $("header a:not(.menu-button, .lang-switcher, [href='/'])").on(
    "click",
    function (event) {
      event.preventDefault();
      let $anchor = $(this);

      $("html, body")
        .stop()
        .animate(
          {
            scrollTop:
              $($anchor.attr("href")).offset().top -
              $(".header__container").outerHeight() -
              20,
          },
          {
            duration: 1000,
            specialEasing: {
              width: "linear",
              height: "easeInOutCubic",
            },
          }
        );
      $(".header").removeClass("opened");
    }
  );
  function removeCurrentHeader() {
    $(`header a`).each(function () {
      if ($(this).hasClass("current-anch")) {
        $(this).removeClass("current-anch");
      }
    });
  }
  $(window).on("scroll", function () {
    $(".anchor-target").each(function () {
      const name = $(this).attr("id");
      const anchor = $(`header a[href="#${name}"]`);
      var winTop =
        $(window).scrollTop() + $(".header__container").outerHeight() + 21;
      var elTop = $(this).offset().top;
      var elBottom = elTop + $(this).height();

      if (anchor.length > 0 && elBottom >= winTop && elTop <= winTop) {
        removeCurrentHeader();

        anchor.addClass("current-anch");
      }
    });
  });
};
