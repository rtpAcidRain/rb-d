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

function loadScript(url, callback) {
  var head = document.head;
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = url;

  script.onreadystatechange = callback;
  script.onload = callback;

  head.appendChild(script);
}

// Инициализация скриптов
window.addEventListener("DOMContentLoaded", () => {
  setDocHeight();
  setModalsClose("#formSuccess");
  $(window).on("resize", function () {
    setDocHeight();
  });
  openDroplist();
  setHeaderAnim();
  setForms();
  if ($(".swiper").length > 0) {
    loadScript(
      "https://rb-d.ru/bitrix/templates/rbd/js/swiper.js",
      setSwipers()
    );
  }
  setPartners();
  setAnchors();
  setBurgerMenu();
  setModal();
});
