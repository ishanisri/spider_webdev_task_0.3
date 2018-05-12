const s = "the fox jumped over the fence";
var start=$.now();


$(document).ready(function() {

$("#inputbox").attr("autocomplete","off");

    
    $("#inputbox").keyup(function() {
        const inputText = $("#inputbox").val();
        const length = inputText.length;
        if(length===1)
          { start=$.now();
          }

        const stringMatch = (s.substring(length, 0)).localeCompare(inputText);
      
        if (stringMatch === 0) 
        
            $("#inputbox").css('color', 'green');
        
      else
        $("#inputbox").css('color', 'red');
       

           
        
        
        
      // yes strict equality vs loose equality
      
        if (length === s.length) {
          if(s===inputText)
           { var end = $.now();
            var time = end - start;
            

            var speed = s.length / time;
            $("#inputbox").attr("readonly",true);

            $("p").text("Your speed =" + speed + "characters/sec");
        }}
    });
});