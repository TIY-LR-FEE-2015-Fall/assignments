// Let's look at `eq`
var a = $('.artists__name').eq(1);


// Let's look at `siblings` vs `next`
var b = a.siblings();

var c = a.siblings('.artists__img');

var d = a.next('.artists__img');

// Let's look at `children` vs `find`
var e = $('.artists');

var f = e.find('.artists__name');

var g = e.children('.artists__name');

// Let's look at `parent` vs `parents`
var h = a.parent();

var i = a.parent('.artists');

var j = a.parents();

var k = a.parents('.artists');


// Let's look at `parents` vs `closest`
var l = a.parents('li');

var m = a.parents('span');

var n = a.closest('span');


// Using `a` as a starting point, make the test of "Ben Howard" red
