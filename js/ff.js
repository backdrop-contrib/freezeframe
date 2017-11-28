(function($) {

Backdrop.behaviors.freezeframe = {
  attach: function(context, settings) {

    /*** Freeze GIFs ***/
    var gifs = $(settings.freezeframe.gifs);

    // Make sure there are GIFs to freeze.
    if (gifs.length) {
      // Freeze them, with the specified settings.
      gifs.freezeframe({
        'animation_play_duration': Number(settings.freezeframe.duration),
        'non_touch_device_trigger_event': settings.freezeframe.trigger
      });
    }


    /*** Overlay ***/
    var timer;
    var touch = ('ontouchstart' in window || 'onmsgesturechange' in window);

    // Toggle the overlay.
    var toggleOverlay = function() {
      $('.ff-container').children('.overlay').toggle();
    }

    // Add the overlay.
    $('.ff-container').prepend('<div class="overlay">Gif</div>').each(function() {
      // Toggle the overlay on click/hover (depending on the settings).
      if (settings.freezeframe.trigger == 'click' || touch) {
        $(this).click(function() {
          toggleOverlay();

          // Toggle again after the specified duration (if any).
          if (settings.freezeframe.duration != "Infinity") {
            if ($(this).children('canvas').hasClass('ff-canvas-active')) {
              timer = setTimeout(toggleOverlay, Number(settings.freezeframe.duration));
            }
            else {
              // Cancel the timer if clicked again before duration expires.
              clearTimeout(timer);
            }
          }
        });
      }
      else {
        $(this).hover(toggleOverlay);
      }
    });

  }
};

})(jQuery);

