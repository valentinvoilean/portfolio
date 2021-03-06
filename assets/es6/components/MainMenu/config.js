import { createSelectorsFromClasses } from 'es6/utils';

export const classNames = {
  navigation: 'mainmenu-nav',
  hamburger: 'mainmenu-hamburger',
  isActive: 'is-active',
  noScroll: 'no-scroll'
};

export const selectors = createSelectorsFromClasses(classNames);
