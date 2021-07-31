const $ = jQuery.noConflict();

import { CountUp } from 'countup.js';

class StatCounter {
	constructor(stat) {
		this.stat = $(stat);
	}
	setStatWidth() {
		$('.block-challenge__stat .stat-container').each(function() {
			$(this).removeClass('sized');
			$(this).css('width', 'auto');
			$(this).css('flex-basis', 'auto');
			let width = $(this).find('.stat-full').outerWidth();
			$(this).css('width', width);
			$(this).css('flex-basis', width);
			$(this).addClass('sized');
		});
	}
	positionCounters() {
		const thisClass = this;
		this.stat.each(function() {
			let scrollTop = $(window).scrollTop();
			let windowHeight = $(window).height();
			let thisPosition = $(this).offset().top;

			if (scrollTop + windowHeight >= thisPosition) {
				if (!$(this).hasClass('animate')){
					$(this).addClass('animate');
					thisClass.countStat($(this).attr('id'));
				}
			}
		});
	}
	countStat(el) {
		const countTo = $('#' + el).data('count-to');
		const easingFn = function (t, b, c, d) {
			var ts = (t /= d) * t;
			var tc = ts * t;
			return b + c * (tc + -3 * ts + 3 * t);
		}
		const options = {
			duration: 4,
			startVal: $('#' + el).data('count-from'),
		  easingFn,
		};
		let count = new CountUp(el, countTo, options);
		if (!count.error) {
			count.start();
		} else {
			console.error(count.error);
		}
	}
}

export default new StatCounter( '.js-stat-counter' );
