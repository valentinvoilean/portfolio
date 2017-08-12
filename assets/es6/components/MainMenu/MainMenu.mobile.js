import { classNames, selectors } from './config';

export default class MainMenu {
  constructor() {
    const { hamburger, navigation } = selectors;
    this.$hamburger = $(hamburger);
    this.$navigation = $(navigation);

    this._handleHamburgerIconCLick = this._handleHamburgerIconCLick.bind(this);
    this._hideMenu = this._hideMenu.bind(this);

    this.init();
  }

  init() {
    if (this.$hamburger) {
      this._addEventListeners();
    }
  }

  destroy() {
    if (this.$hamburger) {
      const { isActive } = classNames;

      this._removeEventListeners();
      this.$hamburger.removeClass(isActive);
    }
  }

  _addEventListeners() {
    this.$hamburger.on('click', this._handleHamburgerIconCLick);
    $(window).on('click', this._hideMenu);
    this.$navigation.on('click', e => e.stopPropagation());
  }

  _removeEventListeners() {
    this.$hamburger.add($(window)).off('click', this._handleHamburgerIconCLick);
    $(window).off('click', this._hideMenu);
  }

  _handleHamburgerIconCLick(e) {
    e.stopPropagation();

    this.$hamburger.toggleClass(classNames.isActive);
  }

  _hideMenu() {
    this.$hamburger.removeClass(classNames.isActive);
  }
}
