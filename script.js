window.addEventListener('scroll', function() {
  var animatedImage = document.getElementById('animatedImage');
  var scrollPosition = window.scrollY;

  if (scrollPosition > this.lastScrollPosition) {
      animatedImage.classList.remove('rotating-anticlockwise');
      animatedImage.classList.add('rotating-clockwise');
  } else {
      animatedImage.classList.remove('rotating-clockwise');
      animatedImage.classList.add('rotating-anticlockwise');
  }

  this.lastScrollPosition = scrollPosition;
});