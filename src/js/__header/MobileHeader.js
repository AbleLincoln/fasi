const $ = jQuery.noConflict();

class MobileHeader {
    constructor(trigger = '.btn-hamburger', pbody = 'body', listParent = '.menu-item-has-children > a') {
        this.trigger = trigger;
        this.pbody = pbody;
        this.listParent = listParent;
    }
    init() {
        $(this.trigger).on('click', this.setNavState);
        $(this.listParent).on('click', this.setListState);
    }
    setNavState(e) {
        e.preventDefault();
        const body = $('body');

        if ($(this).hasClass('open')) {
            MobileHeader.hideWrapper(this, body);
        } else {
            MobileHeader.showWrapper(this, body);
        }
    }
    setListState(e) {
        if (!$(this).hasClass('open') && window.innerWidth < 992) {
            e.preventDefault();
            $(this).addClass('open');
        }
    }
    static hideWrapper(el, body) {
        $(el).removeClass('open');
        body.removeClass('overlayed');
        $(el).next().removeClass('active');
    }
    static showWrapper(el, body) {
        $(el).addClass('open');
        body.addClass('overlayed');
        $(el).next().addClass('active');
    }
    resized() {
        if (!$(this.trigger).is(':visible') && $(this.trigger).hasClass('open')) {
            MobileHeader.hideWrapper(this.trigger, $(this.pbody));
        }
    }
    hideOutsideClick(e) {
        if ($(this.trigger).length > 0 && $(this.trigger).hasClass('open')) {
            const container = $('.main-header');
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                MobileHeader.hideWrapper(this.trigger, $(this.pbody));
            }
        }
    }
    scroll(){
		if(document.documentElement.scrollTop > 0){
            $('.main-header').addClass('scrolled');
		} else {
            $('.main-header').removeClass('scrolled');
		}
	}
}

export default new MobileHeader();
