/* eslint-disable import/no-default-export */
const $ = jQuery.noConflict();

const localVar = document.body.classList.contains('home')
    ? 'veracross-home-alertbar-close-date'
    : 'veracross-alertbar-close-date';

const headerAlertBar = {
    close: $('.js-alert-bar-close'),
    bar: $('.js-alert-bar'),
    header: $('.main-header'),

    showAlertBar() {
        const closeDate = localStorage.getItem(localVar);
        if (closeDate) {
            const date = new Date(parseInt(closeDate));
            const actualDate = new Date();
            const diff = actualDate - date;
            const hoursDiff = Math.floor((diff / (1000 * 60 * 60)) % 24);

            if (hoursDiff >= 24) {
                localStorage.removeItem(localVar);
                this.bar.show();
                this.header.addClass('alertbar-visible');
            } else {
                this.bar.hide();
                this.header.removeClass('alertbar-visible');
            }
        } else {
            this.bar.show();
            this.header.addClass('alertbar-visible');
        }
    },

    closeAlertBar() {
        this.bar.hide();
        this.header.removeClass('alertbar-visible');
        const date = new Date();
        localStorage.setItem(localVar, date.getTime());
    },

    init() {
        this.showAlertBar();
        this.close.on('click', () => this.closeAlertBar());
    },
};

export default headerAlertBar;
