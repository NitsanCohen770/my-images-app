import React from 'react';
import { RecoilRoot } from 'recoil';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { GlobalStyles } from './global/styles';
import SearchPage from './containers/SearchPage';
import HomePage from './containers/HomePage';
import { Header } from './components';

function App() {
  return (
    <Router>
      <RecoilRoot>
        <GlobalStyles />
        <Header />
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route path='/search'>
          <SearchPage />
        </Route>
      </RecoilRoot>
    </Router>
  );
}

export default App;
