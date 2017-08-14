import Logo from './Logo';
import MainMenu from './MainMenu';
import MediaQueries from './MediaQueries';
import Gallery from './Gallery';
import StickyHeader from './StickyHeader';

export default {
  documentReady: [MediaQueries, Logo, MainMenu, Gallery, StickyHeader],
  windowLoad: []
};
