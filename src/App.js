import 'antd/dist/antd.min.css';
import './App.css';
import CustomerLayout from './layout/CustomerLayout';
import { Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from "history";
import ChairTable from './pages/ChairTable';
import "./Assets/css/iindex.css";
import Home from './pages/Home/Home';
import FilmDetail from "./pages/FilmDetail/FilmDetail";
export const history = createBrowserHistory();
function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <CustomerLayout exact path="/" component={Home} />
          <CustomerLayout exact path="/home" component={Home} />
          <CustomerLayout exact path="/filmdetail/:id" component={FilmDetail} />
          <CustomerLayout exact path="/chairtable" component={ChairTable} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
