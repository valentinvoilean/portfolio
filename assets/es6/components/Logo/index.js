import { classNames, selectors } from './config';

export default class Logo {
  constructor() {
    this.$logo = $(selectors.logo);

    if (this.$logo) {
      this.init();
    }
  }

  init() {
    this._addEventListeners();
  }

  destroy() {
    if (this.$logo) {
      const { enter, leave } = classNames;

      this._removeEventListeners();

      this.$logo
        .removeClass(leave)
        .removeClass(enter);
    }
  }

  _addEventListeners() {
    const { enter, leave } = classNames;

    this.$logo.on({
      mouseenter() {
        $(this).addClass(enter).removeClass(leave);
      },
      mouseleave() {
        $(this).addClass(leave).removeClass(enter);

        setTimeout(() => {
          $(this).removeClass(leave);
        }, 600);
      }
    });
  }

  _removeEventListeners() {
    this.$logo.off('mouseenter mouseleave');
  }
}

