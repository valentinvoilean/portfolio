import components from './components';

const instances = [];

$(document).ready(() => {
  components.documentReady.forEach(Component => {
    instances.push(new Component());
  });
});

$(window).on('load', () => {
  components.windowLoad.forEach(Component => {
    instances.push(new Component());
  });
});

