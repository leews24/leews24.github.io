// window.alert("sometext");
var audioElement = document.createElement('audio');
audioElement.setAttribute('src', 'res/bgm.mp3');
function myFunction() {
    // alert("Hello\nHow are you?");
    $(".gui-upper").toggle();
    $(".gui-mid").toggle();
    $(".gui-lower").toggle();
    return audioElement.paused ? audioElement.play() : audioElement.pause();
}

function testfunc() {
  alert('test')
}

$(".pokemonmenu").click(function(){
  $("#gui-message").text("You have no more Pokemon left!");
})

$(".item").click(function(){
  $("#gui-message").text("You have no items!");
})

$(".run").click(function(){
  $("#gui-message").text("Cannot run away!");
})

$(".fight").click(function(){
  $(".pokemon-menu").hide();
  $(".attacks").show();
})

function attackfunc(){
  audioElement.play()
  var hitBtn = $('button.attacks'),
      damage = 0
      // reset = $('button.reset'),
      hBar = $('.pikachu-info'),
      bar = hBar.find('.bar'),
      hit = hBar.find('.hit');
  $("#scratch").click(function(){
    damage = 10;
    attackmsg = "Torchic used scratch!"
    effectmsg="It was not very effective..."
    $(".attacks").hide();
  })
  $("#splash").click(function(){
    damage = 0;
    attackmsg = "Torchic used splash!"
    effectmsg="Nothing happened..."
    $(".attacks").hide();
  })
  $("#ember").click(function(){
    damage = 20;
    attackmsg = "Torchic used ember!"
    effectmsg="It was super effective!"
    $(".attacks").hide();
  })

  hitBtn.on("click", function(){
    var total = hBar.data('total'),
        value = hBar.data('value');

    $("#gui-message").text(attackmsg)

    var newValue = value - damage;
    var barWidth = (newValue / total) * 100;
    var hitWidth = (damage / value) * 100 + "%";
    hit.css('width', hitWidth);
    hBar.data('value', newValue);
    $("#pikachu-health").text(newValue);
    setTimeout(function(){$("#gui-message").text(effectmsg); }, 1500);

    if(newValue <= 0){
      setTimeout(function(){$("#gui-message").text("Torchic won the battle!"); }, 2200);
      return;
    }

    pmove = Math.floor((Math.random() * 3) + 1);
    if (pmove == 1){
      // alert("1");
      pmovename = "Pikchu used Thunderbolt.";
      pdamage = 35;
      peffectmsg = "It was super effective!";
    } else if (pmove == 2){
      // alert("2");
      pmovename = "Pikchu used Tackle.";
      pdamage = 5;
      peffectmsg = "It was not very effective...";
    } else if (pmove == 3){
      // alert("3");
      pmovename = "Pikchu used ThunderShock.";
      pdamage = 20;
      peffectmsg = "Pikchu used ThunderShock.";
    }

    var hitBtn = $('button.attacks'),
        phBar = $('.torchic-info'),
        pbar = phBar.find('.bar'),
        phit = phBar.find('.hit');

    setTimeout(function(){
    $("#gui-message").text(pmovename);

    var ptotal = phBar.data('total'),
        pvalue = phBar.data('value');
    setTimeout(function(){$("#gui-message").text(peffectmsg); }, 1500);
    var pnewValue = pvalue - pdamage;
    var pbarWidth = (pnewValue / ptotal) * 100;
    var phitWidth = (pdamage / pvalue) * 100 + "%";
    phit.css('width', phitWidth);
    phBar.data('value', pnewValue);
    $("#torchic-health").text(pnewValue);

    // setTimeout(function(){$("#gui-message").text(effectmsg); }, 1500);
    if(pnewValue <= 0){
      setTimeout(function(){$("#gui-message").text("Torchic lost the battle! Please close the window and try again."); }, 2200);
      return; return;
    } else {
      setTimeout(function(){
      $("#gui-message").text("What should torchic do?")
      $(".pokemon-menu").show()
    $(".attacks").hide()}, 3300);
    }

    }, 4000);
    // if(pnewValue < 0){
    //   setTimeout(function(){$("#gui-message").text("Torchic lost the battle!"); }, 2200);
    //   return;
    // }
    // phit.css('width', hitWidth);
    // phBar.data('value', newValue);

    // hitBtn.on("click", function(){



    // setTimeout(function(){$("#gui-message").text(pmovename); }, 3000);
    // IMPLEMENT PIKCHU ATTACK TORCHI HP BAR




});}


$(document).ready(attackfunc());
