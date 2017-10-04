import { createSelectorsFromClasses } from 'es6/utils';

export const classNames = {
  animatedText: 'animated-message-text'
};

export const options = {
  strings: ['Hi! ^500', 'I\'m Valentin. ^1000', 'I\'m Web Developer. ^5000'],
  typeSpeed: 30,
  backSpeed: 40,
  startDelay: 1000,
  smartBackspace: true, // this is a default
  loop: true
};

export const selectors = createSelectorsFromClasses(classNames);
