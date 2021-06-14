import { Route, Switch } from "react-router-dom";
import { Class } from "../page/univ/inuniv/Class";
import { InUniv } from "../page/univ/inuniv/InUniv";
import { Study } from "../page/univ/inuniv/Study";

export const InUnivRouter = () => {
  return (
    <Route
      path="/univ/inuniv"
      render={({ match: { url } }) => (
        <Switch>
          <Route exact path={url}>
            <InUniv />
          </Route>
          <Route path={`${url}/class`}>
            <Class />
          </Route>
          <Route path={`${url}/study`}>
            <Study />
          </Route>
        </Switch>
      )}
    />
  );
};
