// Хедер

const setHeaderAnim = () => {
  const $header = $(".header");
  const $menuItems = $(".header .open-menu");
  const $menuTargets = $(`.header .sub-menu--level1:not(.disabled)`);
  const $SubMenuTargets = $(`.header .sub-menu--level2`);

  function openMenu(el, i) {
    $menuItems.removeClass("active");
    $(el).addClass("active");
    $menuTargets.removeClass("active");
    $menuTargets.eq(i).addClass("active");
    $header.addClass("opened show");
  }

  function closeMenu() {
    $header.removeClass("opened show");
    $menuItems.removeClass("active");
    $menuTargets.removeClass("active");
    $SubMenuTargets.removeClass("active");
  }

  $(".sub-menu .icon-cross").on("click", function () {
    closeMenu();
  });

  $menuItems.each((i, el) => {
    $(el).on("mouseenter", function (e) {
      e.preventDefault();
      // if (!$(el).hasClass("active")) {
      openMenu(el, i);
      // } else {
      //   if ($(window).width() >= 1366) {
      //     closeMenu();
      //   }
      // }
    });
  });

  $(".header-menu").on("click", function () {
    closeMenu();
  });
  $(".header-menu > div").on("click", function (e) {
    e.stopPropagation();
  });
};
