//fadeOut/fadeIn

// $("button").on("click", function(){
//     $('div').fadeOut(1000, function(){
//         $(this).remove();
//     });
// })


//fadeOut changes the element's display to "none" in the given amount of time
//With fadeOut, the content is simply hidden, unless you use the remove() function.
//That will remove the element completely from the HTML
//If you want to fade in, set the style display as none in the CSS

//fadeToggle
// $("button").on("click", function(){
//     $('div').fadeToggle(1000);
// })

//Siding effects - slideDown() & slideUp()
// $("button").on("click", function(){
//     $('div').slideUp();
// });

//slideDown() & slideUp() do the same as fadeOut/In, but changes the height of the element
$("button").on("click", function(){
    $('div').slideToggle(1000, function(){
        console.log("Slide Done");
    });
});
