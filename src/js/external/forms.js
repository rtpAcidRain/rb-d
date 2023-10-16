// FORMS
function setForms() {
  if ($(".input").length > 0) {
    function inputOnClick(el) {
      el.addClass("active");
    }

    function setInputs(el) {
      if (el.find(".input__item").val().trim().length < 1) {
        el.removeClass("active");
      } else {
        inputOnClick(el);
      }
    }

    let inp = $(".input");

    inp.each(function () {
      const $this = $(this);
      setInputs($this);

      $this.find(".input__item").on("focus", function () {
        inputOnClick($this);
      });

      $this.find(".input__item").on("blur", function () {
        setInputs($this);
      });
    });

    // if ($(".input").hasClass("input--phone")) {
    //   let sm = new Inputmask({
    //     mask: "+7(999)999-99-99",
    //     showMaskOnHover: false,
    //   });
    //   sm.mask($(".input.input--phone").children("input"));
    // }
    if ($(".input").hasClass("input--phone")) {
      let sm = new Inputmask({
        mask: "+7(999)999-99-99",
        showMaskOnHover: false,
      });
      sm.mask($(".input.input--phone").children("input"));
    }
  }

  if ($("textarea").length > 0) {
    const textareas = $("textarea");

    textareas.each(function () {
      $(this).on("input", function () {
        if ($(this).val().trim().length < 1) {
          $(this).css(
            "height",
            "calc(calc(var(--scale-rem) * 0.95) + var(--plusheight))"
          );
        } else {
          $(this).css("height", $(this).get(0).scrollHeight + "px");
        }
      });
    });
  }

  if ($(".check__container").length > 0) {
    const checks = $(".check__container");

    checks.each(function () {
      const $this = $(this);
      $this.find('[type="submit"]').attr("disabled", "true");
      $this.find('[type="checkbox"]').removeAttr("checked");

      $this.find('[type="checkbox"]').change(function () {
        if ($(this).is(":checked")) {
          $this.find('[type="submit"]').removeAttr("disabled");
        } else {
          $this.find('[type="submit"]').attr("disabled", "true");
        }
      });
    });
  }

  //   function setValidationForms(el) {
  //     const EMAIL_REGEXP =
  //       /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

  //     const PHONE_REGEXP = /\+\d{1}\(\d{3}\)\d{3}-\d{2}-\d{2}/g;

  //     let check = true;

  //     function isEmailValid(value) {
  //       if (EMAIL_REGEXP.test(value)) {
  //         check = true;
  //       } else {
  //         check = false;
  //       }
  //     }

  //     function isPhoneValid(value) {
  //       if (PHONE_REGEXP.test(value)) {
  //         check = true;
  //       } else {
  //         check = false;
  //       }
  //     }

  //     if (
  //       el.find(".input--name").length > 0 &&
  //       el.find(".input--name ").find("input").val() < 3
  //     ) {
  //       el.find(".input").removeClass("checked");
  //       el.find(".input--name").addClass("error");
  //       el.find(".input--name")
  //         .find("input")
  //         .after(
  //           "<span class='absolute text-error text-errorColor' style='top: calc(100% + 6px); right: 0; '>Это поле нужно заполнить</span>"
  //         );
  //     } else {
  //       if (el.find(".input--name").hasClass("error")) {
  //         el.find(".input--name").addClass("checked");
  //         el.find(".input--name").removeClass("error");
  //         el.find(".input--name").find(".text-error").remove();
  //       }
  //     }

  //     if (
  //       el.find(".input--company").length > 0 &&
  //       el.find(".input--company ").find("input").val() < 3
  //     ) {
  //       el.find(".input").removeClass("checked");
  //       el.find(".input--company").addClass("error");
  //       el.find(".input--company")
  //         .find("input")
  //         .after(
  //           "<span class='absolute text-error text-errorColor' style='top: calc(100% + 6px); right: 0; '>Это поле нужно заполнить</span>"
  //         );
  //     } else {
  //       if (el.find(".input--company").hasClass("error")) {
  //         el.find(".input--company").removeClass("error");
  //         el.find(".input--company").addClass("checked");
  //         el.find(".input--company").find(".text-error").remove();
  //       }
  //     }

  //     if (el.find(".input--phone").length > 0) {
  //       isPhoneValid(el.find(".input--phone").find("input").val());
  //       if (!check) {
  //         el.find(".input").removeClass("checked");

  //         el.find(".input--phone").addClass("error");
  //         el.find(".input--phone")
  //           .find("input")
  //           .after(
  //             "<span class='absolute text-error text-errorColor' style='top: calc(100% + 6px); right: 0; '>Это поле нужно заполнить</span>"
  //           );
  //       } else {
  //         if (el.find(".input--phone").hasClass("error")) {
  //           el.find(".input--phone").removeClass("error");
  //           el.find(".input--phone").addClass("checked");
  //           el.find(".input--phone").find(".text-error").remove();
  //         }
  //       }
  //     }

  //     if (el.find(".input--email").length > 0) {
  //       isEmailValid(el.find(".input--email").find("input").val());
  //       if (!check) {
  //         el.find(".input").removeClass("checked");
  //         el.find(".input--email").addClass("error");
  //         el.find(".input--email")
  //           .find("input")
  //           .after(
  //             "<span class='absolute text-error text-errorColor' style='top: calc(100% + 6px); right: 0; '>Это поле нужно заполнить</span>"
  //           );
  //       } else {
  //         if (el.find(".input--email").hasClass("error")) {
  //           el.find(".input--email").addClass("checked");
  //           el.find(".input--email").removeClass("error");
  //           el.find(".input--email").find(".text-error").remove();
  //         }
  //       }
  //     }

  //     if (el.find(".input").hasClass("error")) {
  //       return false;
  //     } else {
  //       return true;
  //     }
  //   }

  //   if ($("form").length > 0) {
  //     $("form").on("submit", function (e) {
  //       e.preventDefault();
  //       // if (!setValidationForms($(this))) {
  //       //   return false;
  //       // }
  //       openModal("#formSuccess");
  //     });
  //   }
}
