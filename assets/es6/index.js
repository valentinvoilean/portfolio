import * as Components from './components';

const loadState = {
  documentReady: [],
  windowLoad: []
};

$(document).ready(() => {
  Object.values(Components).forEach(ComponentClass => {
    if (ComponentClass.loadState === 'documentReady') {
      loadState.documentReady.push(new ComponentClass());
    }
  });
});

$(window).on('load', () => {
  Object.values(Components).forEach(ComponentClass => {
    if (ComponentClass.loadState === 'windowLoad') {
      loadState.windowLoad.push(new ComponentClass());
    }
  });
});

