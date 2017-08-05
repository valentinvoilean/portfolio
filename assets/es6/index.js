import components from './components';

window.instances = [];

$(document).ready(() => {
  components.documentReady.forEach(Component => {
    window.instances.push(new Component());
  });
});

$(window).on('load', () => {
  components.windowLoad.forEach(Component => {
    window.instances.push(new Component());
  });
});

