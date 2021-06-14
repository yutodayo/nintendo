import { Route, Switch } from "react-router-dom";
import { Curry } from "../page/univ/Curry";
import { Univ } from "../page/univ/Univ";
import { InUnivRouter } from "./InUnivRouter";

export const UnivRouter = () => {
  return (
    <Route
      path="/univ"
      render={({ match: { url } }) => (
        <Switch>
          <Route exact path={url}>
            <Univ />
          </Route>
          <Route path={`${url}/curry`}>
            <Curry />
          </Route>
          <InUnivRouter />
        </Switch>
      )}
    />
  );
};
