import { throttle } from 'lodash';
import { CLASS_NAMES } from 'es6/constants';
import { selectors } from './config';

export default class CurrenciesComponent {
  constructor() {
    this.$header = $(selectors.header);
    this.$gallery = $(selectors.gallery);

    this._checkHeader = this._checkHeader.bind(this);
    this._highlightHeader = this._highlightHeader.bind(this);
    this._resetHeader = this._resetHeader.bind(this);

    this.init();
  }

  init() {
    this._addEventListeners();
    this._checkHeader();
  }

  destroy() {
    this._removeEventListeners();
    this._resetHeader();
  }

  _addEventListeners() {
    $(window).on('scroll', throttle(this._checkHeader, 100));
  }

  _removeEventListeners() {
    $(window).off('scroll', throttle(this._checkHeader, 100));
  }

  _checkHeader() {
    if (this.$header.offset().top > this.$gallery.height() - 100) {
      this._highlightHeader();
    } else {
      this._resetHeader();
    }
  }

  _highlightHeader() {
    this.$header.addClass(CLASS_NAMES.active);
  }

  _resetHeader() {
    this.$header.removeClass(CLASS_NAMES.active);
  }
}
