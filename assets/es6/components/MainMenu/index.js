import { classNames, selectors } from './config';

export default class MainMenu {
  constructor() {
    const { hamburger, navigation, layer } = selectors;
    this.$hamburger = $(hamburger);
    this.$navigation = $(navigation);
    this.$layer = $(layer);

    if (this.$hamburger) {
      this.init();
    }
  }

  init() {
    this.addEventListeners();
  }

  destroy() {
    if (this.$hamburger) {
      const { isActive, noScroll } = classNames;

      this.removeEventListeners();

      this.$navigation.removeAttr('styles');
      this.$hamburger.removeClass(isActive);
      $('body').removeClass(noScroll);
    }
  }

  addEventListeners() {
    const { isActive, noScroll } = classNames;

    this.$hamburger.add(this.$layer).click((e) => {
      e.stopPropagation();

      this.$layer.toggle();
      this.$navigation.toggle();
      this.$hamburger.toggleClass(isActive);
      $('body').toggleClass(noScroll);
    });
  }

  removeEventListeners() {
    this.$hamburger.add(this.$layer).off('click');
  }
}

