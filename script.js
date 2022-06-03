$(document).ready(function () {
  /* CAROUSEL */
  $(".slider").slick({
    infinite: true,
    prevArrow:
      '<button class="slick--arrow slick-prev" type="button"><i class="bx bx-chevron-left" aria-hidden="true"></i></button>',
    nextArrow:
      '<button class="slick--arrow slick-next" type="button"><i class="bx bx-chevron-right" aria-hidden="true"></i></button>',
  });
  $(".slider2").slick({
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    customPaging: function (i) {
      return `<button type="button" role="tab" id="slick-slide-control1${i}"> </button>`;
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 865,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".nav").localScroll();
});

const burgerIcon = document.querySelector(".bx-menu");
const navigation = document.querySelector(".nav");

burgerIcon.addEventListener("click", function () {
  navigation.classList.toggle("show");
});
