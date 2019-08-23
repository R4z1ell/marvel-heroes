import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import { GlobalStyle } from './global.styles';

import Spinner from './components/Spinner/Spinner.component';
import Header from './components/Header/Header.component';
import Footer from './components/Footer/Footer.component';

const HomePage = lazy(() => import('./pages/HomePage/HomePage.component'));
const CharacterDetails = lazy(() =>
  import('./components/CharacterDetails/CharacterDetails.component')
);

//! Install and use 'prop-types' in ths project
//! Find a way to use global variables with Styled Components(for colors)

const App = () => (
  <div style={{ backgroundColor: '#676767' }}>
    <GlobalStyle />
    <Header />
    <Switch>
      <Suspense fallback={<Spinner />}>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/character/:id" component={CharacterDetails} />
      </Suspense>
    </Switch>
    <Footer />
  </div>
);

export default App;
