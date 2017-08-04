import { classNames, selectors } from './config';

export default class MainMenu {
  static loadState = 'documentReady';

  constructor() {
    this.$hamburger = $(selectors.hamburger);
  }

  init() {
    this.addEventListeners();
  }

  destroy() {
    const { isActive } = classNames;

    this.removeEventListeners();

    this.$hamburger.removeClass(isActive);
  }

  addEventListeners() {
    const { isActive } = classNames;

    this.$hamburger.click(() => {
      this.$hamburger.toggleClass(isActive);
    });
  }

  removeEventListeners() {
    this.$hamburger.off('click');
  }
}

