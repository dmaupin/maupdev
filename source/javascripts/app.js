// nav links - scroll to:

$(document).ready(function() {
  $("#link-projects").click(function() {
    $('html, body').animate({
        scrollTop: $("#projects").offset().top-150
    }, 1000);
  });
}); // projects link

$(document).ready(function() {
  $("#link-partners").click(function() {
    $('html, body').animate({
        scrollTop: $("#partners").offset().top-150
    }, 1000);
  });
}); // partners link

$(document).ready(function() {
  $("#link-about").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top-150
    }, 1000);
  });
}); // about link

$(document).ready(function() {
  $("#link-contact").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top-150
    }, 1000);
  });
}); // contact link

// end nav links

$(document).ready(function() {
  $("#arrow").click(function() {
    $('html, body').animate({
        scrollTop: $("#projects").offset().top-150
    }, 1000);
  });
}); // projects arrow to projects
