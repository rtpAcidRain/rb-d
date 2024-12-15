let timeModal;

// Закрытие модалок
function сloseModals(modal) {
  clearTimeout(timeModal);
  $(modal).removeClass("opened");
  clearTimeout(timeModal);
  timeModal = setTimeout(() => {
    $(modal).removeClass("flex");
  }, 400);
}

const setModalsClose = (modal) => {
  $(modal).on("click", function () {
    сloseModals(modal);
  });

  $(modal)
    .find(".modal__container")
    .on("click", function (e) {
      e.stopPropagation();
    });

  $(modal)
    .find(".modal__close")
    .on("click", function (e) {
      e.preventDefault();
      сloseModals(modal);
    });
};

// Открытие модалок

const openModal = (modal, text) => {
  $(modal).addClass("flex");
  clearTimeout(timeModal);
  if (text) {
    $(modal).find(".form_insert-text").html();
    $(modal).find(".form_insert-text").html(text);
  }
  timeModal = setTimeout(() => {
    $(modal).addClass("opened");
  }, 100);
};

// Модалки

const setModal = () => {
  $("[data-modal]").each((_, el) => {
    const modal = $(el).data("modal");
    $(el).on("click", function (e) {
      e.preventDefault();
      openModal(modal);
    });

    setModalsClose(modal);
  });
};
