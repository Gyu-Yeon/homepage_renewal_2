setInterval(() => {
  setTimeout(() => {
    $(".main-slider").addClass("trans");
  }, 2000);
  setTimeout(() => {
    $(".main-slider").addClass("trans2");
  }, 5000);
  setTimeout(() => {
    $(".main-slider").addClass("trans3");
  }, 8000);
  setTimeout(() => {
    $(".main-slider").addClass("trans4");
  }, 12000);
  setTimeout(() => {
    $(".main-slider").addClass("trans5");
  }, 15000);
  $(".main-slider").removeClass("trans");
  $(".main-slider").removeClass("trans2");
  $(".main-slider").removeClass("trans3");
  $(".main-slider").removeClass("trans4");
  $(".main-slider").removeClass("trans5");
}, 17000);

$(".circle1").click(() => {
  $(".main-slider").addClass("trans5");
  $(".main-slider").removeClass("trans");
  $(".main-slider").removeClass("trans2");
  $(".main-slider").removeClass("trans3");
  $(".main-slider").removeClass("trans4");
});

$(".circle2").click(() => {
  $(".main-slider").addClass("trans");
  $(".main-slider").removeClass("trans5");
  $(".main-slider").removeClass("trans2");
  $(".main-slider").removeClass("trans3");
  $(".main-slider").removeClass("trans4");
});
$(".circle3").click(() => {
  $(".main-slider").addClass("trans2");
  $(".main-slider").removeClass("trans5");
  $(".main-slider").removeClass("trans");
  $(".main-slider").removeClass("trans3");
  $(".main-slider").removeClass("trans4");
});
$(".circle4").click(() => {
  $(".main-slider").addClass("trans3");
  $(".main-slider").removeClass("trans5");
  $(".main-slider").removeClass("trans");
  $(".main-slider").removeClass("trans2");
  $(".main-slider").removeClass("trans4");
});
$(".circle5").click(() => {
  $(".main-slider").addClass("trans4");
  $(".main-slider").removeClass("trans5");
  $(".main-slider").removeClass("trans");
  $(".main-slider").removeClass("trans3");
  $(".main-slider").removeClass("trans2");
});

let techCounter = 0;
let proCounter = 0;
let serCounter = 0;
let comCounter = 0;

// function slidePage(e) {
//   if (e.target === $(".level2")) {
//     if (techCounter == 0) {
//       $(".level2").addClass("trans7");
//       techCounter++;
//     } else if (techCounter == 1) {
//       $(".level2").removeClass("trans7");
//       techCounter--;
//     }
//   }
// }

$(".tech-btn").click(e => {
  slidePage(e);
});

$(".product-btn").click(() => {
  if (proCounter == 0) {
    $(".level3").addClass("trans8");
    proCounter++;
  } else if (proCounter == 1) {
    $(".level3").removeClass("trans8");
    proCounter--;
  }
});

$(".service-btn").click(() => {
  if (serCounter == 0) {
    $(".level4").addClass("trans9");
    serCounter++;
  } else if (serCounter == 1) {
    $(".level4").removeClass("trans9");
    serCounter--;
  }
});

$(".company-btn").click(() => {
  if (comCounter == 0) {
    $(".level5").addClass("trans10");
    comCounter++;
  } else if (comCounter == 1) {
    $(".level5").removeClass("trans10");
    comCounter--;
  }
});
