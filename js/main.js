/* console.log('Hello World !'); */
$(document).ready(function() {
    redimensionnement();
});
/* Menu mobile */
$(".menu-burger-open").click(function() {
    $(".navigation").addClass('active');
    return false;
});
$(".menu-burger-close").click(function() {
    $(".navigation").removeClass('active');
    return false;
});
/* Menu */
$(".navigation a").click(function(){
    var thisId = $(this).attr("href");
    var idOffset = $(thisId).offset().top;

    $("html,body").animate({
        scrollTop : idOffset
    });
    return false;
});
/* background transition */
var boolean = true;
function bgFade () {
    if (boolean) {
        $(".bg-1").animate({
            "opacity" : "0"
        }, 3000);
        boolean = false;
    }
    else{
        $(".bg-1").animate({
            "opacity" : "1"
        }, 3000);
        boolean = true;
    }
}
setInterval(bgFade, 10000);

/* Projects Grid */

// Fonction exécutée au redimensionnement
function redimensionnement() {

  var totalHeight = 0;
  $(".thumb").each(function(){
      totalHeight = totalHeight + $(this).height();
  });

  if("matchMedia" in window) { // Détection
    if(window.matchMedia("(min-width:801px)").matches) {
        $(".all-projects .wrapper").css("height",""+(totalHeight/3+1)+"px");
    }
    else if(window.matchMedia("(min-width:601px)").matches){
        $(".all-projects .wrapper").css("height",""+(totalHeight/2)+"px");
    }
    else {
        $(".all-projects .wrapper").css("height",""+totalHeight+"px");
    }
  }
}
// On lie l'événement resize à la fonction
window.addEventListener('resize', redimensionnement, false);
