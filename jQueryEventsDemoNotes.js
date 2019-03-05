//jQuery click() Event Method

//prints when item with id 'submit' is clicked
$('#submit').click(function(){
    console.log("another click");
});

//alerts when ANY button is clicked
$('button').click(function(){
    alert("someone clicked a button");
})

$('h1')
jQuery.fn.init [h1, prevObject: jQuery.fn.init(1)]
$('h1').click(function(){
    alert("h1 clicked");
});
jQuery.fn.init [h1, prevObject: jQuery.fn.init(1)]
$('button').click(function(){
	alert("button clicked")
});
jQuery.fn.init(3) [button, button, button, prevObject: jQuery.fn.init(1)]
$('button').click(function(){
	$(this).css("background", "red")
});
jQuery.fn.init(3) [button, button, button, prevObject: jQuery.fn.init(1)]

$('button').click(function(){
    var text = $(this).text();
    console.log("You clicked " + text)
})
jQuery.fn.init(3) [button, button, button, prevObject: jQuery.fn.init(1)]
VM568:3 You clicked Don't Click Me
VM568:3 You clicked Seriously, Don't Click Me
VM568:3 You clicked This is your last warning

//jQuery keypress() Event Method - keypress() is the most common, rather than keydown() or keyup()

$("input[type= 'text'")
jQuery.fn.init [input.text, prevObject: jQuery.fn.init(1)]
$("input[type= 'text'").keypress(function(){
    console.log("You Pressed a Key");
})
jQuery.fn.init [input.text, prevObject: jQuery.fn.init(1)]
5VM708:2 You Pressed a Key

$("input[type= 'text'").keypress(function(event){
    console.log(event);
})
jQuery.fn.init [input.text, prevObject: jQuery.fn.init(1)]
VM708:2 You Pressed a Key
VM753:2 jQuery.Event {originalEvent: KeyboardEvent, type: "keypress", isDefaultPrevented: ƒ, target: input.text, currentTarget: input.text, …}
VM708:2 You Pressed a Key
VM753:2 jQuery.Event {originalEvent: KeyboardEvent, type: "keypress", isDefaultPrevented: ƒ, target: input.text, currentTarget: input.text, …}
VM708:2 You Pressed a Key
VM753:2 
$("input[type= 'text'").keypress(function(event){
    if(event.which === 13){
        alert("you hit enter");
    }
});
jQuery.fn.init [input.text, prevObject: jQuery.fn.init(1)]
VM708:2 You Pressed a Key
VM753:2 jQuery.Event {originalEvent: KeyboardEvent, type: "keypress", isDefaultPrevented: ƒ, target: input.text, currentTarget: input.text, …}

//jQuery on() Event Method
//very similar to addEventListener

//prints when item with id 'submit' is clicked
$('#submit').on(function(){
    console.log("another click");
});

//alerts when ANY button is clicked
$('button').on(function(){
    alert("someone clicked a button");
});

//double click event
$('button').on('dbclick', function(){
    alert("Double Clicked");
});

//drag start event
$('a').on('dragstart', function(){
    console.log("drag started");
});

//keypress event
$('input[type= "text"]').on('keypress', function(){
    alert("key press in an input");
});

$('h1').on("click", function(){
    $(this).css("color", "purple");
});
jQuery.fn.init(3) [h1, h1, h1, prevObject: jQuery.fn.init(1)]
$('h1').css("color")
"rgb(128, 0, 128)"
$($('h1')[1]).css("color")
"rgb(128, 0, 128)"
$($('h1')[2]).css("color")
"rgb(0, 0, 0)"

$("input[type= 'text']").on("keypress", function(){
    console.log("keypressed");
});
jQuery.fn.init [input.text, prevObject: jQuery.fn.init(1)]
6VM1227:2 keypressed

$("button").on("mouseenter", function(){
    console.log("Mouse Enter");
});
jQuery.fn.init(3) [button, button, button, prevObject: jQuery.fn.init(1)]
3VM1321:2 Mouse Enter
$("button").on("mouseenter", function(){
    $(this).css("font-weight", "bold");
});
jQuery.fn.init(3) [button, button, button, prevObject: jQuery.fn.init(1)]
3VM1321:2 Mouse Enter
$("button").on("mouseleave", function(){
    $(this).css("font-weight", "normal");
});
jQuery.fn.init(3) [button, button, button, prevObject: jQuery.fn.init(1)]
11VM1321:2 Mouse Enter

//click() verse on('click')
//- click() only adds listeners for all potential elements
//- on() will add listeners for all potential future elements
