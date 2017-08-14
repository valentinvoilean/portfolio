import { createSelectorsFromClasses } from 'es6/utils';

export const classNames = {
  gallery: 'home-gallery',
  header: 'stickyHeader'
};

export const selectors = createSelectorsFromClasses(classNames);
