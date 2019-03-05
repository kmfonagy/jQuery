$
ƒ ( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery…
$("h1")
jQuery.fn.init [h1, prevObject: jQuery.fn.init(1)]
$("body")
jQuery.fn.init [body, prevObject: jQuery.fn.init(1)]
$("a")
jQuery.fn.init [a, prevObject: jQuery.fn.init(1)]
$("li a")
jQuery.fn.init [a, prevObject: jQuery.fn.init(1)]
$("ul li a")
jQuery.fn.init [a, prevObject: jQuery.fn.init(1)]

//after adding an additional a href
$("a")
jQuery.fn.init(2) [a, a, prevObject: jQuery.fn.init(1)]0: a1: aaccessKey: ""assignedSlot: nullattributeStyleMap: StylePropertyMap {size: 0}attributes: NamedNodeMap {0: href, href: href, length: 1}autocapitalize: ""baseURI: "file:///E:/Admin/Documents/Class%20Site/jQuery/jQueryDemo.html"charset: ""childElementCount: 0childNodes: NodeList [text]children: HTMLCollection []classList: DOMTokenList [value: ""]className: ""clientHeight: 0clientLeft: 0clientTop: 0clientWidth: 0contentEditable: "inherit"coords: ""dataset: DOMStringMap {}dir: ""download: ""draggable: truefirstChild: textfirstElementChild: nullhash: ""hidden: falsehost: ""hostname: ""href: "file:///E:/Admin/Documents/Class%20Site/jQuery/www.google.com"hreflang: ""id: ""innerHTML: "link"innerText: "link"inputMode: ""isConnected: trueisContentEditable: falselang: ""lastChild: textlastElementChild: nulllocalName: "a"name: ""namespaceURI: "http://www.w3.org/1999/xhtml"nextElementSibling: nullnextSibling: textnodeName: "A"nodeType: 1nodeValue: nullnonce: ""offsetHeight: 17offsetLeft: 8offsetParent: bodyoffsetTop: 168offsetWidth: 25onabort: nullonauxclick: nullonbeforecopy: nullonbeforecut: nullonbeforepaste: nullonblur: nulloncancel: nulloncanplay: nulloncanplaythrough: nullonchange: nullonclick: nullonclose: nulloncontextmenu: nulloncopy: nulloncuechange: nulloncut: nullondblclick: nullondrag: nullondragend: nullondragenter: nullondragleave: nullondragover: nullondragstart: nullondrop: nullondurationchange: nullonemptied: nullonended: nullonerror: nullonfocus: nullonfullscreenchange: nullonfullscreenerror: nullongotpointercapture: nulloninput: nulloninvalid: nullonkeydown: nullonkeypress: nullonkeyup: nullonload: nullonloadeddata: nullonloadedmetadata: nullonloadstart: nullonlostpointercapture: nullonmousedown: nullonmouseenter: nullonmouseleave: nullonmousemove: nullonmouseout: nullonmouseover: nullonmouseup: nullonmousewheel: nullonpaste: nullonpause: nullonplay: nullonplaying: nullonpointercancel: nullonpointerdown: nullonpointerenter: nullonpointerleave: nullonpointermove: nullonpointerout: nullonpointerover: nullonpointerup: nullonprogress: nullonratechange: nullonreset: nullonresize: nullonscroll: nullonsearch: nullonseeked: nullonseeking: nullonselect: nullonselectionchange: nullonselectstart: nullonstalled: nullonsubmit: nullonsuspend: nullontimeupdate: nullontoggle: nullonvolumechange: nullonwaiting: nullonwebkitfullscreenchange: nullonwebkitfullscreenerror: nullonwheel: nullorigin: "file://"outerHTML: "<a href="www.google.com">link</a>"outerText: "link"ownerDocument: documentparentElement: bodyparentNode: bodypassword: ""pathname: "/E:/Admin/Documents/Class%20Site/jQuery/www.google.com"ping: ""port: ""prefix: nullpreviousElementSibling: ulpreviousSibling: textprotocol: "file:"referrerPolicy: ""rel: ""relList: DOMTokenList [value: ""]rev: ""scrollHeight: 0scrollLeft: 0scrollTop: 0scrollWidth: 0search: ""shadowRoot: nullshape: ""slot: ""spellcheck: truestyle: CSSStyleDeclaration {alignContent: "", alignItems: "", alignSelf: "", alignmentBaseline: "", all: "", …}tabIndex: 0tagName: "A"target: ""text: "link"textContent: "link"title: ""translate: truetype: ""username: ""__proto__: HTMLAnchorElementlength: 2prevObject: jQuery.fn.init [document]0: documentlength: 1__proto__: Object(0)__proto__: Object(0)
$("li a")
jQuery.fn.init [a, prevObject: jQuery.fn.init(1)]
$("ul li a")
jQuery.fn.init [a, prevObject: jQuery.fn.init(1)]
$("#test")
jQuery.fn.init [li#test]


// .css(proprerty, value)
$("h1").css("color", "yellow") //more powerful & can do more
jQuery.fn.init [h1, prevObject: jQuery.fn.init(1)]
document.querySelector("h1").style.color = "orange";
"orange"
var styles = {
    color: "red",
    background: "green",
    border: "2px solid purple"
}
undefined
styles
{color: "red", background: "green", border: "2px solid purple"}
$("h1").css(styles)
jQuery.fn.init [h1, prevObject: jQuery.fn.init(1)] //without jQuery it would require 3 lines to code

$("li")
jQuery.fn.init(4) [li, li, li, li#test, prevObject: jQuery.fn.init(1)]
$("li").css("color", "blue")
jQuery.fn.init(4) [li, li, li, li#test, prevObject: jQuery.fn.init(1)]
//without jQuery
var lis = document.querySelectorAll("li");
undefined
for(var i = 0; i < lis.length; i++){
    lis[i].style.color = "green";
}
"green"
$("a").css("font-size", "40px")
jQuery.fn.init(2) [a, a, prevObject: jQuery.fn.init(1)]
$("li").css({
    fontSize: "10px",
    border: "3px dashed purple",
    background: "rgb(89, 45, 20, 0.5)"
})
jQuery.fn.init(4) [li, li, li, li#test, prevObject: jQuery.fn.init(1)]

//$ always returns as a list, so it will automatically loop over