import React, { Suspense } from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import ENUMS from '../src/assets/js/enum';

import Header from '../src/container/Header/Header';
import Footer from '../src/container/Footer/Footer';
import Home from '../src/container/Home/Home';

function MainRoutes() {

  return (
    <div>
      <Header />
      <div className="content-wrapper">
        <Suspense fallback={<div>Loading... </div>}>
          <Switch>
            <Route exact path={ENUMS.ROUTES.HOME} component={Home} />
          </Switch>
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}

export default MainRoutes;