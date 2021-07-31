const $ = jQuery.noConflict();

class Slider {
    constructor( selector, args = {} ) {
        this.selector = selector;
        this.args = args;
    }

    getDefaultSlickSettings() {
        return {
            dots: false,
            arrows: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            pauseOnHover: false,
            speed: 600,
        }
    }

    /**
     * Override our default slick settings with args provided to the class.
     */
    getSlickSettings() {
        return Object.assign( {}, this.getDefaultSlickSettings(), this.args );
    }

    init() {
        let settings = this.getSlickSettings();

        $( this.selector ).slick( settings );
    }
}
const SimpleSlider = new Slider('.bc-gallery__slider');
const LightboxSlider = new Slider('.lightbox-gallery__slider');
const NewsBarSlider = new Slider(
    '.js-news-bar-slider',
    {
        appendArrows: '.js-news-bar-arrows'
    }
);

function watchNewsBarChange() {
    let slideNum;
    $('.js-news-bar-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        slideNum = (nextSlide + 1).toString();
        slideNum = 1 === slideNum.length ? '0' + slideNum : slideNum;
        $('.js-news-bar-slide-count').html(slideNum);
    });
}

export { SimpleSlider, LightboxSlider, NewsBarSlider, watchNewsBarChange };
