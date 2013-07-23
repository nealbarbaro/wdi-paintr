// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(document).ready(function() {
  var add_color = function() {
    var box = $('<div>');
    box.addClass('box');

    var color = $('#color').val();
    box.css('background-color', color);

    $('#colors').prepend(box);
    $('#color').val('').focus();
  };


  $('#add_color').on('click', add_color);
})