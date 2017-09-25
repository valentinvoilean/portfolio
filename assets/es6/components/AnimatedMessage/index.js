import Typed from 'typed.js';

import { selectors, options } from './config';

export default class AnimatedMessage {
  constructor() {
    this.typed = new Typed(selectors.animatedText, options);
  }

  destroy() {
    this.typed.destroy();
    this.typed = null;
  }
}
