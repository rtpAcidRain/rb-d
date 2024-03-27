// Партнеры
const setPartners = () => {
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
