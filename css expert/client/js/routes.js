$("#sign-up").submit(function(){
  let newUserDetails = {
    username: $("#username-input").val() + " " + $("#lastName-input").val(),
    email: $("#email-input").val(),
    password: $("#password-input").val(),
    projects: {}
  }
  let json = JSON.stringify(newUserDetails);
  $.ajax({
    url:"/signUp",
    type:"POST",
    dataType: 'json',
    data:json
  });
})

$("#sign-in").submit(function() {
  let usersDetails = {
    username: $("#usernameLogin").val(),
    password: $("#passwordLogin").val()
  }
  let json = JSON.stringify(usersDetails)
  $.ajax({
    url:"/signIn",
    type:"POST",
    dataType: 'json',
    data:json,
    success: function(data) {
      if (data.bool) {
        $("body").html("ACC FOUND!")
      } else {
        $("body").html("ACC NOT FOUND!")
      }
    }
  });
})
