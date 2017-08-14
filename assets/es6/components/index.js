import Logo from './Logo';
import MainMenu from './MainMenu';
import MediaQueries from './MediaQueries';
import Gallery from './Gallery';

export default {
  documentReady: [MediaQueries, Logo, MainMenu, Gallery],
  windowLoad: []
};
