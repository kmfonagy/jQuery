//Select the divs and give them a purple background
$("div").css("background", "purple")

//Select the divs with class="highlight" and make witdh 200px
$(".highlight").css("width", "200px")

//Select the div with the id="third" and give orange border
$("#third").css("border", "2px solid orange")

//BONUS: Select the first div only and make font color pink
$($("div")[0]).css("color", "pink")
//or
$("div:first-of-type").css("color", "pink")
//or, though slower
$("div:first").css("color", "pink")