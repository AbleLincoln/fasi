const $ = jQuery.noConflict();

class BackgroundVideo {
	loaded() {
    if ( $('.Vidage').length ) {
      this.sizeVideo();
      var isIOS = /iPad|iPhone|iPod|Android/.test(navigator.platform);
    
      if (isIOS) {
        var canvasVideo = new CanvasVideoPlayer({
          videoSelector: '.Vidage__video',
          canvasSelector: '.Vidage__canvas',
          timelineSelector: false,
          autoplay: true,
          makeLoop: true,
          pauseOnClick: false,
          audio: false
        });
      } else {
        document.querySelectorAll('.Vidage__canvas')[0].style.display = 'none';
        new Vidage('#VidageVideo');
      }
    }
	}
  sizeVideo() {
    if ( $('.Vidage').length ) {
      $('.Vidage__canvas').removeClass('sized');
      let videoWidth = $('.Vidage__canvas').outerWidth();
      let videoHeight = $('.Vidage__canvas').outerHeight();
      let containerWidth = $('.Vidage').outerWidth();
      let containerHeight = $('.Vidage').outerHeight();

      let aspectRatio = videoWidth / videoHeight;

      if (videoWidth < containerWidth) {
        videoWidth = containerWidth;
        videoHeight = containerWidth / aspectRatio;
      }

      if (videoHeight < containerHeight) {
        videoHeight = containerHeight;
        videoWidth = containerHeight * aspectRatio;
      }

      $('.Vidage__canvas').outerWidth(videoWidth).outerHeight(videoHeight);
      $('.Vidage__canvas').addClass('sized');
    }
  }
}

export default new BackgroundVideo();
