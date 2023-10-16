// Партнеры
const setPartners = () => {
  if ($(".partner-list__switch").length > 0) {
    const $switcher = $(".partner-list__switch");

    $switcher.each((_, el) => {
      $(el).click(function (e) {
        e.preventDefault();
        const id = $(this).data("drop");
        $(".partner-list__drop-down__item")
          .not($(`#${id}`))
          .removeClass("opened");
        $(`[data-drop]`).removeClass("current");
        if ($(`#${id}`).hasClass("opened")) {
          $(`#${id}`).removeClass("opened");
          $(`[data-drop='${id}']`).removeClass("current");
        } else {
          $(`#${id}`).addClass("opened");
          $(`[data-drop='${id}']`).addClass("current");
        }
      });
    });
  }

  if ($(".partner-list__switchers").length > 0) {
    $(".partner-list__switchers").each((_, el) => {
      const $first = $(el).children(".wrap").first();
      const $last = $(el).children(".wrap").last();

      function setClassToWrapper(event) {
        if ($(event.target).is(":first-child")) {
          $(el).addClass("left");
        } else {
          $(el).addClass("right");
        }
      }

      function removeGradient(event) {
        if (!$(event.target).hasClass("current")) {
          if ($(event.target).is(":first-child")) {
            $(el).removeClass("left");
          } else {
            $(el).removeClass("right");
          }
        }
      }

      $first.on("mouseenter", setClassToWrapper);
      $first.on("mouseleave", removeGradient);
      $last.on("mouseenter", setClassToWrapper);
      $last.on("mouseleave", removeGradient);

      $(el)
        .children(".wrap")
        .on("click", function () {
          if ($(this).is(":first-child")) {
            $(el).removeClass("right");
          } else if ($(this).is(":last-child")) {
            $(el).removeClass("left");
          } else {
            $(el).removeClass("right");
            $(el).removeClass("left");
          }
        });
    });
  }

  $(".button-more").each((i, el) => {
    $(el).on("click", function (e) {
      e.preventDefault();
      $(el).prev().toggleClass("opened");
    });
  });
};
