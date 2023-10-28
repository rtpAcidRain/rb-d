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
  // setForms();
  if ($(".swiper").length > 0) {
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
});
