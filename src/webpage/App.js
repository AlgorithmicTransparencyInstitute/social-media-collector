import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container';

// import useArchive from 'common/hooks/useArchive';
import useNavigation from 'common/hooks/useNavigation';

import ConsentAwareView from 'common/components/ConsentAwareView';

import Header from './components/Header';
import Navigation from './components/Navigation';

// import NewsPage from './pages/NewsPage';
import AboutPage from './pages/AboutPage';
import ArchivePage from './pages/ArchivePage';
import PreferencesPage from './pages/PreferencesPage';
// import SharePage from './pages/SharePage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import HelpPage from './pages/HelpPage';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.less';

const routes = {
  // news: NewsPage,
  about: AboutPage,
  archive: ArchivePage,
  preferences: PreferencesPage,
  // share: SharePage,
  privacy: PrivacyPage,
  terms: TermsPage,
  help: HelpPage
};

const App = () => {
  const { current } = useNavigation();
  const Page = routes[current] || AboutPage;

  return (
    <Fragment>
      <Header />
      <div className="d-flex" id="wrapper">
        <ConsentAwareView whenGrantedIsNot="current">
          <div id="page-content-wrapper">
            <TermsPage />
          </div>
        </ConsentAwareView>
        <ConsentAwareView whenGrantedIs="current">
          <Navigation />
          <div id="page-content-wrapper">
            <Container fluid>
              <Page />
            </Container>
          </div>
        </ConsentAwareView>
      </div>
    </Fragment>
  );
};
App.displayName = 'App';

export default App;
