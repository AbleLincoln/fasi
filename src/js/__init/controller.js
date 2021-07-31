// import MegaMenu from '../__header/MegaMenu';
import headerAlertBar from '../__header/alertBar';
import MobileHeader from '../__header/MobileHeader';
import Accordion from '../__shortcodes/Accordions';
import { ImageAccordion, SimpleAccordion } from '../__page/Accordion';
import Tabs from '../__page/Tabs';
import LightboxGallery from '../__page/LightboxGallery';
import video from '../__utils/video';
import { SimpleSlider, LightboxSlider, NewsBarSlider, watchNewsBarChange } from '../__utils/Sliders';
import StatCounter from '../__page/StatCounter';
import BackgroundVideo from '../__page/BackgroundVideo';
import smoothScroll from '../__utils/smoothScroll';
import Tables from '../__utils/Tables';
import Forms from '../__utils/forms';
import vhUnit from '../__utils/vhUnit';

// GLOBAL APP CONTROLLER
const controller = {
    init() {
        document.querySelector('html').classList.remove('no-js');
        // MegaMenu.init();
        MobileHeader.init();
        MobileHeader.scroll();
        headerAlertBar.init();
        Accordion.init();
        Tabs.init();
        video.init();
        SimpleSlider.init();
        LightboxSlider.init();
        NewsBarSlider.init();
        watchNewsBarChange();
        LightboxGallery.init();
        smoothScroll();
        Tables.init();
        ImageAccordion.init();
        SimpleAccordion.init();
        vhUnit();
    },
    loaded() {
        document.querySelector('body').classList.add('page-has-loaded');
        Forms();
        // StatCounter.setStatWidth();
        StatCounter.positionCounters();
        vhUnit();
        BackgroundVideo.loaded();
    },
    resized() {
        MobileHeader.resized();
        Tables.toggleShadow();
        LightboxGallery.refreshSlider();
        // StatCounter.setStatWidth();
        BackgroundVideo.sizeVideo();
        vhUnit();
    },
    scrolled() {
        MobileHeader.scroll();
        StatCounter.positionCounters();
    },
    keyDown(e){

    },
    mouseUp(e) {
        // MobileHeader.hideOutsideClick(e);
    },
};
export default controller;
