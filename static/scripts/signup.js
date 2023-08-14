$(document).ready(function () {
  $('#confirm_pass').on({
    input: function () {
      comparePasswords();
    },
    mouseleave: function () {
      comparePasswords();
    }
  });

  function comparePasswords () {
    const pass_val = $('#password').val();
    const compare_pass = $('#confirm_pass').val();

    if (pass_val !== compare_pass) {
      $('#confirm_pass').css('border-color', 'red');
      $('#register').prop('disabled', true);
      $('#register').css('background-color', 'red').css('color', 'white');
      $('#register').val('Check password');
    } else {
      $('#confirm_pass').css('border-color', '');
      $('#register').prop('disabled', false);
      $('#register').css('background-color', '').css('color', '');
      $('#register').css('background-color', '');
      $('#register').val('Submit');
    }
  }
});
