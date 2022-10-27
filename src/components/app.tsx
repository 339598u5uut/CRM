import React, { FC } from 'react';
import Header from './header/header';
import MainPage from '../pages/main-page/main-page';
import AddressPage from '../pages/address-page/address-page';
import { Switch, Route } from 'react-router-dom';

const App: FC = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact={true}>
          <MainPage />
        </Route>
        <Route path="/address" exact={true}>
          <AddressPage />
        </Route>
      </Switch>
    </>
  );
};

export default App;
