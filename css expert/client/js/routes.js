$("#sign-up").submit(function(){
  let newUserDetails = {
    username: $("#username-input").val() + " " $("#lastName-input").val(),
    email: $("#email-input").val(),
    password: $("#password-input").val(),
    projects: {}
  }
  let json = JSON.stringify(newUserDetails);
  $.ajax({
    url:"/",
    type:"POST",
    dataType: 'json',
    data:json
  });
})
