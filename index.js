function isEmail(email) {
  var check = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (check.test(email)) {
    return true;
  } else {
    return false;
  }
}

$(".btn").click(function() {
  var email_input = $(".email-input");
  var error = $(".error");
  if ((email_input.val() === "") || (isEmail(email_input.val()) == false)) {
    error.css("display", "block");
    email_input.css("border", "1.8px solid hsl(0, 93%, 68%)");
  } else {
    error.css("display", "none");
  }
});
