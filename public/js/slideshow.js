//Using jQuery to go through a nodelist without a loop
var myIndex = 0;
carousel();

function carousel() {
  var x = $(".mySlides");
  // Looping through a nodelist
  x.each(function(i) {
    $(this).hide();
  });
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1;
  }
  x.eq(myIndex - 1).show();
  setTimeout(carousel, 5000);
}