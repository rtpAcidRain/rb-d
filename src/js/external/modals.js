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

const openModal = (modal) => {
  $(modal).addClass("flex");
  console.log(modal);
  clearTimeout(timeModal);
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
