import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Index from '../pages/Index';
import Page404 from '../pages/Page404';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Index} />
      <Route path="*" component={Page404} />
    </Switch>
  );
}
