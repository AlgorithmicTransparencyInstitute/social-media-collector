import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container';

import ConsentAwareView from 'common/components/ConsentAwareView';
import Button from 'common/components/Button';
import MainMenu from './components/MainMenu';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.less';

const App = () => (
  <Fragment>
    <ConsentAwareView whenGrantedIs="none">
      <Container>
        <h3>{process.env.TITLE}</h3>
        <div className="mb-1">
          <p>To enable the extension, please consent to our collection of your data.</p>
          <Button label="Review Consent" to="terms" />
        </div>
      </Container>
    </ConsentAwareView>
    <ConsentAwareView whenGrantedIs="old">
      <Container>
        <div className="mb-1">
          <h3>{process.env.TITLE}</h3>
          <p>
            To enable the extension, please consent to our collection of some more of your data.
          </p>
          <Button label="Review Consent" to="terms" />
        </div>
      </Container>
    </ConsentAwareView>
    <ConsentAwareView whenGrantedIs="current">
      <MainMenu />
    </ConsentAwareView>
  </Fragment>
);
App.displayName = 'App';

export default App;
