// Выпадающие списки
const openDroplist = () => {
  const $drop = $(".drop-down-list:not(.sub-menu--level2)");
  const $dropHeader = $(".sub-menu--level2");

  $drop.each(function () {
    const $el = $(this);
    const $els = $el.find(".drop-down:not(.disabled)");
    $els.on("click", function (e) {
      e.stopPropagation();
      if ($(this).hasClass("sub-menu--level1") && $(window).width() >= 1366) {
        return false;
      }
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

  $dropHeader.each(function () {
    const $el = $(this);
    $el.on("mouseenter", function () {
      $dropHeader.not($(this)).removeClass("active");
      $(this).addClass("active");
      $el.addClass("opened");
    });
  });

  if ($(".switcher").length > 0) {
    $(".switcher").each(function () {
      const $this = $(this);
      const el = $this.find(".switcher__el");

      $this.find(".switcher__tab").each(function () {
        $(this).on("click", function (e) {
          e.preventDefault();
          const ind = $(this).index();

          $this.find(".switcher__tab").removeClass("active");
          el.removeClass("active");
          $(this).addClass("active");
          el.eq(ind).addClass("active");
        });
      });
    });
  }

  if ($(".select").length > 0) {
    var x, i, j, l, ll, selElmnt, a, b, c;
    /* Look for any elements with the class "custom-select": */
    x = document.getElementsByClassName("select");
    l = x.length;
    for (i = 0; i < l; i++) {
      selElmnt = x[i].getElementsByTagName("select")[0];
      a = x[i].getElementsByClassName("select-title")[0];
      ll = selElmnt.length;
      /* For each element, create a new DIV that will act as the selected item: */
      // a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
      /* For each element, create a new DIV that will contain the option list: */
      b = document.createElement("DIV");
      b.setAttribute("class", "select-items select-hide");
      for (j = 0; j < ll; j++) {
        /* For each option in the original select element,
    create a new DIV that will act as an option item: */
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function (e) {
          /* When an item is clicked, update the original select box,
        and the selected item: */
          var y, i, k, s, h, sl, yl;
          s = this.parentNode.parentNode.getElementsByTagName("select")[0];
          sl = s.length;
          h = this.parentNode.previousSibling;
          for (i = 0; i < sl; i++) {
            if (s.options[i].innerHTML == this.innerHTML) {
              s.selectedIndex = i;
              h.innerHTML = this.innerHTML;
              y = this.parentNode.getElementsByClassName("same-as-selected");
              yl = y.length;
              for (k = 0; k < yl; k++) {
                y[k].removeAttribute("class");
              }
              this.setAttribute("class", "same-as-selected");
              break;
            }
          }
          h.click();
        });
        b.appendChild(c);
      }
      x[i].appendChild(b);
      //   a.addEventListener("click", function (e) {
      //     /* When the select box is clicked, close any other select boxes,
      // and open/close the current select box: */
      //     e.stopPropagation();
      //     closeAllSelect(this);
      //     this.nextSibling.classList.toggle("select-hide");
      //     this.classList.toggle("select-arrow-active");
      //   });

      $(a).on("click", function (e) {
        e.stopPropagation();
        closeAllSelect(this);

        $(this).next().toggleClass("select-hide");
        $(this).toggleClass("select-arrow-active");
      });
    }

    function closeAllSelect(elmnt) {
      /* A function that will close all select boxes in the document,
  except the current select box: */
      var x,
        y,
        i,
        xl,
        yl,
        arrNo = [];
      x = document.getElementsByClassName("select-items");
      y = document.getElementsByClassName("select-title");
      xl = x.length;
      yl = y.length;
      for (i = 0; i < yl; i++) {
        if (elmnt == y[i]) {
          arrNo.push(i);
        } else {
          y[i].classList.remove("select-arrow-active");
        }
      }
      for (i = 0; i < xl; i++) {
        if (arrNo.indexOf(i)) {
          x[i].classList.add("select-hide");
        }
      }
    }

    /* If the user clicks anywhere outside the select box,
then close all select boxes: */
    document.addEventListener("click", closeAllSelect);
  }
};
