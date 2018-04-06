function opener() {
  $(".ee").click(function () {
    $(".pikachu").fadeIn(10).delay(2000).fadeOut(1000);
    setTimeout(function(){window.open("easter_egg_pokemon.html", "popupWindow", "width=355, height=512"); }, 500);
  // window.open("easter_egg_pokemon.html", "popupWindow", "width=355, height=512");

  });
}

$(document).ready(opener);
