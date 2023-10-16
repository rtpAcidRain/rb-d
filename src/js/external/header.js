// Хедер

const setHeaderAnim = () => {
  const $header = $(".header");
  const $menuItems = $(".header .menu__item");
  const $menuTargets = $(`.header .sub-menu--level1`);
  const $SubMenuTargets = $(`.header .sub-menu--level2`);

  $menuItems.each((i, el) => {
    $(el).on("mouseenter", function () {
      if ($(window).width() >= 1366) {
        $menuItems.removeClass("active");
        $(el).addClass("active");
        $menuTargets.removeClass("active");
        $menuTargets.eq(i).addClass("active");
      }
    });
  });

  $SubMenuTargets.each((_, el) => {
    $(el).on("mouseenter", function () {
      if ($(window).width() >= 1366) {
        $SubMenuTargets.removeClass("active");
        $(el).addClass("active");
      }
    });
  });

  $header.on("mouseenter", function () {
    if ($(window).width() >= 1366) {
      $(this).addClass("opened show");
    }
  });

  $header.on("mouseleave", function () {
    if ($(window).width() >= 1366) {
      $header.removeClass("opened show");
      $menuItems.removeClass("active");
      $menuTargets.removeClass("active");
      $SubMenuTargets.removeClass("active");
    }
  });
};
