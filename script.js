$(document).ready(function () {
  let cartaExtendida = false;

  $(".container")
    .mouseenter(function () {
      $(".card").stop().animate(
        {
          top: "-90px",
        },
        "slow"
      );
    })
    .mouseleave(function () {
      if (!cartaExtendida) {
        $(".card").stop().animate(
          {
            top: 0,
          },
          "slow"
        );
      }
    });

  $(".card").click(function () {
    $(".card").stop();

    if (cartaExtendida) {
      $(".card").animate(
        {
          top: "-20px",
        },
        "slow",
        function () {
          $(".card").css({
            "z-index": "1",
            "transform": "scale(1)",
          });
          $(".text").removeClass("extendido"); // Remueve la clase extendido

          $(".text").html("Happy</br> Valentine's</br> Day");
        }
      );
    } else {
      $(".card").css({
        "z-index": "11",
        "transform": "scale(1.5)",
      });
      
      $(".text").addClass("extendido"); // Agrega la clase extendido

      $(".text").html("¿Puedo ser</br> tu novio?");

      $(".card").animate(
        {
          top: "-20px",
        },
        "slow"
      );
    }

    cartaExtendida = !cartaExtendida;
  });
});
