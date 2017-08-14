import inView from 'in-view';
import { selectors } from './config';

export default class GalleryMobile {
  constructor() {
    const { gallery } = selectors;

    this.$gallery = $(gallery);

    this._addEventListeners = this._addEventListeners.bind(this);
    this._highlightHeader = this._highlightHeader.bind(this);
    this._resetHeader = this._resetHeader.bind(this);

    this.init();
  }

  init() {
    this._addEventListeners();
  }

  destroy() {}

  _addEventListeners() {
    inView.offset(100);
    inView(selectors.gallery).on('exit', this._highlightHeader);
    inView(selectors.gallery).on('enter', this._resetHeader);
  }

  _highlightHeader() {
    console.log('highlight header');
  }

  _resetHeader() {
    console.log('reset header');
  }
}

