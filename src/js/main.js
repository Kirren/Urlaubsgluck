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
});