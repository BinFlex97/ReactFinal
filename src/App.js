import 'antd/dist/antd.min.css';
import './App.css';
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import { Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from "history";
import ChairTable from './pages/ChairTable';
import FilmDetail from './pages/FilmDetail/FilmDetail';
export const history = createBrowserHistory();
function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <MainLayout exact path="/" component={Home} />
          <MainLayout exact path="/home" component={Home} />
          <MainLayout exact path="/filmdetail" component={FilmDetail} />
          <MainLayout exact path="/chairtable" component={ChairTable} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
