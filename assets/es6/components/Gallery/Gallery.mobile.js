import Parallax from 'parallax-js';

import { selectors } from './config';

export default class GalleryMobile {
  constructor() {
    this.$gallery = $(selectors.gallery);

    this.init();
  }

  init() {
    this.parallax = new Parallax(this.$gallery.get(0));
  }

  destroy() {
    this.parallax.destroy();
    this.parallax = null;
  }
}

