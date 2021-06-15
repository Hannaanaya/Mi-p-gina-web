import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from './Layout';
import Principal from '../pages/Principal';
import Personajes from '../pages/Personajes';
import Media from '../pages/components/Media';

function App() {
  return (
    <BrowserRouter>
    <Layout>
        <Switch>
          <Route exact path="/" component={Principal} /> 
          <Route exact path="/personajes" component={ Personajes } />
          <Route exact path="/media" component={ Media } />
         </Switch>
    </Layout>
    </BrowserRouter>

  );
}

export default App;