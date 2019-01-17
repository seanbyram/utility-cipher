
// Business Logic


/**
 * Caeser Encoding. Shift all alphabetic characters to the right in
 * the alphabet. Non-alphabetic characters remain.
 */
function caesar (n, input) {

  var text = input.split("");   // string to array

  for(let i=0; i<text.length; ++i) {
    let char = parseInt(text[i].charCodeAt());    // convert to ascii value
    n = parseInt(n);
    let final = char;           //assume special char

    if(char>96 && char<123) {   //lowercase
      let x = char + n;         // increment character by N
        if (x>122) {            // if value is past the last letter
          x = (x-123) + 97;
        }
      final = x;
    }
    else if (char>64 && char<91){    //uppercase
      let x = char + n;         // increment character by N
        if (x>90) {             // if value is past the last letter
          x = (x-91) + 65;
        }
      final = x;
    }
    text[i] = String.fromCharCode(final);       // convert ascii back to string
  }

  return text.join("");                   // join all characters back together
};






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
        $("#output").val(output);
        break;

    };




  });



});
