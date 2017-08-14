import inView from 'in-view';

import { selectors } from './config';

import Mobile from './Gallery.mobile';
import Desktop from './Gallery.desktop';

export default class Gallery {
  constructor() {
    this.init();
  }

  init() {
    this._addEventListeners();
    this._checkCurrentBreakpoint();
  }

  destroy() {
    this._removeMediaQueryCallbacks();
    if (this.instance) {
      this.instance.destroy();
    }
    this.instance = null;
  }

  _addEventListeners() {
    inView.offset(100);
    inView(selectors.gallery).on('exit', $.proxy(this._highlightHeader, this));
    inView(selectors.gallery).on('enter', $.proxy(this._resetHeader, this));

    this._addMediaQueryCallbacks();
  }

  _highlightHeader() {
    console.log('highlight header');
  }

  _resetHeader() {
    console.log('reset header');
  }

  _addMediaQueryCallbacks() {
    $(window).on('smMax', $.proxy(this._onChangedToMobile, this));
    $(window).on('mdMin', $.proxy(this._onChangedToDesktop, this));
  }

  _removeMediaQueryCallbacks() {
    $(window).off('smMax', $.proxy(this._onChangedToMobile.bind(this)));
    $(window).off('mdMin', $.proxy(this._onChangedToDesktop.bind(this)));
  }

  _checkCurrentBreakpoint() {
    if (
      window.info &&
      window.info.matchedMediaQueries &&
      window.info.matchedMediaQueries.indexOf('smMax') > -1
    ) {
      this._onChangedToMobile();
    } else {
      this._onChangedToDesktop();
    }
  }

  _onChangedToDesktop() {
    if (this.instance) {
      this.instance.destroy();
    }
    this.instance = new Desktop();
  }

  _onChangedToMobile() {
    if (this.instance) {
      this.instance.destroy();
    }
    this.instance = new Mobile();
  }
}
