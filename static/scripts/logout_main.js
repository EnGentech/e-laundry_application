$(document).ready(function () {
  $('.head_writeup h3').click(function () {
    $('.head_writeup .confirm').toggle();
  });
  $('.head_writeup .confirm').mouseleave(function () {
    $('.head_writeup .confirm').hide()
  });
});
