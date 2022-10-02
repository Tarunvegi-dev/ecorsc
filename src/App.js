import { Route, Switch } from 'react-router-dom'
import Homepage from './pages/homepage';
import Affiliations from './pages/Affiliations';
import CentralOfficeBearers from './pages/CentralOfficeBearers';
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/history-and-affiliations" exact component={Affiliations} />
        <Route path='/central-office-bearers' component={CentralOfficeBearers} />
      </Switch>
    </div>
  );
}

export default App;
