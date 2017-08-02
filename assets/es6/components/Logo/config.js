import { createSelectorsFromClasses } from 'es6/utils';

export const classNames = {
  logo: 'logo',
  enter: 'enter',
  leave: 'leave'
};

export const selectors = createSelectorsFromClasses(classNames);
