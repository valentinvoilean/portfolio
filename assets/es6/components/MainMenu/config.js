import { createSelectorsFromClasses } from 'es6/utils';

export const classNames = {
  hamburger: 'mainmenu-hamburger',
  isActive: 'is-active'
};

export const selectors = createSelectorsFromClasses(classNames);
