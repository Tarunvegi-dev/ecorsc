import { Route, Switch } from 'react-router-dom'
import Homepage from './components/homepage';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Homepage}/>
      </Switch>
    </div>
  );
}

export default App;
