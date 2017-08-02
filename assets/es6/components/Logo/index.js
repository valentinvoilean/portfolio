import { classNames, selectors } from './config';

export default class Logo {
  static loadState = 'documentReady';

  constructor() {
    this.$logo = $(selectors.logo);
  }

  init() {
    this.addEventListeners();
  }

  destroy() {
    this.removeEventListeners();
  }

  addEventListeners() {
    const { enter, leave } = classNames;

    this.$logo.on({
      mouseenter() {
        $(this).addClass(enter).removeClass(leave);
      },
      mouseleave() {
        $(this).addClass(leave).removeClass(enter);
      }
    });
  }

  removeEventListeners() {
    this.$logo.off('mouseenter mouseleave');
  }
}

