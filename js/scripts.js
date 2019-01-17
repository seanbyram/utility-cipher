
// Business Logic








// User Interface Logic

$(document).ready(function() {

  $(".btn:first-child").text($(".dropdown-item:first-child").text());
  $(".btn:first-child").val($(".dropdown-item:first-child").text());

  $("#param1").text("N:");
  for(let i=0; i<26; ++i) {
    $("#drop").append("<option value='" + i.toString() + "'>" + i.toString() + "</option>");
  }

  $(".dropdown-menu a").click(function(){

        $(".btn:first-child").text($(this).text());
        $(".btn:first-child").val($(this).text());

  });





});
