import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import CancelablePromise from "./components/CancelablePromise";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/cancelable-promise-with-error"}>
                Cancelable Promise
              </Link>
            </li>
          </ul>
        </nav>
        <hr />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/cancelable-promise-with-error"
            //componet={CancelablePromiseWithError}
            component={CancelablePromise}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
