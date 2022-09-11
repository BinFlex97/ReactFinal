import 'antd/dist/antd.min.css';
import './App.css';
import CustomerLayout from './layout/CustomerLayout';
import { Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from "history";
import "./Assets/css/iindex.css";
import Home from './pages/Home/Home';
import FilmDetail from "./pages/FilmDetail/FilmDetail";
import Login from './pages/Login/Login.';
import { UserLayout } from './layout/UserLayout';
import Register from './pages/Register/Register';
import { ChairTableLayout } from './layout/ChairTableLayout';
import ChairTable from './pages/ChairTable/ChairTable';
export const history = createBrowserHistory();
function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <CustomerLayout exact path="/" component={Home} />
          <CustomerLayout exact path="/home" component={Home} />
          <CustomerLayout exact path="/filmdetail/:id" component={FilmDetail} />


          <UserLayout exact path="/login" Component={Login} />
          <UserLayout exact path="/register" Component={Register} />

          <ChairTableLayout exact path="/chairtable/:id" component={ChairTable} />


        </Switch>
      </Router>
    </div>
  );
}
export default App;
