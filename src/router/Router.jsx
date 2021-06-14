import { Route, Switch } from "react-router-dom";
import { Highschool } from "../page/highschool/Highschool";
import { Motivation } from "../page/Motivation";
import { Profile } from "../page/Profile";
import { UnivRouter } from "./UnivRouter";

export const Router = () => {
  return (
    <Switch>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/highschool">
        <Highschool />
      </Route>
      <Route path="/motivation">
        <Motivation />
      </Route>
      <UnivRouter />
    </Switch>
  );
};
