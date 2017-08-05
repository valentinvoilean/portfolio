import { Logo, MainMenu } from './components';

const loadState = {
  documentReady: [Logo, MainMenu],
  windowLoad: []
};

const instances = [];

$(document).ready(() => {
  loadState.documentReady.forEach(Component => {
    instances.push(new Component());
  });
});

$(window).on('load', () => {
  loadState.windowLoad.forEach(Component => {
    instances.push(new Component());
  });
});

