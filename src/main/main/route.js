import React, { lazy, Suspense, Component } from "react";
import { Route, Switch } from "react-router-dom";

const Details = lazy(() => import("../../features/details"));
const Home = lazy(() => import("../../features/home"));
const ApplicationView = lazy(() => import("../../features/apply"));

const LoadingMessage = () => (
  <div
    style={{
      background: "#e5eff1",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      width: "100%",
    }}
  >
    <span>Loading</span>
  </div>
);

const FourZeroFour = () => (
  <div
    style={{
      background: "#e5eff1",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      width: "100%",
    }}
  >
    <span>404</span>
  </div>
);

class Main extends Component {
  render() {
    return (
      <Suspense fallback={<LoadingMessage />}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/details/:id" component={Details} />
          <Route path="/apply/:id" component={ApplicationView} />
          <Route path="*" component={FourZeroFour} />
        </Switch>
      </Suspense>
    );
  }
}
export default Main;
