(function($) {

Backdrop.behaviors.freezeframe = {
  attach: function(context, settings) {

    var gifs = $(settings.freezeframe.gifs);
    if (gifs.length) {
      gifs.freezeframe({
        'animation_play_duration': Number(settings.freezeframe.duration),
        'non_touch_device_trigger_event': settings.freezeframe.trigger
      });
    }

  }
};

})(jQuery);

