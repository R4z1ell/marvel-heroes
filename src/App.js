import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import { GlobalStyle } from './global.styles';

import Spinner from './components/Spinner/Spinner.component';
import Header from './components/Header/Header.component';
import Footer from './components/Footer/Footer.component';

const HomePage = lazy(() => import('./pages/HomePage/HomePage.component'));
const CharacterDetailsPage = lazy(() =>
  import('./pages/CharacterDetails/CharacterDetails.component')
);

const App = () => (
  <div>
    <GlobalStyle />
    <Header />
    <Switch>
      <Suspense fallback={<Spinner />}>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/character/:id" component={CharacterDetailsPage} />
      </Suspense>
    </Switch>
    <Footer />
  </div>
);

export default App;
