import * as Components from './components';

const loadState = {
  documentReady: [],
  windowLoad: []
};

Object.values(Components).forEach(ComponentClass => {
  loadState[ComponentClass.loadState].push(new ComponentClass());
});

$(document).ready(() => {
  loadState.documentReady.forEach(instance => {
    instance.init();
  });
});

$(window).on('load', () => {
  loadState.windowLoad.forEach(instance => {
    instance.init();
  });
});

