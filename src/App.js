import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Homepage from './pages/homepage';
import Affiliations from './pages/Affiliations';
import CentralOfficeBearers from './pages/CentralOfficeBearers';
import Contact from './pages/Contact'
import Admin from './pages/Admin/'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.css';
import Circulars from './pages/Circulars';
import PNM_Items from './pages/PNM_Items';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/admin' component={Admin} />
        <Route path="/" exact component={Homepage} />
        <Route path="/board-circulars" exact component={Circulars} />
        <Route path="/pnm-items" exact component={PNM_Items} />
        <Route path="/history-and-affiliations" exact component={Affiliations} />
        <Route path='/central-office-bearers' component={CentralOfficeBearers} />
        <Route path='/contact' component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
