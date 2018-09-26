import React from 'react'
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage';

export default function APP() {
  return(
    <div>
      <Helmet
        titleTemplate="reporting_system"
        defaultTitle="reporting_system"
      >
        <meta name="description" content="reporting_system" />
      </Helmet>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  )
}
