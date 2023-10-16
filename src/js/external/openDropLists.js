// Выпадающие списки
const openDroplist = () => {
  const $drop = $(".drop-down-list");

  $drop.each(function () {
    const $el = $(this);
    const $els = $el.children(".drop-down:not(.disabled)");

    $els.on("click", function (e) {
      e.stopPropagation();
      $els.not($(this)).removeClass("active");
      if (!$(this).hasClass("active")) {
        $(this).addClass("active");
        $el.addClass("opened");
      } else {
        $(this).removeClass("active");
        $el.removeClass("opened");
      }
    });

    $els.find("a").on("click", function (e) {
      if (
        !$(this).hasClass("drop-down") &&
        !$(this).parent().hasClass("drop-down")
      ) {
        e.stopPropagation();
      }
    });
  });
};
