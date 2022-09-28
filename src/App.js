import { Route, Switch } from 'react-router-dom'
import Homepage from './pages/homepage';
import CentralOfficeBearers from './pages/CentralOfficeBearers';
import Admin from './pages/Admin/'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/admin' component={Admin} />
        <Route path="/" exact component={Homepage} />
        <Route path='/central-office-bearers' component={CentralOfficeBearers} />
      </Switch>
    </div>
  );
}

export default App;
