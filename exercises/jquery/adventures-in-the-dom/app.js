// Let's look at `eq`
var a = $('.artists__name').eq(1); // Miley Cyrus


// Let's look at `siblings` vs `next`
var b = a.siblings(); // `.artists__img` next to Miley

var c = a.siblings('img'); // Empty set, only knows about direct siblings

// If we wanted to get the `img`
a.siblings().find('img');

var d = a.next('.artists__img');

// If we wanted to get the `img` for Prodigy
a.parent().next().find('.artists__img');

// Let's look at `children` vs `find`
var e = $('.artists'); // ol.artists

var f = e.find('.artists__name'); // ["Mark Ronson", "Miley Cyrus", ...]

var g = e.children('.artists__name'); // Returns empty set

// If we know enough about our HTML to get all `.artists__name`
e.children().children('.artists__name');

// Let's look at `parent` vs `parents`
var h = a.parent(); // li containing "Miley Cyrus"

var i = a.parent('.artists'); // Empty Set

// If we know enough about our HTML to get the `.artists`
a.parent().parent('.artists');

var j = a.parents();

var k = a.parents('.artists');

// Let's look at `parents` vs `closest`
var l = a.parents('li'); // Ancestor `li`

var m = a.parents('span'); // Empty set since no ancestor is a span

var n = a.closest('span'); // Span with Miley Cyrus

// For every band name, show the current band when clicked
$('.artists__name').on('click', function() {
  currentlyClicked = $(this);

  // Use timeout to smooth out animations
  window.setTimeout(() => {
    // Show current picture
    currentlyClicked.siblings('.artists__img').fadeIn();
  }, 400);

  // Use timeout to smooth out animations
  window.setTimeout(() => {
    // hide other images?
    z = currentlyClicked.parent()
      .siblings()
      .find('.artists__img')
      .fadeOut();
  }, 0);
});
