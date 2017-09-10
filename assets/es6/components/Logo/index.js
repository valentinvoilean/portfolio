import { hasTouch } from 'detect-touch';

import { classNames, selectors } from './config';

export default class Logo {
  constructor() {
    this.$logo = $(selectors.logo);

    this.state = {
      active: false
    };

    this.init();
  }

  init() {
    if (this.$logo) {
      this._addEventListeners();
    }
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
    if (hasTouch) {
      this.$logo.on('click', $.proxy(this._toggleLogoActivation, this));
      $(document).on('click', $.proxy(this._deactivateLogo, this));
    } else {
      this.$logo.on({
        mouseenter: $.proxy(this._activateLogo, this),
        mouseleave: $.proxy(this._deactivateLogo, this)
      });
    }
  }

  _removeEventListeners() {
    this.$logo.off('click mouseenter mouseleave');
    $(document).off('click', $.proxy(this._deactivateLogo, this));
  }

  _toggleLogoActivation(e) {
    e.stopPropagation();

    if (this.state.active) {
      this._deactivateLogo();
    } else {
      e.preventDefault();
      this._activateLogo();
    }
  }

  _activateLogo() {
    const { enter, leave } = classNames;

    this.$logo.addClass(enter).removeClass(leave);
    this.state.active = true;
  }

  _deactivateLogo() {
    const { enter, leave } = classNames;

    this.$logo.addClass(leave).removeClass(enter);

    this.state.active = false;

    setTimeout(() => {
      this.$logo.removeClass(leave);
    }, 600);
  }
}

