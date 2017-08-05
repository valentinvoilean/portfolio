import components from './components';

window.info = window.info || {};
window.info.instances = [];

$(document).ready(() => {
  components.documentReady.forEach(Component => {
    window.info.instances.push(new Component());
  });
});

$(window).on('load', () => {
  components.windowLoad.forEach(Component => {
    window.info.instances.push(new Component());
  });
});

