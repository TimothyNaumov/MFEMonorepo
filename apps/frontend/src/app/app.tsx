import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import Home from './home/home';
import Getdashboardinfo from './getdashboardinfo/getdashboardinfo';
import Getquotesinfo from './getquotesinfo/getquotesinfo';

export function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <nav className="app-nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/dashboard">Get Dashboard Info</Link>
            </li>
            <li>
              <Link to="/quotes">Get Quotes Info</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/dashboard" exact component={Getdashboardinfo} />
          <Route path="/quotes" exact component={Getquotesinfo} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
