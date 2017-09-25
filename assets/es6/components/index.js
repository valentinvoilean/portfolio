import Logo from './Logo';
import MainMenu from './MainMenu';
import MediaQueries from './MediaQueries';
import Gallery from './Gallery';
import StickyHeader from './StickyHeader';
import AnimatedMessage from './AnimatedMessage';

export default {
  documentReady: [MediaQueries],
  windowLoad: [Logo, MainMenu, StickyHeader, Gallery, AnimatedMessage]
};
