//Problem: user when clicking on image goes to a dead end
//Solution: create an overlay with large image - lightbox

var $overlay = $('<div id="overlay"></div>');
var $image = $('<img>');
var $caption = $('<p></p>');

// An image to overlay
$overlay.append($image);
// A caption
$overlay.append($caption);

// Add an overlay    
$('body').append($overlay);

//Capture the click event on a link to an image
$('#imageGallery a').click(function(event){
  event.preventDefault();
  var imageLocation = $(this).attr('href');
  //Update overlay with the image linked in the link
  $image.attr('src', imageLocation);
  //Show overlay
  $overlay.show();
  //Get child's alt attribute and set caption
  var captionText = $(this).children('img').attr('alt');
  $caption.text(captionText); 
});
  
//3. When overlay is clicked 
  //3.1. Hide the overlay
$overlay.click(function(){
  $overlay.hide();
});
  