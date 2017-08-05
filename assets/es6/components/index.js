import Logo from './Logo';
import MainMenu from './MainMenu';
import MediaQueries from './MediaQueries';

export default {
  documentReady: [MediaQueries, Logo, MainMenu],
  windowLoad: []
};
