
//back to top of page
function  initmoveScroller() {
  var win = $(window);
  var $anchor = $(".anchor-link");
  var $anchorHolder = $('.anchor-link-holder');
  var altClass = "_alt";
  var windowHeight;
  var holderOffsetTop;

  var checkSizes = function() {
    windowHeight = win.height();
    holderOffsetTop = $anchorHolder.offset().top;
  };

  var move = function() {
    var scrollTop = win.scrollTop();

    if (scrollTop + windowHeight < holderOffsetTop) {
      $anchor.addClass(altClass);
    } else {
        $anchor.removeClass(altClass);
      }
  };
  checkSizes();
  move();

  win.on('scroll', move);
  win.on('resize', checkSizes);
}