import inView from 'in-view';

import { CLASS_NAMES } from 'es6/constants';
import { selectors } from './config';

export default class CurrenciesComponent {
  constructor() {
    this.$header = $(selectors.header);
    this.init();
  }

  init() {
    inView.offset(100);
    this._addEventListeners();
  }

  destroy() {
  }

  _addEventListeners() {
    inView(selectors.gallery).on('exit', $.proxy(this._highlightHeader, this));
    inView(selectors.gallery).on('enter', $.proxy(this._resetHeader, this));
  }

  _highlightHeader() {
    this.$header.addClass(CLASS_NAMES.active);
  }

  _resetHeader() {
    this.$header.removeClass(CLASS_NAMES.active);
  }
}
