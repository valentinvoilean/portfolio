import { classNames, selectors } from './config';

export default class MainMenu {
  constructor() {
    const { hamburger, navigation, layer } = selectors;
    this.$hamburger = $(hamburger);
    this.$navigation = $(navigation);
    this.$layer = $(layer);

    this._handleHamburgerIconCLick = this._handleHamburgerIconCLick.bind(this);

    this.init();
  }

  init() {
    if (this.$hamburger) {
      this._addEventListeners();
    }
  }

  destroy() {
    if (this.$hamburger) {
      const { isActive, noScroll } = classNames;

      this._removeEventListeners();

      this.$layer.removeAttr('style');
      this.$navigation.removeAttr('style');
      this.$hamburger.removeClass(isActive);
      $('body').removeClass(noScroll);
    }
  }

  _addEventListeners() {
    this.$hamburger.add(this.$layer).click(this._handleHamburgerIconCLick);
  }

  _removeEventListeners() {
    this.$hamburger.add(this.$layer).off('click');
  }

  _handleHamburgerIconCLick(e) {
    const { isActive, noScroll } = classNames;
    e.stopPropagation();

    this.$layer.toggle();
    this.$navigation.toggle();
    this.$hamburger.toggleClass(isActive);
    $('body').toggleClass(noScroll);
  }
}
