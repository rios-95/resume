import React from "react";
import Header from "./components/Header.jsx";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import routes from "./routes";
import CustomLoader from './decorators/CustomLoader.jsx';
// Styles
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.min.css";

function App() {
  const loading = () => <CustomLoader />;

  return (
    <div className="App">
      <Router>
        <React.Suspense fallback={loading()}>
          <Header />
          <Switch>
            {routes.map((route, idx) => {
              return route.component ? (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={() => <route.component />}
                />
              ) : null;
            })}
          </Switch>
        </React.Suspense>
      </Router>
    </div>
  );
}

export default App;
