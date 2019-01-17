
// Business Logic








// User Interface Logic

$(document).ready(function() {

  // Initialize first dropdown cipher params
  $(".btn:first-child").text($(".dropdown-item:first-child").text());
  $(".btn:first-child").val($(".dropdown-item:first-child").text());

  $("#param1").text("N:");
  for(let i=0; i<26; ++i) {
    $("#drop").append("<option value='" + i.toString() + "'>" + i.toString() + "</option>");
  }

  // Cipher select click event
  $(".dropdown-menu a").click(function(){

        $(".btn:first-child").text($(this).text());
        $(".btn:first-child").val($(this).text());

  });

  // Encode click event
  $("#encode").click(function(){

    //console.log($("#input").val());

    var input = $("#input").val();
    var output = '';

    switch ($("#dropdownMenuButton").val()) {
      case "Caesarian Shift":
        var n = $("#drop").val();
        output = caesar (n, input);
        $("#output").val();
        break;

    }




  });



});
