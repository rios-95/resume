import React from "react";
import Header from "./components/Header.jsx";
import { Switch, Route, Redirect, HashRouter } from "react-router-dom";
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
      <HashRouter>
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
            <Route key="no-match-route" render={() => <Redirect to="/inicio" />} />
          </Switch>
        </React.Suspense>
      </HashRouter>
    </div>
  );
}

export default App;
