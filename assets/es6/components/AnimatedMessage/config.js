import { createSelectorsFromClasses } from 'es6/utils';

export const classNames = {
  animatedText: 'animated-message-text'
};

export const options = {
  strings: ['I\'m Valentin. ^1000', 'I\'m from Romania. ^500', 'I\'m Frontend Developer. ^5000'],
  typeSpeed: 30,
  backSpeed: 40,
  startDelay: 1000,
  smartBackspace: true, // this is a default
  loop: true
};

export const selectors = createSelectorsFromClasses(classNames);
