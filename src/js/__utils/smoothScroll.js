import MobileHeader from '../__header/MobileHeader';

const $ = jQuery.noConflict();
function scrollFunc(e) {
    e.preventDefault();
    const header = $('.main-header');
    const stickyClass = 'main-header--sticky';
    const target = $($(this).attr('href'));
    let stickyHeight = 115;
    if (header.hasClass(stickyClass)) {
        stickyHeight = header.outerHeight();
    }
    if ($(this).attr('href') === '#next' && $(this).parents('section').next().length > 0) {
        // Smooth Scroll to next section
        $('html, body').animate({
            scrollTop: $(this).parents('section').next().offset().top - stickyHeight,
        }, 600);
        MobileHeader.hideWrapper('.btn-hamburger', $('body'));
    } else if (target.length) {
        $('html, body').animate({
            scrollTop: target.offset().top - stickyHeight,
        }, 600);
        MobileHeader.hideWrapper('.btn-hamburger', $('body'));
    }
}
function pageLoadScrollFunc(target) {
    const header = $('.main-header');
    const stickyClass = 'main-header--sticky';
    let stickyHeight = 115;
    if (header.hasClass(stickyClass)) {
        stickyHeight = header.outerHeight();
    }
    $('html, body').animate({
        scrollTop: target.offset().top - stickyHeight,
    }, 600);
}
function setPageForInternalSmoothScroll() {
    $('a[href]').each( function() {
        let thisLocation = $(this).attr('href');
        if ( 
            thisLocation === window.location.pathname + window.location.hash ||
            thisLocation.includes(window.location.pathname + '#')
        ) {
            $(this).attr('href', thisLocation.replace( window.location.pathname, '' ));
        }
    } );
}
function smoothScroll() {
    // to top right away
    if ( window.location.hash ) scroll(0,0);
    // void some browsers issue
    setTimeout( function() { scroll(0,0); }, 1);
    console.log('file js');

    setPageForInternalSmoothScroll();

    if ( window.location.hash ) {
        pageLoadScrollFunc($(window.location.hash));
    }

    $('a[href^="#"]:not([href="#"])').on('click', scrollFunc);
}
export default smoothScroll;
