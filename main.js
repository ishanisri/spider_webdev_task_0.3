const list=["The fox jumped over the fence","Too many cooks spoil the broth","The early bird catches the worm",
               "A picture is worth a thousand words","Honesty is the best policy"];

var i=Math.floor((Math.random() * 5) + 1);
const s = list[i];
var start=$.now();


$(document).ready(function() {

$("#inputbox").attr("autocomplete","off");
 $("#sentence").text(s);

    
    $("#inputbox").keydown(function(e) {
        const inputText = $("#inputbox").val();
        const length = inputText.length;
        if(length===1)
          { start=$.now();
          }

        const stringMatch = (s.substring(length, 0)).localeCompare(inputText);
      
        if (stringMatch === 0) 
        
            $("#inputbox").css('color', 'green');
        
      else
        {$("#inputbox").css('color', 'red');
          if(!(e.which===8))
          {e.preventDefault();
          }
      }



       

           
        
        
        
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





$("#reset").click(function()
{
   $("#inputbox").val("");
   var i=Math.floor((Math.random() * 5) + 1);
   const s = list[i];
   $("#sentence").text(s);
});