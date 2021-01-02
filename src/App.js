import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import CancelablePromise from "./components/CancelablePromise";
import Refs from "./components/Refs";
import Clicks from "./components/Clicks";
import styled from "styled-components";
import Performance from "./performance/withMemoImprovement";

const AppWrapper = styled.div`
  padding: 40px;
`;

const Tabs = styled.div`
  padding-bottom: 20px;
  border-bottom: 1px solid black;
`;

const Tab = styled(Link)`
  margin-right: 20px;
  color: darkblue;
`;

function App() {
  return (
    <Router>
      <AppWrapper>
        <Tabs>
          <Tab to={"/"}>Home</Tab>
          <Tab to={"/cancelable-promise-with-error"}>Cancelable Promise</Tab>
          <Tab to={"/refs"}>Refs</Tab>
          <Tab to={"/clicks"}>Clicks</Tab>
          <Tab to={"/performance"}>Performance</Tab>
        </Tabs>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/cancelable-promise-with-error"
            //componet={CancelablePromiseWithError}
            component={CancelablePromise}
          />
          <Route path="/refs" component={Refs} />
          <Route path="/clicks" component={Clicks} />
          <Route path="/performance" component={Performance} />
        </Switch>
      </AppWrapper>
    </Router>
  );
}

export default App;
