// http://api.jquery.com/

// text() Method - only access the text in the element, HTML safe
$("h1").text();
"jQuery Methods Demo Page"
$("ul").text();
"
            Skittles
            Starburts
            Twux
        "
$("li").text();
"SkittlesStarburtsTwux"
$("h1").text("New Text!!!");
jQuery.fn.init [h1, prevObject: jQuery.fn.init(1)]
$("h1").text();
"New Text!!!"
$("li").text("Sadie is beautiful");
jQuery.fn.init(3) [li, li, li, prevObject: jQuery.fn.init(1)]
$("li").text();
"Sadie is beautifulSadie is beautifulSadie is beautiful"

// html() Mehtod
$("ul").html()
"
            <li>Skittles</li>
            <li>Starburts</li>
            <li>Twux</li>
        "
$("ul").html("<li>I Hacked Your UL!</li><li>Sadie is still beautiful!</li>")
jQuery.fn.init [ul, prevObject: jQuery.fn.init(1)]
$('li').html("<a href='www.google.com'>Click me to go to Google</a>")
jQuery.fn.init(2) [li, li, prevObject: jQuery.fn.init(1)]

// attr() and val() Mehtods
$('img').css("width")
"736px"
$('img').css("width", "200px")
jQuery.fn.init [img.src, prevObject: jQuery.fn.init(1)]
$('img').attr("src", "https://i0.wp.com/www.snowdog.guru/wp-content/uploads/2014/06/husky-aggression.jpg?fit=700%2C357&ssl=1")
jQuery.fn.init [img.src, prevObject: jQuery.fn.init(1)]

    //working with multiple elements
    $('img').css("width", "200px")
    jQuery.fn.init(3) [img.src, img.src, img.src, prevObject: jQuery.fn.init(1)]
    $('img:first-of-type').attr("src", "https://i0.wp.com/www.snowdog.guru/wp-content/uploads/2014/06/husky-aggression.jpg?fit=700%2C357&ssl=1")
    jQuery.fn.init [img.src, prevObject: jQuery.fn.init(1)]
    $('img').last().attr("src", "https://i0.wp.com/www.snowdog.guru/wp-content/uploads/2014/06/husky-aggression.jpg?fit=700%2C357&ssl=1")
    jQuery.fn.init [img.src, prevObject: jQuery.fn.init(3)]
    $('img').attr("src", "https://gfnc1kn6pi-flywheel.netdna-ssl.com/wp-content/uploads/2017/12/white1-1.jpg")
    jQuery.fn.init(3) [img.src, img.src, img.src, prevObject: jQuery.fn.init(1)]

$('input').val();
""
$('input').val();
"Kristofer"
$('input').val("Fonagy");
jQuery.fn.init [input, prevObject: jQuery.fn.init(1)]
    //must assign value to "option", or it will return ""
$("select")
jQuery.fn.init [select, prevObject: jQuery.fn.init(1)]
$("select").val();
"Ostrich"

// addClass(), removeClass(), toggleClass()
$('h1').addClass("correct")
jQuery.fn.init [h1..correct.correct, prevObject: jQuery.fn.init(1)]
$('h1').removeClass("correct")
jQuery.fn.init [h1..correct, prevObject: jQuery.fn.init(1)]
$("li").addClass("wrong");
jQuery.fn.init(3) [li.done.correct.wrong, li.done.correct.wrong, li.done.correct.wrong, prevObject: jQuery.fn.init(1)]
$("li").removeClass("wrong");
jQuery.fn.init(3) [li.done.correct, li.done.correct, li.done.correct, prevObject: jQuery.fn.init(1)]
$("li").removeClass("done");
jQuery.fn.init(3) [li.correct, li.correct, li.correct, prevObject: jQuery.fn.init(1)]
$("li").addClass("correct");
jQuery.fn.init(3) [li.correct, li.correct, li.correct, prevObject: jQuery.fn.init(1)]
$("li").toggleClass("correct");
jQuery.fn.init(3) [li, li, li, prevObject: jQuery.fn.init(1)]
$("li").toggleClass("correct");
jQuery.fn.init(3) [li.correct, li.correct, li.correct, prevObject: jQuery.fn.init(1)]
$("li").toggleClass("correct");
jQuery.fn.init(3) [li, li, li, prevObject: jQuery.fn.init(1)]
$("li").first().toggleClass("done");
jQuery.fn.init [li.done, prevObject: jQuery.fn.init(3)]
$("li").toggleClass("done");
jQuery.fn.init(3) [li, li.done, li.done, prevObject: jQuery.fn.init(1)]