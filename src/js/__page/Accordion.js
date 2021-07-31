const $ = jQuery.noConflict();

class Accordion {
    constructor(accWrapper, accButton, prefix) {
        this.prefix = prefix;
        this.accWrapper = $(accWrapper);
        this.accButton = $(accButton);
    }
    init() {
        this.accButton.on('click', (e) => this.toggleTab(e));
    }
    toggleTab(e) {
        e.preventDefault();
        let itemClass = this.prefix + '__accordion-item';
        let $item = $(e.target).closest(itemClass);
        let imageId = $(e.target).data('image');
        let $overlayImage;
        let $baseImage;
        if ( imageId ) {
            $overlayImage = $('#image-overlay-' + imageId);
            $baseImage = $('.block-image-accordion__image--original');
        }

        if ( $item.hasClass('open') ) {
            $item.removeClass('open');
            if ( imageId ) {
                $overlayImage.removeClass('open');
                $baseImage.css('opacity', '1');
            }
        } else {
            $(itemClass).removeClass('open');
            $item.addClass('open');
            if ( imageId ) {
                $(this.prefix + '__image-overlay').removeClass('open');
                $overlayImage.addClass('open');
                $baseImage.css('opacity', '0');
            }
        }
    }
}

const ImageAccordion = new Accordion('.block-image-accordion__accordion', '.block-image-accordion__accordion-item-title button', '.block-image-accordion');
const SimpleAccordion = new Accordion('.block-accordion__accordion', '.block-accordion__accordion-item-title button', '.block-accordion');

export { ImageAccordion, SimpleAccordion };