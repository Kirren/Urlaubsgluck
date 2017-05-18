// Third Party

//= ../../bower_components/jquery/dist/jquery.min.js
//= ../../bower_components/bootstrap-sass/assets/javascripts/bootstrap.min.js


// Custom JS

$(function(){
  $('.idea-container').hover(
    function() {
      $( this ).animate( {opacity: 0.75}, 500 );
    }, function() {
      $( this ).animate( {opacity: 1}, 200 );
    }
  );
});

