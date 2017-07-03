$("#down").click(function() {
  $("#frontPageNav").show()
  $(this).hide()
})

$("form").submit(function(e){
  e.preventDefault()
})

$("#up").click(function() {
  $("#frontPageNav").hide()
  $("#down").show()
})
