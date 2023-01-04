$(function () {
  "use strict";
  $(".mobile__toggle__container").click(function () {
    if ($(".nav").attr("class") === "nav") {
      $(".nav").attr("class", "nav nav-mobile__open");
      $(".mobile__toggle__container").attr("class", "mobile__toggle__container mobile__toggle__container-closeIconVisible");
      $("#mob__menu").attr("class", "nav__mobile__container nav__mobile__container__default nav__mobile__container-visible");
    } else {
      $(".nav").attr("class", "nav");
      $(".mobile__toggle__container").attr("class", "mobile__toggle__container");
      $("#mob__menu").attr("class", "nav__mobile__container nav__mobile__container--default");
    }
  });
});

(function () {
  $.fn.fitHeights = function () {
    var items = $(this);
    function setHeights() {
      var currentTallest = 0;

      items.css({ "min-height": currentTallest }); // unset min-height to get actual new height

      // right now this causes a noticeable shift in height on resize. workarounds?

      items.each(function () {
        if ($(this).height() > currentTallest) {
          currentTallest = $(this).height();
        }
      });

      items.css({ "min-height": currentTallest });
    }

    setHeights();
    $(window).on("resize", setHeights);
    return this;
  };
})(jQuery);

$(window).on("load", function () {
  /* $(groupOfItems).fitHeights(); */
  $(".grid-testimonials p").fitHeights();
});
