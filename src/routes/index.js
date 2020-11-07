import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from '../pages/Main';
import Contact from '../pages/Contact';
import Portifolio from '../pages/Portifolio';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/contact" exact component={Contact} />
      <Route path="/portifolio" exact component={Portifolio} />
    </Switch>
  );
}