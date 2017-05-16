// Third Party

//= ../../bower_components/jquery/dist/jquery.min.js
//= ../../bower_components/bootstrap-sass/assets/javascripts/bootstrap.min.js


// Custom JS

$(function(){
  $('.idea-container').hover(
    function() {
      //$( this ).children( ".idea-preview" ).css("background-blend-mode", "initial");
      $( this ).children( ".idea-preview" ).find("div").animate({
        bottom: "15px"
      }, 500)

    }, function() {
      //$( this ).children( ".idea-preview" ).css("background-blend-mode", "darken");
      $( this ).children( ".idea-preview" ).find("div").animate({
        bottom: "-30px"
      }, 500)
    }
  );

  $('.carousel-control').hover(
    function(){
      $( this ).animate({opacity:'2.0'},100);
    },
    function() {
      $( this ).animate({opacity:'initial'},100);
  });
});

